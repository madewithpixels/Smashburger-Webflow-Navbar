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

After the five-layout comparison, the trial instance was unlinked from the shared Library and its Embed loader was replaced with a temporary, commit-pinned 0.3.0-rc.1 candidate loader. The candidate CSS and JavaScript were subsequently confirmed in Chrome DevTools on the published page, with their exact pinned URLs and SRI values. The lower trial is the instance attached to the candidate runtime. On the published page at 375 × 667, its menu opened, closed on a second click and closed with Escape.

## 5 November continuation

In Webflow Preview with custom code enabled, the candidate rendered and the trial menu opened and closed. The Preview canvas was inspected at 1440, 1024 and 768 px; at 768 px the trial switched to its menu button and Escape closed it. At 1440 and 1024 px both rows remained expanded. The reference row remains expanded at 768 px while the candidate collapses, so those rows do not share the same collapse configuration and are not an exact breakpoint comparison.

Preview's DevTools console reports `CompilationError: Invalid source code` / `Uncaught (in promise) CompilationError: Invalid source code` from Webflow's `webflow.js:501`. The custom-code toggle was turned off and restored on; with it off, Preview returned to the Designer Canvas. With it on, compilation completed and the Preview rendered. This check does not identify which embed or script triggers the compiler error, nor prove that the candidate runtime itself is free of Preview-specific issues. No code was changed to suppress the error.

To isolate the error further, the candidate loader Embed was temporarily cleared and saved in the Designer draft, without publishing. The same compiler error remained. The exact commit-pinned loader was then restored and checked in Designer. The Home page's head and before-body custom-code fields are empty, as is the extra standalone Code Embed. Webflow's data tools do not list this disposable site; `get_site_freeform_code` and `get_site_scripts` both return “site not found” for its site ID. These results rule out the candidate loader as the error's sole source but do not identify the remaining source (which may be site-wide code or Webflow's Preview compilation path). The blank loader was never published.

At 768 px, the trial's root has `data-collapse="tablet"`; the reference root has no explicit `data-collapse`. This explains why the trial collapses while the reference remains expanded at that width. Treat that as a configuration difference, not a CSS regression.

A fresh attempt to interact with the published trial was stopped before a click could be sent: Chrome's browser-control request timed out. No page interaction or site change resulted from that attempt. The earlier recorded live checks remain the evidence for open/close behavior; this session did not repeat them.

**Confirmed:** candidate asset URLs/SRI and runtime instance on the published page; mobile open/second-click/Escape behavior; Preview rendering and trial-menu open/close at the observed widths; the 768 px collapse difference is due to configuration; the candidate loader alone does not cause the Preview compiler error. **Still open:** identify the remaining source of the Preview compiler error; compare authored style values across every property/state/layout; reduced motion; short-height scrolling; linked-instance and v0.2.6-upgrade behavior; rollback; Michael's visual review and acceptance. Do not describe R-269 as complete.

## Current test-page state

The test page has the sample/reference menu and one unlinked trial instance. The trial layout prop is `dropdown`; its temporary candidate loader is restored in the Designer and published to `https://disposable-sb-test-site.webflow.io/`. The isolation-only blank state was not published. No shared Library source, MWP site or Voice Focus site was changed.
