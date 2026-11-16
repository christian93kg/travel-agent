#!/usr/bin/env bash
# Check that the Airbnb sandbox holds. Runs /bin/bash under exactly the policy sandbox.sh
# gives the MCP server (via sandbox.sh --exec) and probes it from inside.
# Prints PASS/FAIL per check; exits non-zero if any check fails. Makes no Airbnb requests
# (the network checks connect to 1.1.1.1 only).
# Usage: airbnb/selftest.sh
set -uo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
TOOLS="$(dirname "$DIR")"
SCRATCH="$DIR/scratch"
mkdir -p "$SCRATCH"

ABI="$(/usr/bin/env python3 -I "$DIR/landlock_exec.py" --abi 2>/dev/null || echo unknown)"
echo "Landlock ABI: $ABI (need 6 or newer)"

command -v node >/dev/null || { echo "FAIL node not found on PATH"; exit 1; }
NODE="$(readlink -f "$(command -v node)")"
SERVER="$TOOLS/node_modules/@openbnb/mcp-server-airbnb/dist/index.js"

# A file in the repo that the sandbox must not be able to read.
REPO_FILE="$TOOLS/../README.md"
[[ -f "$REPO_FILE" ]] || REPO_FILE="$TOOLS/package.json"
REAL_HOME="$HOME"

# shellcheck disable=SC2016  # the probe script is expanded inside the sandbox, not here
PROBE='
repo_file=$1 real_home=$2 tools=$3 scratch=$4 node=$5 server=$6 outer_pid=$7
pass() { echo "PASS $*"; }
fail() { echo "FAIL $*"; }

if cat "$repo_file" >/dev/null 2>&1; then fail "read the repo ($repo_file) was allowed"; else pass "read the repo: blocked"; fi
if ls "$real_home" >/dev/null 2>&1; then fail "list \$HOME ($real_home) was allowed"; else pass "list \$HOME: blocked"; fi
probe="$tools/.landlock_probe_$$"
if touch "$probe" 2>/dev/null; then rm -f "$probe"; fail "write outside scratch ($tools) was allowed"; else pass "write outside scratch: blocked"; fi
if touch "/tmp/.landlock_probe_$$" 2>/dev/null; then rm -f "/tmp/.landlock_probe_$$"; fail "write to /tmp was allowed"; else pass "write to /tmp: blocked"; fi
if echo ok > "$scratch/.probe" 2>/dev/null && rm -f "$scratch/.probe"; then pass "write inside scratch: ok"; else fail "write inside scratch was blocked"; fi
if [[ -r "$server" ]] && "$node" --version >/dev/null 2>&1; then pass "node runtime and MCP server readable: ok"; else fail "node or the MCP server is not readable inside the sandbox"; fi
err=$( { timeout 8 bash -c "exec 3<>/dev/tcp/1.1.1.1/80"; } 2>&1 )
if [[ $? -eq 0 ]]; then fail "TCP 80 connect was allowed"; else pass "TCP 80: blocked (${err##*: })"; fi
if timeout 8 bash -c "exec 3<>/dev/tcp/1.1.1.1/443" 2>/dev/null; then pass "TCP 443: ok"; else fail "TCP 443 connect failed (blocked, or no network)"; fi
if kill -0 "$outer_pid" 2>/dev/null; then fail "signal to a process outside the sandbox was allowed"; else pass "signal outside the sandbox: blocked"; fi
if grep -q "^NoNewPrivs:[[:space:]]*1" /proc/self/status; then pass "NO_NEW_PRIVS: set"; else fail "NO_NEW_PRIVS not set"; fi
extra=$(env | cut -d= -f1 | grep -vxE "HOME|TMPDIR|PATH|LANG|NODE_OPTIONS|PWD|OLDPWD|SHLVL|_" | tr "\n" " ")
if [[ -z "$extra" ]]; then pass "environment limited to: $(env | cut -d= -f1 | sort | tr "\n" " ")"; else fail "unexpected environment variables: $extra"; fi
if [[ "$HOME" == "$scratch" && "$TMPDIR" == "$scratch" ]]; then pass "HOME and TMPDIR = scratch"; else fail "HOME=$HOME TMPDIR=$TMPDIR (expected $scratch)"; fi
'

export TA_SELFTEST_CANARY=leaked
OUT="$("$DIR/sandbox.sh" --exec /bin/bash -c "$PROBE" probe \
  "$REPO_FILE" "$REAL_HOME" "$TOOLS" "$SCRATCH" "$NODE" "$SERVER" "$$" 2>&1)"
STATUS=$?
echo "$OUT"
if [[ $STATUS -ne 0 ]] || ! grep -q '^PASS' <<<"$OUT"; then
  echo "FAIL sandbox did not start (exit $STATUS)"
  exit 1
fi
if grep -q '^FAIL' <<<"$OUT"; then
  echo "SELFTEST FAILED"
  exit 1
fi
echo "SELFTEST OK"
