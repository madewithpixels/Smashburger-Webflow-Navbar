# New Smashburger Test — renamed source fixture

## Authority and backup

Michael offered this fresh empty site for testing in this chat on 15 October 2026, then explicitly approved: “Publish this test site's staging subdomain only”. Only this site's Webflow staging subdomain was published. No Library share, existing component update, custom-domain publication, new Git tag or CDN release was made.

- Site: `6ad10fe7ca9deaf9a5ea7498`, New Smashburger Test.
- Home: `6ad10fe9ca9deaf9a5ea74b9`.
- [Designer](https://new-smashburger-test.design.webflow.com/).
- [Published test fixture](https://new-smashburger-test.webflow.io/).
- Before mutation, MCP returned only an empty Body. Designer backup **Blank baseline before sb-nav candidate — 15 Oct 2026** was saved and read back in Backups at 18:46:23: 1 page, 0 styles, 1 element. No “Saving…” indicator remained before structural work.

## What this fixture proves

This is a newly built native test navbar, not an imported MWP Component Library component. Its native header, details/summary trigger, adjacent shared nav, primary/secondary groups, nested submenu, icon bars and backdrop use accepted `sb-nav` classes and retained runtime hooks. It is deliberately plain. It does not reproduce or verify the Library's full properties, variants, icon assets, settings inspector or update linkage.

Final saved inventory: 45 nodes including Body, String nodes, outside heading and test controls; 26 local base styles; no legacy class tokens or combo classes. The named runtime and Canvas Embeds exactly matched `candidate/webflow/navbar-light-embed.html` (45,227 bytes) and `candidate/webflow/navbar-light-canvas-embed.html` (4,182 bytes). Their runtime hooks and source bytes were not edited for Webflow. The external test-controls Embed matches [its source](fixtures/sb-nav-test-controls.html), sits outside the portable header and only changes transient page state through visible controls.

Key IDs:

- Root: `e627aafa-583e-023b-9d2f-59640bf9a5ee`.
- Inner: `a1abca52-bbc4-414b-445f-349fab8d7aa6`.
- Menu: `90a01958-f744-9799-40c7-e1a089ef31ec`.
- Trigger: `5386a44b-6a9d-a308-4fc9-440add89ea99`.
- Panel: `04b6bf81-5513-d926-2239-889ca7f12f98`.
- Runtime Embed: `2fa6c1a1-cbb1-9925-51bc-ea69b67b2ffb`.
- Canvas Embed: `c337b392-e34b-c712-3b17-017c119cd43a`.
- Outside controls Embed: `4c22de96-f0bb-e62f-0b4a-2641aa7054d1`.

Full native tree and style readback: [saved state](evidence/new-smashburger-test-saved-state-2026-10-15.json).

## Live checks

Chrome staging checks used the self-contained candidate from source commit `1261de5`:

- All 35 layout/motion pairs at 393 × 800: open and Escape-close, matching ARIA/inert, focus returned to Navigation menu, no horizontal overflow and contained panel bounds.
- All five collapse choices at 1280, 991, 767, 479 and 393px: 25 threshold/width checks passed.
- Enter opens the menu. Opening More exposes Nested link. Escape from that link closes only the submenu and focuses More; the next Escape closes the outer menu and focuses Navigation menu.
- Full-width and Right at 393 × 384: panel bounds remained within the viewport and `overflow-y: auto` was present. This does not cover every content length or viewport height.
- Genuine no-JavaScript reload through Chrome DevTools: the browser showed JavaScript blocked; no `data-mwp-ready`, runtime state or enhanced ARIA attributes appeared. At 393px, closed panel CSS had opacity 0 and visibility hidden. Native clicks opened the menu (opacity 1, visibility visible) and submenu (`display: grid`) without enhancement. Page width stayed 393px. JavaScript was re-enabled, DevTools closed and a normal reload confirmed enhanced ready/closed state again.
- A final mobile render in the in-app browser also initialised and opened the candidate with matching 0–393px containment and the authored chevron angles.

The first narrow Never test overflowed to 452px because the fixture's authored inner row did not wrap. As documented in README, Never keeps the expanded links; the designer must make them fit. Added ordinary `flex-wrap: wrap` to `sb-nav-inner`, read it back and republished the authorised staging fixture. All 25 cases then passed. Added native ±45° transforms to the two test chevron bars and verified the saved and rendered angles. These are fixture presentation corrections, not runtime fixes.

[Measurements](evidence/new-smashburger-test-results-2026-10-15.json) and [final mobile screenshot](evidence/new-smashburger-test-mobile-2026-10-15.jpg) are retained. The no-JavaScript screenshot is a raw DevTools-emulation capture; the measured native state is the primary evidence for that check.

## Limits and final state

Webflow Preview stayed on its first-time custom-code loading screen. It did not provide candidate behavior evidence. Michael noted that Preview sometimes gets stuck. Returned Designer to normal Design mode with its original custom-code preference off; published staging supplied the runtime evidence. Browser viewport overrides were reset, JavaScript restored and temporary local servers/tabs cleaned up. The staging deliverable is left available with saved Tablet / Dropdown / Dropdown defaults; test-control changes do not persist.

No Library instance was imported or upgraded. Full Library property/asset retention, versioned source editions, linkage, cloned upgrade/rollback, human/device accessibility, physical-display icon checks and final release approval remain open. This fixture is evidence for R-121, not acceptance of the complete rename or a new distribution release.
