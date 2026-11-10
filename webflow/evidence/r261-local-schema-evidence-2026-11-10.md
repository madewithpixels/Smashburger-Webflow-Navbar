# R-261 local schema evidence index — 10 November 2026

## Scope and boundary

This index covers the checked-in files named below, inspected on 10 November 2026. It is an inventory of dated records and written reports, not a fresh Webflow read. JSON snapshots capture the saved component data recorded when they were exported; they do not establish the component's current live state. The historical acceptance note reports a source/destination comparison but does not include the underlying destination export or its per-property rows.

## Requested fields found

- **Variant names and IDs:** Both `webflow/evidence/library-sb-nav-baseline-2026-10-15.json` and `webflow/evidence/library-sb-nav-candidate-2026-10-15.json` record five variants for each represented edition: Never, Tablet, Mobile landscape (base), Mobile portrait and Always. The baseline records original Library IDs; the candidate records new IDs for its duplicated definitions. These are 15 October snapshots, not current variant readback.
- **Property IDs and defaults:** Those same two snapshots record 60 property records per edition, including the Variant property. The 57 non-variant IDs, types, names, groups, tooltips and defaults can be compared between the recorded original source edition and its 0.3.0-rc.1 candidate. The candidate report says their non-variant definitions/defaults and asset IDs matched the respective originals. These snapshots represent the MWP Library source editions and their source-site candidates, not the destination component.
- **Icon asset mappings:** The snapshots include nine named image properties and their default asset IDs for each source edition/candidate. In these checked-in snapshots, the IDs are the same across each original/candidate pair. The 15 October candidate record describes both as source-site definitions. No destination-local asset-ID mapping table is embedded in these JSON files.
- **Historical destination comparison:** `webflow/smashburger-poc-acceptance.md` says the canonical MWP Library component and destination component were compared after publication: five variants and 57 property IDs/defaults matched, with image defaults pointing to remapped destination asset IDs; nine social/contact SVGs were destination-local and replaceable. `webflow/copy-paste-test.md` repeats the recorded clean-install result. These are narrative historical reports, not underlying component exports or a current-state read.
- **Candidate context:** `webflow/library-sb-nav-candidates-2026-10-15.md` records the candidate preparation, IDs, five variant names, nine assets, property and binding totals, and limits. It distinguishes the two 0.3.0-rc.1 source-site candidates from the older released Library editions. It does not provide a destination schema export.
- **Other checked-in destination records:** `webflow/evidence/new-smashburger-test-saved-state-2026-10-15.json` is a page tree/style snapshot for a newly built native test navbar, and explicitly is not an imported Library component. It cannot support the linked destination schema comparison. `webflow/combined-candidate-review-2026-10-16.md` contains a later written readback of source candidates and the older linked Smashburger CDN consumer; it says New Smashburger Test was unavailable at that read and its current destination schema remained unchecked.

## Evidence still needed for a current comparison

- A fresh Webflow read of the exact R-261 **source component** and exact **destination linked component**, recording component IDs, variant names/IDs, all 57 non-variant property IDs/defaults, and whether the link remains intact.
- The destination's nine icon property IDs/default asset IDs, resolved asset names, and an explicit source-to-destination mapping. The historical reports support that remapping was observed then, but do not provide the full ID crosswalk in these inspected files.
- If R-261 is intended to compare a particular destination or Library edition beyond the historical POC named in the acceptance report, identify that exact component in the later Webflow read; the local narrative does not establish a current target.

No claim is made here about the present Webflow state, or about files not listed in this index.
