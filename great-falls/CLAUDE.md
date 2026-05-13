# Great Falls — LiDAR to 3D Pipeline

Real-terrain visualization and game pipeline for Great Falls on the Potomac River.
Pipeline: USGS LiDAR download → QGIS visualization → CloudCompare mesh → Blender render → Three.js kayak game.

## Tech Stack

- **Python 3** — LiDAR tile downloaders (stdlib only + optional certifi)
- **QGIS 4.0.2** — Point cloud visualization, DEM export, Virtual Point Cloud (VPC)
- **GDAL** — DEM reprojection (`gdalwarp`), merge (`gdal_merge`), fill (`gdal_fillnodata`)
- **CloudCompare 20260128 alpha** — Point cloud filtering, normal computation, Delaunay 2D mesh export
- **Blender 5.1.1** — OBJ import, PBR materials, Mantaflow water sim, glTF export
- **Three.js + Rapier.js** — (planned) browser-based kayaking game

## Key Directories

```
great-falls/
├── download.py                    # VA Fairfax 2018 via Planetary Computer STAC
├── laz/                           # 43 COPC tiles, VA side, NOAA topobathy
├── great-falls.vpc                # QGIS Virtual Point Cloud index (all VA tiles)
├── dem/great-falls-dem.tif        # DEM exported from VA tiles, EPSG:26918
├── merged-dem.tif                 # VA + MD DEMs merged (after gdalwarp reproject)
├── merged-dem-filled.tif          # Nodata gaps filled via gdal_fillnodata
├── QGIS/                          # QGIS project files
├── md-central-d24/
│   ├── download.py                # MD Dec 2023 via TNM API
│   ├── laz/                       # 12 LAZ + COPC tiles, MD side
│   ├── dem/md-central-dem.tif     # DEM in EPSG:2893 (MD State Plane ftUS)
│   └── dem/md-central-dem-utm.tif # Reprojected to EPSG:26918 for merging
├── va-northern-b22/
│   ├── download.py                # VA 2022 via hardcoded rockyweb.usgs.gov URLs
│   └── laz/                       # 15 LAZ + COPC tiles, VA side
└── potomac-topo-2019/             # PRIMARY DATASET
    ├── download.py                # 2019 Topobathy via hardcoded rockyweb URLs
    ├── laz/                       # 15 LAZ + COPC tiles, both banks
    ├── great-falls-tile.obj       # Mesh exported from CloudCompare (tile 18SUJ050170)
    ├── Rock022_4K-PNG/            # PBR rock textures (ambientcg.com)
    └── *.blend                    # Blender project files
```

## Running the Downloaders

```bash
cd great-falls && python3 download.py                    # VA Fairfax 2018 (43 tiles)
cd md-central-d24 && python3 download.py                 # MD Central 2023 (12 tiles)
cd va-northern-b22 && python3 download.py                # VA Northern 2022 (15 tiles)
cd potomac-topo-2019 && python3 download.py              # Potomac Topobathy 2019 (15 tiles) ← best
```

All downloaders are idempotent — skip files that already exist.

## Dataset Priority

| Dataset | Year | Best for |
|---------|------|---------|
| `potomac-topo-2019` | Oct 2019 low water | **Riverbed + bathymetry** — use this for meshes |
| `md-central-d24` | Dec 2023 | MD bank terrain |
| `va-northern-b22` | 2022 | VA bank terrain (hide class 9 Water in QGIS) |
| root `laz/` | 2018 | Legacy; patchy at Great Falls (NOAA green laser) |

## CRS Reference

- All tile downloaders output native CRS (mixed)
- Target merge CRS: **EPSG:26918** (NAD83 UTM Zone 18N, meters)
- MD Central D24 native CRS: **EPSG:2893** (Maryland State Plane, US feet) — must reproject before merging

## Additional Documentation

- [.claude/docs/architectural_patterns.md](.claude/docs/architectural_patterns.md) — downloader design, SSL fix, COPC conversion, Blender quirks
