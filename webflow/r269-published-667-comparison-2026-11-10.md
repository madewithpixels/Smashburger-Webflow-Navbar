# Published and Preview comparison at 667 px

**Date:** 10 November 2026 — Codex (night shift)
**Page:** Disposable SB test site, Home
**Published URL:** https://disposable-sb-test-site.webflow.io/

## Observed in saved Preview

- Webflow showed a 667 px Canvas width. Three menu instances were stacked vertically; the third (bottom) row was open.
- The panel spans the row width, with Home, CDN build, Self-hosted and Style guide across the first line; More below; an outlined VIEW RELEASE CTA; then social and contact links on additional lines.
- The social/contact icon marks look very dark against the black panel. The text and white outlines remain visible.
- The current saved-state record identifies the bottom candidate as Full-width with presets off. This value comes from the existing Designer readback, not the screenshot itself.

## Observed on the published page

- Chrome DevTools Responsive mode displayed Width 667. The published page loaded at the Webflow subdomain.
- It contains three stacked instances. All three were initially closed; I opened the bottom row. The visible bottom panel has the same Full-width arrangement and content as the saved Preview: four primary links, More, outlined VIEW RELEASE CTA, and social/contact links on the same rows.
- The bottom row's social/contact icon marks are very dark against the black panel, matching the Preview appearance. The menu trigger changes from MENU with a hamburger to MENU with a close mark when open.
- Accessibility readback exposed the bottom instance's navigation and all links. The row has no visible unique name, so its identity is matched by bottom position and content, not proved from the browser page alone. The identical rows above are part of the stacked test fixture and can affect what appears behind or below an open panel.
- Layout presets are not visible on the published page. Earlier records disagree about whether the published third instance had presets enabled or `data-presets=False`; publication timing versus the latest saved state is therefore unresolved. This visual comparison cannot establish that setting.

## Evidence limits

- Width was set and read as 667 CSS px in Chrome's responsive toolbar. Height was not independently read back, so this is a width-matched comparison only.
- Preview and published screenshots were compared visually in Chrome. No screenshot files were saved and no computed styles, Console, individual link destinations, short-height behavior or single-menu behavior were checked.
- No content was edited or saved, and nothing was published or shared during this comparison. Only the new published-page tab was closed.
