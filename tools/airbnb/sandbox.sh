#!/usr/bin/env bash
# Start the Airbnb MCP server (@openbnb/mcp-server-airbnb) inside a Landlock sandbox.
# It speaks MCP over stdin/stdout; client.js drives it. Linux only (Landlock ABI 6+).
#
#   Read-only:  /usr /lib /lib64 /bin /etc /proc /sys/devices/system/cpu,
#               the Node runtime, and tools/node_modules
#   Writable:   tools/airbnb/scratch only (it is also HOME and TMPDIR)
#   Network:    outbound TCP 443 only (UDP/DNS is not controlled by Landlock)
#   Everything else, including this repo and the rest of your home directory, is out of reach.
#
# robots.txt: Airbnb's robots.txt disallows the search pages, so the server refuses every
# request unless it runs with --ignore-robots-txt. This script passes that flag by default
# (the choice is made here, for low-volume personal trip planning inside the sandbox).
# Set BNB_RESPECT_ROBOTS=1 to drop it; requests are then refused.
#
# Usage: airbnb/sandbox.sh [extra server args...]
#        airbnb/sandbox.sh --exec CMD [ARGS...]   run CMD under the same policy (selftest.sh uses this)
set -euo pipefail

DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd -P)"
TOOLS="$(dirname "$DIR")"
MOD_DIR="$TOOLS/node_modules"
SERVER="$MOD_DIR/@openbnb/mcp-server-airbnb/dist/index.js"
SCRATCH="$DIR/scratch"

command -v node >/dev/null || { echo "sandbox.sh: node not found on PATH" >&2; exit 1; }
NODE="$(readlink -f "$(command -v node)")"
NODE_DIR="$(dirname "$(dirname "$NODE")")"
[[ -f "$SERVER" ]] || { echo "sandbox.sh: $SERVER missing; run tools/setup.sh first" >&2; exit 1; }
mkdir -p "$SCRATCH"

if [[ "${1:-}" == --exec ]]; then
  shift
  CMD=("$@")
else
  CMD=("$NODE" "$SERVER")
  [[ "${BNB_RESPECT_ROBOTS:-}" == 1 ]] || CMD+=(--ignore-robots-txt)
  CMD+=("$@")
fi
(( ${#CMD[@]} )) || { echo "sandbox.sh: --exec needs a command" >&2; exit 2; }

exec /usr/bin/env python3 -I "$DIR/landlock_exec.py" \
  --ro /usr --ro /lib --ro /lib64 --ro /bin --ro /etc --ro /proc --ro /sys/devices/system/cpu \
  --ro "$NODE_DIR" --ro "$MOD_DIR" \
  --rw "$SCRATCH" \
  --port 443 \
  -- "${CMD[@]}"
