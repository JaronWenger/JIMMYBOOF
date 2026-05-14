# Architectural Patterns

## Downloader Pattern (all 4 download.py files)

Every downloader shares the same three-part structure:

**1. SSL fix for macOS Python.org installs**
All downloaders define `_build_opener()` which tries certifi first, falls back to system
certs. See `download.py:22-34`, `potomac-topo-2019/download.py:46-53`.
Never use `urllib.request.urlretrieve` — it ignores the custom SSL context.

**2. Atomic temp-file download**
`download()` writes to `dest.with_suffix(".tmp")` then renames on success.
Aborted downloads leave no partial `.laz` files. `tmp.unlink(missing_ok=True)` on error.
See `potomac-topo-2019/download.py:57-70`.

**3. Skip-if-exists idempotency**
Every downloader checks `dest.exists()` before fetching. Safe to re-run at any time.

## Two Downloader Variants

**Hardcoded URL list** (`potomac-topo-2019/download.py`, `va-northern-b22/download.py`)
— Used when tile set is fixed and known. TILES list at top of file.
— Simpler, no API dependency, but requires manual tile selection upfront.

**API discovery** (`download.py` via Planetary Computer STAC, `md-central-d24/download.py` via TNM)
— Used when tile set is dynamic or unknown.
— Planetary Computer requires SAS token signing per Azure container (`download.py:60-76`).
— TNM API uses bbox + project filter (`md-central-d24/download.py:48-73`).

## COPC Conversion

Raw `.laz` files are converted to `.copc.laz` for streaming access in QGIS.
QGIS 4 uses Virtual Point Cloud (`.vpc`) as an index over multiple COPC tiles.
VPC files (`great-falls.vpc`, `md-central-d24/md-central.vpc`) are generated inside QGIS
via Processing → Point Cloud → Build VPC.

## DEM Export and Merge Pipeline

1. QGIS: Export point cloud layer to raster DEM (PDAL pipeline under the hood)
   — Output path must have no trailing space or PDAL assertion fails
2. MD Central DEM comes out as EPSG:2893 (feet); reproject before merging:
   `gdalwarp -s_srs EPSG:2893 -t_srs EPSG:26918 -tr 0.3 0.3 md-central-dem.tif md-central-dem-utm.tif`
3. Merge: `gdal_merge.py -o merged-dem.tif great-falls-dem.tif md-central-dem-utm.tif`
4. Fill nodata gaps: `gdal_fillnodata.py merged-dem.tif merged-dem-filled.tif`

## CloudCompare Mesh Workflow

Target file: `potomac-topo-2019/laz/USGS_LPC_MD_PotomacRiverTopoBathy_2019_D19_18SUJ050170.laz`

1. Load LAZ → set Active Scalar Field to **Classification** before filtering
2. Filter scalar field: keep classes 2 (Ground) + 26 (Bathymetric bottom) [+ 40/41 if present]
3. Compute normals: radius 0.3m
4. Mesh → Delaunay 2D (NOT Poisson — Poisson creates a blobby closed surface)
5. Export as OBJ → `great-falls-tile.obj`

Requires CloudCompare **20260128 alpha** on macOS 26.x — earlier versions have either
broken file dialogs (2.13.2, 20250913) or missing CGAL for Delaunay.

## Blender Import Quirks

- OBJ import from CloudCompare produces large UTM coordinates → floating point jitter
  Fix: Object → Set Origin → Origin to Geometry, then zero out Location in Properties
- Scroll-wheel zoom freezes near surface (pivot gets stuck inside mesh)
  Fix: Preferences → Navigation → enable **Auto Depth**
- UV unwrap required before textures display: Edit Mode → A → U → Smart UV Project
- Displacement requires Material Properties → Settings → Displacement → "Displacement and Bump"

## PBR Material Node Order (Blender Shader Editor)

```
Texture Coordinate.UV → Mapping.Vector → [all Image Texture nodes].Vector
Image Texture (Color, sRGB)       → Principled BSDF.Base Color
Image Texture (Roughness, Non-Color) → Principled BSDF.Roughness
Image Texture (NormalGL, Non-Color)  → Normal Map.Color → Principled BSDF.Normal
Image Texture (Displacement, Non-Color) → Displacement.Height → Material Output.Displacement
```

Use NormalGL (not NormalDX) — Blender uses OpenGL convention.
Mapping node Scale X/Y = 10-20 to tile rock texture at natural scale across ~1km mesh.

## LAS Classification Reference (2019 Topobathy)

| Class | Meaning |
|-------|---------|
| 1 | Unclassified |
| 2 | Ground |
| 7 | Noise |
| 9 | Water (hide in QGIS to fix high-water-level artifact on VA side) |
| 21/25 | Water column |
| 26 | Bathymetric bottom (submerged rock) ← key for riverbed mesh |
| 29 | Submerged feature |
