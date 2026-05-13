#!/usr/bin/env python3
"""
Download 2019 USGS Topobathy Lidar: Potomac River — Phase I
Covers Shepherdstown WV → Little Falls dam (includes Great Falls, both banks)

Collected: October 2019 — low water, rivers at or below normal levels
Sensor   : CZMIL (topographic + bathymetric channels)
NPS      : 0.7m (~2 pts/m² topo, bathymetric bottom data included)
Format   : LAZ 1.4
Classifications include:
  1=Unclassified, 2=Ground, 7=Noise, 19=Overlap default,
  20=Overlap ground, 21=Water column, 25=Water column,
  26=Bathymetric bottom (submerged rock), 29=Submerged feature

Output   : ./laz/

Run:
    python3 download.py
"""

import ssl
import urllib.request
from pathlib import Path

OUT_DIR = Path(__file__).parent / "laz"

TILES = [
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ040180.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ040190.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ040200.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050160.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050170.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050180.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050190.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050200.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050210.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ060160.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ060170.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ060200.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ060210.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ070160.laz",
    "https://rockyweb.usgs.gov/vdelivery/Datasets/Staged/Elevation/LPC/Projects/MD_PotomacRiverTopoBathy_2019_D19/MD_PotomacRiver_Bathy_2019/LAZ/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ070170.laz",
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
    print("Downloading 2019 Potomac River Topobathy — Phase I")
    print(f"{len(TILES)} tiles, Great Falls corridor, Oct 2019 low water\n")
    for i, url in enumerate(TILES, 1):
        name = url.split("/")[-1]
        print(f"[{i}/{len(TILES)}] {name}")
        download(url, OUT_DIR / name)
    print(f"\nDone. {len(list(OUT_DIR.glob('*.laz')))} files in {OUT_DIR}")


if __name__ == "__main__":
    main()
