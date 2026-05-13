#!/usr/bin/env python3
"""
Download USGS 3DEP LiDAR tiles for Great Falls / Potomac River.

Source  : USGS National Map (TNM) — MD_Central_Processing_D24
Sensor  : Traditional airborne NIR LiDAR, December 2023
Format  : LAZ 1.4
Output  : ./laz/

Run:
    python3 download.py
"""

import json
import ssl
import sys
import urllib.request
import urllib.parse
from pathlib import Path

# ── AOI ───────────────────────────────────────────────────────────────────────
BBOX = [-77.30, 38.98, -77.22, 39.02]  # [west, south, east, north]

# ── TNM API ───────────────────────────────────────────────────────────────────
TNM_API  = "https://tnmaccess.nationalmap.gov/api/v1/products"
DATASET  = "Lidar Point Cloud (LPC)"
PROJECT  = "MD_Central_Processing_D24"   # filter to this project only
MAX      = 100

OUT_DIR  = Path(__file__).parent / "laz"


def _build_opener() -> urllib.request.OpenerDirector:
    try:
        import certifi
        ctx = ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        ctx = ssl.create_default_context()
    return urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))

_opener = _build_opener()


def urlopen(url: str, timeout: int = 30):
    return _opener.open(url, timeout=timeout)


def fetch_tiles() -> list[dict]:
    params = urllib.parse.urlencode({
        "datasets": DATASET,
        "bbox":     ",".join(str(x) for x in BBOX),
        "max":      MAX,
        "outputFormat": "json",
    })
    url = f"{TNM_API}?{params}"
    with urlopen(url) as r:
        data = json.loads(r.read())

    items = data.get("items", [])

    # Filter to this project only
    filtered = [
        item for item in items
        if PROJECT in item.get("sourceId", "") or PROJECT in item.get("title", "")
        or PROJECT in (item.get("downloadURL") or "")
    ]

    if not filtered:
        # Fallback: return all if project filter matches nothing
        print(f"  (no project filter match — returning all {len(items)} items)")
        return items

    return filtered


def download(url: str, dest: Path) -> None:
    if dest.exists():
        print(f"  skip   {dest.name}")
        return

    tmp = dest.with_suffix(".tmp")
    try:
        with urlopen(url) as r, open(tmp, "wb") as f:
            while chunk := r.read(1 << 20):
                f.write(chunk)
        tmp.rename(dest)
        size_mb = dest.stat().st_size / 1_048_576
        print(f"  saved  {dest.name}  ({size_mb:.1f} MB)")
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        print(f"  ERROR  {dest.name}: {exc}")


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    print(f"Querying TNM for {PROJECT} tiles over Great Falls...")
    tiles = fetch_tiles()
    print(f"Found {len(tiles)} tiles\n")

    if not tiles:
        print("No tiles found.")
        sys.exit(1)

    for i, tile in enumerate(tiles, 1):
        url  = tile.get("downloadURL") or tile.get("urls", {}).get("LAZ")
        if not url:
            print(f"[{i}/{len(tiles)}] no download URL — skipping")
            continue

        name = url.split("/")[-1]
        dest = OUT_DIR / name

        print(f"[{i}/{len(tiles)}] {name}  ({tile.get('sizeInBytes', 0) / 1e6:.1f} MB)")
        download(url, dest)

    count = len(list(OUT_DIR.glob("*.laz")))
    print(f"\nDone. {count} files in {OUT_DIR}")


if __name__ == "__main__":
    main()
