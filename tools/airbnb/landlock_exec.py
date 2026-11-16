#!/usr/bin/env python3
"""Run one command inside a Landlock sandbox (Linux only, Landlock ABI 6 or newer).

The process restricts itself with Landlock, then execs CMD. The rules are inherited
by CMD and by every process CMD starts, and they cannot be loosened afterwards.

Usage:
    landlock_exec.py --ro DIR [--ro DIR ...] --rw DIR [--rw DIR ...] [--port N ...] -- CMD [ARGS...]

What the rules allow:
    Filesystem  read and execute under each --ro path; read, write, create and delete
                under each --rw path; read/write on /dev/null. Nothing else.
    Network     outbound TCP connect only to the --port ports. Binding a TCP port is denied.
    IPC         no connecting to abstract unix sockets, and no signals, outside the sandbox.
    Privileges  NO_NEW_PRIVS is set, so setuid/setgid binaries cannot raise privileges.
    Environment replaced with a minimal one: HOME and TMPDIR point at the first --rw
                directory; PATH=/usr/bin:/bin; LANG=C.UTF-8; NODE_OPTIONS empty.
                No inherited variable (tokens, proxies, keys) reaches CMD.

Limits, read before you rely on it:
    - UDP is not controlled. Landlock has no UDP rules, so DNS lookups (and any
      other UDP traffic) still work.
    - /proc is readable if you grant it with --ro /proc (Node needs parts of it).
      That exposes process listings and other processes' command lines.
    - Paths that do not exist when the rules are built are skipped silently.
    - Refuses to run on a kernel whose Landlock ABI is below 6 (or without Landlock),
      instead of running with weaker rules.

Probe the ABI of the running kernel:  landlock_exec.py --abi
"""
import ctypes
import os
import struct
import sys

# Syscall numbers are the same on x86_64 and aarch64.
SYS_LANDLOCK_CREATE_RULESET, SYS_LANDLOCK_ADD_RULE, SYS_LANDLOCK_RESTRICT_SELF = 444, 445, 446
LANDLOCK_CREATE_RULESET_VERSION = 1
LANDLOCK_RULE_PATH_BENEATH, LANDLOCK_RULE_NET_PORT = 1, 2
PR_SET_NO_NEW_PRIVS = 38
MIN_ABI = 6

# Filesystem access rights, in kernel bit order (ABI 1..5).
_FS_NAMES = ['EXECUTE', 'WRITE_FILE', 'READ_FILE', 'READ_DIR', 'REMOVE_DIR', 'REMOVE_FILE',
             'MAKE_CHAR', 'MAKE_DIR', 'MAKE_REG', 'MAKE_SOCK', 'MAKE_FIFO', 'MAKE_BLOCK',
             'MAKE_SYM', 'REFER', 'TRUNCATE', 'IOCTL_DEV']
FS = {name: 1 << bit for bit, name in enumerate(_FS_NAMES)}
FS_ALL = sum(FS.values())
# Rights that make sense on a single file (the kernel rejects directory-only rights there).
FS_FILE_RIGHTS = FS['EXECUTE'] | FS['WRITE_FILE'] | FS['READ_FILE'] | FS['TRUNCATE'] | FS['IOCTL_DEV']
FS_READ_ONLY = FS['EXECUTE'] | FS['READ_FILE'] | FS['READ_DIR']
FS_READ_WRITE = FS_ALL & ~(FS['MAKE_CHAR'] | FS['MAKE_BLOCK'] | FS['IOCTL_DEV'])

NET_BIND_TCP, NET_CONNECT_TCP = 1, 2                  # ABI 4
SCOPE_ABSTRACT_UNIX_SOCKET, SCOPE_SIGNAL = 1, 2       # ABI 6

libc = ctypes.CDLL(None, use_errno=True)
libc.syscall.restype = ctypes.c_long


def die(msg):
    sys.stderr.write('landlock_exec: ' + msg + '\n')
    sys.exit(1)


def syscall(nr, *args):
    ret = libc.syscall(nr, *args)
    if ret < 0:
        err = ctypes.get_errno()
        die(f'syscall {nr} failed: {os.strerror(err)}')
    return ret


def landlock_abi():
    """Return the kernel's Landlock ABI version, or a negative number if unavailable."""
    return libc.syscall(SYS_LANDLOCK_CREATE_RULESET, None, ctypes.c_size_t(0),
                        ctypes.c_uint32(LANDLOCK_CREATE_RULESET_VERSION))


def parse_args(argv):
    if argv == ['--abi']:
        print(landlock_abi())
        sys.exit(0)
    if '--' not in argv:
        die('missing "--" before the command')
    split = argv.index('--')
    opts, cmd = argv[:split], argv[split + 1:]
    lists = {'--ro': [], '--rw': [], '--port': []}
    if len(opts) % 2:
        die('every option takes one value')
    for flag, value in zip(opts[::2], opts[1::2]):
        if flag not in lists:
            die(f'unknown option {flag}')
        lists[flag].append(value)
    if not cmd:
        die('no command given after "--"')
    if not lists['--rw']:
        die('need at least one --rw directory (it becomes HOME and TMPDIR)')
    for port in lists['--port']:
        if not port.isdigit() or not 0 < int(port) < 65536:
            die(f'bad port {port!r}')
    return lists['--ro'], lists['--rw'], [int(p) for p in lists['--port']], cmd


def main():
    ro, rw, ports, cmd = parse_args(sys.argv[1:])

    abi = landlock_abi()
    if abi < MIN_ABI:
        die(f'Landlock ABI {abi} is below {MIN_ABI} (or Landlock is disabled); refusing to run unsandboxed')

    # struct landlock_ruleset_attr { u64 handled_access_fs; u64 handled_access_net; u64 scoped; }
    attr = struct.pack('=QQQ', FS_ALL, NET_BIND_TCP | NET_CONNECT_TCP,
                       SCOPE_ABSTRACT_UNIX_SOCKET | SCOPE_SIGNAL)
    attr_buf = ctypes.create_string_buffer(attr, len(attr))
    ruleset = syscall(SYS_LANDLOCK_CREATE_RULESET, attr_buf, ctypes.c_size_t(len(attr)), ctypes.c_uint32(0))

    def allow_path(path, access):
        path = os.path.realpath(path)
        if not os.path.exists(path):
            return
        fd = os.open(path, os.O_PATH | os.O_CLOEXEC)
        if not os.path.isdir(path):
            access &= FS_FILE_RIGHTS
        # struct landlock_path_beneath_attr { u64 allowed_access; s32 parent_fd; } (packed)
        rule = struct.pack('=Qi', access, fd)
        syscall(SYS_LANDLOCK_ADD_RULE, ruleset, LANDLOCK_RULE_PATH_BENEATH,
                ctypes.create_string_buffer(rule, len(rule)), ctypes.c_uint32(0))
        os.close(fd)

    for path in ro:
        allow_path(path, FS_READ_ONLY)
    for path in rw:
        allow_path(path, FS_READ_WRITE)
    allow_path('/dev/null', FS['READ_FILE'] | FS['WRITE_FILE'])

    for port in ports:
        # struct landlock_net_port_attr { u64 allowed_access; u64 port; }
        rule = struct.pack('=QQ', NET_CONNECT_TCP, port)
        syscall(SYS_LANDLOCK_ADD_RULE, ruleset, LANDLOCK_RULE_NET_PORT,
                ctypes.create_string_buffer(rule, len(rule)), ctypes.c_uint32(0))

    if libc.prctl(PR_SET_NO_NEW_PRIVS, 1, 0, 0, 0) != 0:
        die('prctl(PR_SET_NO_NEW_PRIVS) failed')
    syscall(SYS_LANDLOCK_RESTRICT_SELF, ruleset, ctypes.c_uint32(0))
    os.close(ruleset)

    home = os.path.realpath(rw[0])
    env = {'HOME': home, 'TMPDIR': home, 'PATH': '/usr/bin:/bin', 'LANG': 'C.UTF-8', 'NODE_OPTIONS': ''}
    try:
        os.execve(cmd[0], cmd, env)
    except OSError as e:
        die(f'cannot exec {cmd[0]}: {e.strerror}')


if __name__ == '__main__':
    main()
