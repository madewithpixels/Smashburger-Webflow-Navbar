# R-269 dark social and contact icons — local source trace

**Finding:** In the current candidate, `data-presets="false"` disables the CSS treatment that recolours the native social/contact image icons to match their link text. The images are therefore left to display their own source colours (and any authored image styling). This is the concrete local mechanism that can explain dark icons in presets-off mode. It is not a verified finding about the exact pixels in the supplied Preview screenshot because the checked-in evidence does not contain the actual image files or their decoded fills.

## What the local files establish

- `src/navbar-light.css` lines 531–541 documents the reason for the image-specific treatment and defines it. Unless presets are explicitly false (case-insensitive), and unless `data-icon-mode="original"` is set, the secondary link is clipped and its image is shifted while a `drop-shadow(... currentColor)` copy is painted. This makes a single-colour image silhouette follow the link's `currentColor`.
- The selector excludes roots with `data-presets="false"`; when presets are off, this recolouring rule does not apply. There is no separate preset-off rule that assigns a replacement light fill to those images.
- `candidate/dist/navbar-light.css` lines 422–429 contains the same condition and declarations. The candidate's minified CSS also contains the rule. Thus the checked-in candidate does not add a different icon-colour path.
- `webflow/evidence/library-sb-nav-baseline-2026-10-15.json` records replaceable Image properties for the social/contact icons. The default Facebook and Instagram image values are asset IDs (`6a7cf64c75497f55ff504577` and `6a7cf64d66190b82a7713c40`); further social and contact image properties are recorded in the same property groups. The JSON identifies the assets but does not include their image bytes, SVG markup or fill values.
- `webflow/layout-presets.md` lines 68–74 describes the intended behavior: preset-on stock images follow link text colour; presets off leaves them for site styling; multicolour images can opt into original treatment.

## What remains unconfirmed

The supplied screenshot and prior staging notes show very dark icons against the black panel, but local files cannot establish whether those exact icon assets contain dark fills, whether the selected Webflow Image properties have been replaced, or whether Designer/Preview applies another image style. Confirming the asset pixels requires reading or exporting the actual selected assets; confirming the screenshot cause requires inspecting the same menu instance and image computed styles in Preview at a matched viewport. No icon colours or Webflow content were changed in this trace, and no contrast fix is claimed.
