#!/usr/bin/env bash
# Rebuild the website of the Center for Artificial Intelligence in Healthcare
# Computing and Systems (AIHCS) from its private source repository and copy the
# output into static/aihcs/, which Hugo publishes verbatim at /aihcs/. It builds
# with --web, so directory links end in "/" rather than "/index.html".
#
# The source repository (pittisl/pitt-ece-health-website) stays private because
# its data files hold material that is deliberately not rendered, such as
# unconfirmed advisory board candidates. Only the built pages come here.
#
# Usage: scripts/sync-aihcs.sh <path to the pitt-ece-health-website checkout>
# Then commit static/aihcs/, naming the source commit this prints.

set -euo pipefail

if [ $# -ne 1 ]; then
    echo "usage: $0 <path to pitt-ece-health-website checkout>" >&2
    exit 2
fi

dest="$(cd "$(dirname "$0")/.." && pwd)/static/aihcs"
cd "$1"

# Build only committed content, so the published pages match a source commit.
if [ -n "$(git status --porcelain)" ]; then
    echo "$1 has uncommitted changes; commit or stash them first" >&2
    exit 1
fi
rev="$(git rev-parse --short HEAD)"

uv run build.py --web
uv run --group dev scripts/check.py

mkdir -p "$dest"
rsync -a --delete _site/ "$dest/"
echo "static/aihcs/ now holds the build of $1 at commit $rev"
