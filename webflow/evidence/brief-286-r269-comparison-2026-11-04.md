# Brief 286 — R-269 disposable-site comparison — 4 November 2026

## Result

The exact target, **Disposable SB test site** (`https://disposable-sb-test-site.design.webflow.com/`), was available in signed-in Chrome. Its dashboard Backups page was available at `https://webflow.com/dashboard/sites/disposable-sb-test-site/backups`. Webflow MCP still does not list this site, so the comparison used Designer, Preview and the published Webflow subdomain in Chrome.

The MWP Component Library's `SmashBurger CDN Unlink Trial` instance was installed beside the existing sample navigation. The published page therefore has two menus: the upper one is the sample/reference; the lower one is the trial instance. Only `disposable-sb-test-site.webflow.io` was selected for publishing; the custom domain remained disabled.

## Backups

- Before comparison: **boss · brief #286 · before**, shown in the dashboard list at 11:22 pm, 1 page / 74 styles / 145 elements. A duplicate with the same name is also listed. Boss recorded the confirmed dashboard backup.
- After comparison: **boss · brief #286 · after**, shown in the dashboard list at 11:40 pm, 1 page / 74 styles / 146 elements. Boss recorded the confirmed dashboard backup.
- Before candidate-loader change: **boss · brief #286 · before**, shown in the dashboard list at 11:46:22 pm, 1 page / 74 styles / 146 elements. Boss recorded the confirmed dashboard backup.
- After candidate-loader change: **boss · brief #286 · after**, shown in the dashboard list at 11:56:53 pm, 1 page / 101 styles / 224 elements. Boss recorded the confirmed dashboard backup.

## Checks completed

- In Designer at a 1531 px canvas, read the trial component's style values alongside the reference navigation; the sampled root, inner, trigger, panel, primary/secondary links matched. At desktop widths around 1440 and 1024, the trial remained expanded; at 768 and 393 px it collapsed and exposed its trigger.
- Preview at desktop and phone widths. At 393 × 844, opened each layout prop: dropdown, overlay, left, right and full-width. Each panel appeared in the expected mode and closed with Escape. With custom code disabled, the native fallback opened with Space.
- Published each of the five layout props to the Webflow subdomain and opened the lower trial menu at phone width. Accessibility state confirmed the menu opened and screenshots showed each panel. On the initial dropdown live check, Escape closed the panel and returned focus to its trigger.
- Restored the instance's layout prop to `dropdown`, published again, and reloaded the live page. The default dropdown opened successfully. The site is currently published with that setting.

## Limits and next checks

After the five-layout comparison, the trial instance was unlinked from the shared Library and its Embed loader was replaced with a temporary, commit-pinned 0.3.0-rc.1 candidate loader. The candidate menu opened on the published page after subdomain-only publishing. This does **not** confirm the candidate CSS/JavaScript actually loaded: the active Chrome connection did not expose page script/runtime inspection, and the browser blocked a `view-source:` navigation. Candidate behavior has not yet been retested in Preview. The Webflow MCP connection still cannot provide site snapshots or live computed-style exports.

Not checked: confirmation of candidate assets loading; candidate Preview behavior; authored colour/spacing changes property-by-property across each surface; open/closing/closed state styling for every mode; candidate live Escape, second-click and link close; reduced motion; short-height scrolling; linked-instance and v0.2.6-upgrade behavior; rollback. Michael's visual review and acceptance remain pending. Do not describe this as R-269 complete.

## Current test-page state

The test page has the sample/reference menu and one unlinked trial instance. The trial layout prop is `dropdown`; its temporary candidate loader is published to `https://disposable-sb-test-site.webflow.io/`. No shared Library source, MWP site or Voice Focus site was changed.
