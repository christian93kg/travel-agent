#!/usr/bin/env bash
# Install the tools' dependencies: Node packages and Playwright's Chromium (~120 MB, once).
# Usage: ./setup.sh             uses the node/npm on your PATH (Node 20+)
#        ./setup.sh --portable  downloads a private Node into tools/.node first (for hosts without npm)
set -euo pipefail
cd "$(dirname "$0")"
NODE_VERSION=v22.22.1

if [[ "${1:-}" == "--portable" ]]; then
  case "$(uname -m)" in x86_64) ARCH=x64 ;; aarch64|arm64) ARCH=arm64 ;; *) echo "unsupported CPU: $(uname -m)"; exit 1 ;; esac
  OS=$(uname -s | tr '[:upper:]' '[:lower:]')
  PKG="node-$NODE_VERSION-$OS-$ARCH"
  mkdir -p .node
  if [[ ! -x ".node/$PKG/bin/node" ]]; then
    curl -sSfL "https://nodejs.org/dist/$NODE_VERSION/$PKG.tar.xz" | tar -xJ -C .node
  fi
  export PATH="$PWD/.node/$PKG/bin:$PATH"
  echo "Portable Node installed. Add it to your PATH in each shell:"
  echo "  export PATH=\"$PWD/.node/$PKG/bin:\$PATH\""
fi

command -v npm >/dev/null || { echo "npm not found. Install Node 20+ or rerun with --portable."; exit 1; }
npm ci --no-audit --no-fund
npx playwright install chromium
mkdir -p out airbnb/scratch
echo
echo "Done. Try:  node flights/day.js JFK LIS 2027-04-10"
[[ "$(uname -s)" == Linux ]] && echo "Airbnb (Linux only):  ./airbnb/selftest.sh" || echo "The Airbnb sandbox needs Linux (Landlock). Flights work anywhere."
