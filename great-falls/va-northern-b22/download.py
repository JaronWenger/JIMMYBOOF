#!/usr/bin/env python3
"""
Download USGS 3DEP LiDAR tiles for Great Falls — Virginia side.

Source  : USGS National Map — VA_NorthernVA_B22
Sensor  : Traditional airborne LiDAR, 2022 (published Nov 2024)
Format  : LAZ
Output  : ./laz/

Run:
    python3 download.py
"""

import ssl
import urllib.request
from pathlib import Path

OUT_DIR = Path(__file__).parent / "laz"

TILES = [
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1823n7041.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1823n7044.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1823n7047.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1826n7041.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1826n7044.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1826n7047.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1829n7041.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1829n7044.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1829n7047.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1832n7041.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1832n7044.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1832n7047.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1835n7041.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1835n7044.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/VA_NorthernVA_B22/VA_NorthernVA_1_B22/LAZ/USGS_LPC_VA_NorthernVA_B22_w1835n7047.laz",
]


def _build_opener():
    try:
        import certifi
        ctx = ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        ctx = ssl.create_default_context()
    return urllib.request.build_opener(urllib.request.HTTPSHandler(context=ctx))

_opener = _build_opener()


def download(url: str, dest: Path) -> None:
    if dest.exists():
        print(f"  skip   {dest.name}")
        return
    tmp = dest.with_suffix(".tmp")
    try:
        with _opener.open(url) as r, open(tmp, "wb") as f:
            while chunk := r.read(1 << 20):
                f.write(chunk)
        tmp.rename(dest)
        print(f"  saved  {dest.name}  ({dest.stat().st_size / 1e6:.1f} MB)")
    except Exception as exc:
        tmp.unlink(missing_ok=True)
        print(f"  ERROR  {dest.name}: {exc}")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    print(f"Downloading {len(TILES)} Virginia LiDAR tiles (VA_NorthernVA_B22)...\n")
    for i, url in enumerate(TILES, 1):
        name = url.split("/")[-1]
        print(f"[{i}/{len(TILES)}] {name}")
        download(url, OUT_DIR / name)
    print(f"\nDone. {len(list(OUT_DIR.glob('*.laz')))} files in {OUT_DIR}")


if __name__ == "__main__":
    main()
