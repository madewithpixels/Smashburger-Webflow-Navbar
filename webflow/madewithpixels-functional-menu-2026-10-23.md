# madewithpixels: functional-only menu update — 23 October 2026

Codex, following Michael's restored backup and explicit brief to implement only overlay, stagger and the actual estimate CTA. Visual styling belongs to Michael. This is consumer evidence, not an SB release acceptance or the R-268 controlled regression test.

## Changed

- Existing `SB Header` root: `data-layout="overlay"`, `data-stagger="80ms"`. Existing `data-collapse="always"` and `data-presets="false"` retained.
- Added the existing `Instant Advice Button` component as the menu CTA, labelled `Instant Estimate`, retaining its default Webflow page target `/estimate`. Hid the superseded Estimate text link without deleting it.
- Added a native wrapper with `data-mwp-item` so the CTA participates in stagger. A Menu-only button variant changes only positioning: relative with top/right/bottom/left auto at desktop/tablet/mobile breakpoints, avoiding the hero instance's absolute placement.
- The restored site's panel class overrides the runtime's low-specificity fixed positioning. Added only `position: fixed; inset: 0` under `[data-mwp-navbar][data-layout="overlay"] [data-mwp-panel]` in the existing Embed. Original v0.2.6 loader remains intact before this functional positioning rule.
- No colour, font, spacing, alignment or primary-link class changes. No head-code changes, publication or Library sharing.

## Checked

- Exact saved-tree comparisons: six primary links and their `mwp-css-nav_link` classes/settings unchanged; burger subtree unchanged; all Home section IDs and offsets unchanged. Home head code is byte-for-byte unchanged. Original loader content is preserved.
- Preview at 1192 px and 393 px: panel fixed at (0, 0), with viewport-matching width and height; CTA position relative, text `Instant Estimate`, href `/estimate`.
- Rendered primary-link delays: 0, 80, 160, 240, 320 and 400 ms.
- Desktop Pricing jump: expected section top + 0.85 × viewport height = 24691.78125 px; actual scroll 24692 px. Menu closed; blur held during jump and cleared after settling.
- Mobile Pricing jump: expected section top without offset = 21789.09375 px; actual scroll 21789 px. Menu closed.
- Home link still scrolls to 0 and closes the menu.

## Handoff

Michael can now style the restored menu manually. Retain `mwp-css-nav_link`, Webflow section targets, section IDs/offsets and the Home head script. The duplicate-name release test remains separate in R-268. Existing uncommitted STATUS work was not edited.
