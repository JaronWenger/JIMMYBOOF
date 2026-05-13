#!/usr/bin/env python3
"""
Download USGS 3DEP LiDAR tiles for Great Falls / Potomac River.

Source : Microsoft Planetary Computer — 3dep-lidar-copc collection
Project: USGS_LPC_VA_Fairfax_County_2018
Format : COPC (.copc.laz) — opens directly in QGIS 3.18+
Output : ./laz/

Run:
    python3 download.py
"""

import json
import ssl
import sys
import urllib.request
import urllib.parse
from pathlib import Path


def _build_opener() -> urllib.request.OpenerDirector:
    """Return an HTTPS opener that works on macOS Python.org installs."""
    try:
        import certifi
        ctx = ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        ctx = ssl.create_default_context()
        if not ctx.verify_mode:
            # Last resort: disable verification (e.g. corporate SSL inspection)
            ctx.check_hostname = False
            ctx.verify_mode = ssl.CERT_NONE
            print("WARNING: SSL verification disabled — no certifi found.")
    return urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))

_opener = _build_opener()


def urlopen(url: str, timeout: int = 30):
    return _opener.open(url, timeout=timeout)

# ── Area of interest ──────────────────────────────────────────────────────────
#   Great Falls National Park + both banks of the Potomac
#   [west lon, south lat, east lon, north lat]  WGS84
BBOX = [-77.30, 38.98, -77.22, 39.02]

# ── Paths ──────────────────────────────────────────────────────────────────────
OUT_DIR = Path(__file__).parent / "laz"

# ── Planetary Computer endpoints ───────────────────────────────────────────────
STAC_SEARCH = "https://planetarycomputer.microsoft.com/api/stac/v1/search"
SIGN_API    = "https://planetarycomputer.microsoft.com/api/sas/v1/token"
COLLECTION  = "3dep-lidar-copc"
PAGE_SIZE   = 100

# SAS token cache (one token per storage account/container pair)
_sas_cache: dict[str, str] = {}


def get_sas_token(account: str, container: str) -> str:
    key = f"{account}/{container}"
    if key not in _sas_cache:
        url = f"{SIGN_API}/{account}/{container}"
        with urlopen(url, timeout=15) as r:
            _sas_cache[key] = json.loads(r.read())["token"]
    return _sas_cache[key]


def sign_url(href: str) -> str:
    """Append a Planetary Computer SAS token to an Azure Blob Storage URL."""
    parsed  = urllib.parse.urlparse(href)
    account   = parsed.netloc.split(".")[0]
    container = parsed.path.lstrip("/").split("/")[0]
    token = get_sas_token(account, container)
    sep   = "&" if "?" in href else "?"
    return f"{href}{sep}{token}"


def search_stac(bbox: list[float]) -> list[dict]:
    """Page through STAC results and return all matching items."""
    items: list[dict] = []
    page_token = None

    while True:
        params: dict[str, str] = {
            "collections": COLLECTION,
            "bbox":        ",".join(str(x) for x in bbox),
            "limit":       str(PAGE_SIZE),
        }
        if page_token:
            params["token"] = page_token

        url = f"{STAC_SEARCH}?" + urllib.parse.urlencode(params)
        with urlopen(url, timeout=30) as r:
            page = json.loads(r.read())

        items.extend(page.get("features", []))

        next_link = next(
            (l for l in page.get("links", []) if l.get("rel") == "next"), None
        )
        if not next_link:
            break

        qs         = urllib.parse.urlparse(next_link["href"]).query
        page_token = urllib.parse.parse_qs(qs).get("token", [None])[0]
        if not page_token:
            break

    return items


def download(href: str, dest: Path) -> None:
    if dest.exists():
        print(f"  skip   {dest.name}")
        return

    tmp = dest.with_suffix(".tmp")
    try:
        signed = sign_url(href)
        with urlopen(signed) as r, open(tmp, "wb") as f:
            while chunk := r.read(1 << 20):  # 1 MB chunks
                f.write(chunk)
        tmp.rename(dest)
        size_mb = dest.stat().st_size / 1_048_576
        print(f"  saved  {dest.name}  ({size_mb:.1f} MB)")
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        print(f"  ERROR  {dest.name}: {exc}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Querying STAC for Great Falls bbox {BBOX} ...")
    items = search_stac(BBOX)
    print(f"Found {len(items)} tiles\n")

    if not items:
        print("No tiles found. Verify bbox or collection name.")
        sys.exit(1)

    for i, item in enumerate(items, 1):
        assets = item.get("assets", {})
        asset  = assets.get("data") or next(iter(assets.values()), None)
        if not asset:
            print(f"[{i}/{len(items)}] {item['id']}: no asset, skipping")
            continue

        dest = OUT_DIR / f"{item['id']}.copc.laz"
        print(f"[{i}/{len(items)}] {item['id']}")
        download(asset["href"], dest)

    print(f"\nDone. {len(list(OUT_DIR.glob('*.laz')))} files in {OUT_DIR}")


if __name__ == "__main__":
    main()
