#!/usr/bin/env python3
"""Download the front-end libraries the theme used to load from cdn.jsdelivr.net.

The files are committed under static/vendor/<package>@<version>/ and referenced
from data/assets.toml, so visitors' browsers no longer contact a CDN. This
script only needs to be re-run when a version below changes.

Each package is fetched from the npm registry and checked against the pinned
sha512 integrity before anything is extracted. Only the files the site needs
at runtime (plus license information) are kept.

Usage: python3 scripts/fetch-vendor-assets.py
After a version bump, update the matching url/version/sri in data/assets.toml;
the script prints the SRI values for the files that data/assets.toml references.
"""

import base64
import hashlib
import io
import pathlib
import shutil
import sys
import tarfile
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
DEST = ROOT / "static" / "vendor"

# name, version, npm tarball integrity, paths to keep (a trailing "/" keeps a
# whole directory), files whose SRI data/assets.toml needs.
PACKAGES = [
    (
        "mathjax", "3.2.2",
        "sha512-Bt+SSVU8eBG27zChVewOicYs7Xsdt40qm4+UpHyX7k0/O9NliPc+x77k1/FEsPsjKPZGJvtRZM1vO+geW0OhGw==",
        [
            "LICENSE", "package.json",
            "es5/tex-chtml.js",
            # Loaded on demand by tex-chtml.js: TeX extensions (the theme's
            # MathJax config loads [tex]/noerrors), CHTML fonts, and the
            # context menu's accessibility and speech components.
            "es5/input/tex/extensions/", "es5/output/chtml/fonts/",
            "es5/ui/", "es5/a11y/", "es5/sre/",
        ],
        ["es5/tex-chtml.js"],
    ),
    (
        "leaflet", "1.7.1",
        "sha512-/xwPEBidtg69Q3HlqPdU3DnrXQOvQU/CCHA1tcDQVzOwm91YMYaILjNp7L4Eaw5Z4sOYdbBz6koWyibppd8Zqw==",
        ["LICENSE", "package.json", "dist/leaflet.js", "dist/leaflet.css", "dist/images/"],
        ["dist/leaflet.js", "dist/leaflet.css"],
    ),
    (
        "academicons", "1.9.2",
        "sha512-LjlkK1E/daUUWqMJOXa/YeXL26K0FmN3cdyILgGCJKgo5bzgVYOO712DZDREzETrrC0MnKui8/hGYpM8kCTgZg==",
        # License terms are only stated in README.md for this package.
        ["README.md", "package.json", "css/academicons.min.css", "fonts/"],
        ["css/academicons.min.css"],
    ),
    (
        "fuse.js", "3.2.1",
        "sha512-UyWOY3xF2gmrTaLA3UJNOtufvcHX1rZKFsFOWLhnW1r0wFMZYrqPCqWJA1t39DTLpyakiaK2VdaSX7lDsiQnmw==",
        ["LICENSE", "package.json", "dist/fuse.min.js"],
        ["dist/fuse.min.js"],
    ),
    (
        "mark.js", "8.11.1",
        "sha512-1I+1qpDt4idfgLQG+BNWmrqku+7/2bi5nLf4YwF8y8zXvmfiTBY3PV3ZibfrjBueCByROpuBjLLFCajqkgYoLQ==",
        ["LICENSE", "package.json", "dist/jquery.mark.min.js"],
        ["dist/jquery.mark.min.js"],
    ),
    (
        "isotope-layout", "3.0.6",
        "sha512-z2ZKablhocXhoNyWwzJPFd7u7FWbYbVJA51Nvsqsod8jH2ExGc1SwDsSWKE54e3PhXzqf2yZPhFSq/c2MR1arw==",
        # GPLv3; the license notice is in the file header and package.json.
        ["package.json", "dist/isotope.pkgd.min.js"],
        ["dist/isotope.pkgd.min.js"],
    ),
    (
        "imagesloaded", "4.1.4",
        "sha512-ltiBVcYpc/TYTF5nolkMNsnREHW+ICvfQ3Yla2Sgr71YFwQ86bDwV9hgpFhFtrGPuwEx5+LqOHIrdXBdoWwwsA==",
        # MIT; the license notice is in the file header and package.json.
        ["package.json", "imagesloaded.pkgd.min.js"],
        ["imagesloaded.pkgd.min.js"],
    ),
]


def sri(data: bytes) -> str:
    return "sha512-" + base64.b64encode(hashlib.sha512(data).digest()).decode()


def wanted(path: str, keep: list[str]) -> bool:
    return any(path == k or (k.endswith("/") and path.startswith(k)) for k in keep)


def main() -> int:
    for name, version, integrity, keep, sri_files in PACKAGES:
        url = f"https://registry.npmjs.org/{name}/-/{name}-{version}.tgz"
        data = urllib.request.urlopen(url).read()
        if sri(data) != integrity:
            print(f"{name}@{version}: integrity mismatch for {url}", file=sys.stderr)
            return 1

        target = DEST / f"{name}@{version}"
        shutil.rmtree(target, ignore_errors=True)
        found = set()
        with tarfile.open(fileobj=io.BytesIO(data)) as tar:
            for member in tar.getmembers():
                path = member.name.removeprefix("package/")
                if not member.isfile() or not wanted(path, keep):
                    continue
                out = target / path
                out.parent.mkdir(parents=True, exist_ok=True)
                out.write_bytes(tar.extractfile(member).read())
                found.update(k for k in keep if wanted(path, [k]))
        if missing := set(keep) - found:
            print(f"{name}@{version}: not in package: {sorted(missing)}", file=sys.stderr)
            return 1

        for f in sri_files:
            print(f"/vendor/{name}@{version}/{f}\n    {sri((target / f).read_bytes())}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
