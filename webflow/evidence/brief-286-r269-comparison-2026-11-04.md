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

The Webflow workspace/data connection recovered. The correct connector now reads **Disposable SB test site** (site `6aeb2f272edef7503d4839ad`) and its Home page (`6aeb2f292edef7503d483a01`). The prior statement that Webflow MCP could not see this site is superseded. Site and page freeform custom-code fields are empty, and a search found no site-specific agent instructions. The page contains five HtmlEmbed elements: the reference runtime (44,492 characters), reference Canvas helper (4,182), candidate loader (1,373), candidate Canvas/property helper (6,971) and one empty embed. Reading these settings made the previously inaccessible page code inspectable without changing it.

The Webflow style-data read returned 101 style records. The reference has 36 class names and the unlinked trial 27; all 27 trial classes map to a same-named reference class with a Webflow duplicate suffix removed, and their saved base and medium/small/tiny breakpoint property records match exactly. The read requested hover, active, focus and focus-visible styles; it returned no separate pseudo-state overrides for these classes. The nine additional reference classes belong to its settings/configuration inspector; this is not a claim that all runtime states or layouts have matching rendered styling.

On the published page, the candidate was checked at 991 px. It opened with `aria-expanded=true` and a visible panel; Escape closed it; opening and clicking the trigger again also closed it. While open, crossing to 1024 px changed the navbar to its normal expanded desktop state. Crossing back to 991 px returned it to `data-state="closed"`, with the panel hidden and `aria-expanded=false`. This confirms responsive state handling at that boundary; a synthetic resize event was not dispatched in the live page. The earlier 390 × 500 short-height scroll-containment check remains valid. Chrome's viewport override was reset after the check.

No Webflow edits or publications occurred during this continuation. The site-level custom-code fields are empty, which narrows the generic Preview compiler error to the page Embeds or Webflow's Preview compilation path. The earlier test showed that blanking the candidate loader alone does not remove the error; the source is still unknown. All 27 class-record matches do not replace the remaining state/layout, reduced-motion, visual and human checks. A genuine linked upgrade/rollback comparison is owner-gated: the candidate is unreleased and unlinked, and testing a linked update would require sharing it through the shared Library. Do not share it without Michael's approval.

In Webflow Preview with custom code enabled, the candidate rendered and the trial menu opened and closed. The Preview canvas was inspected at 1440, 1024 and 768 px; at 768 px the trial switched to its menu button and Escape closed it. At 1440 and 1024 px both rows remained expanded. The reference row remains expanded at 768 px while the candidate collapses, so those rows do not share the same collapse configuration and are not an exact breakpoint comparison.

Preview's DevTools console reports `CompilationError: Invalid source code` / `Uncaught (in promise) CompilationError: Invalid source code` from Webflow's `webflow.js:501`. The custom-code toggle was turned off and restored on; with it off, Preview returned to the Designer Canvas. With it on, compilation completed and the Preview rendered. This check does not identify which embed or script triggers the compiler error, nor prove that the candidate runtime itself is free of Preview-specific issues. No code was changed to suppress the error.

To isolate the error further, the candidate loader Embed was temporarily cleared and saved in the Designer draft, without publishing. The same compiler error remained. The exact commit-pinned loader was then restored and checked in Designer. The Home page's head and before-body custom-code fields are empty, as is the extra standalone Code Embed. Webflow's data tools do not list this disposable site; `get_site_freeform_code` and `get_site_scripts` both return “site not found” for its site ID. These results rule out the candidate loader as the error's sole source but do not identify the remaining source (which may be site-wide code or Webflow's Preview compilation path). The blank loader was never published.

At 768 px, the trial's root has `data-collapse="tablet"`; the reference root has no explicit `data-collapse`. This explains why the trial collapses while the reference remains expanded at that width. Treat that as a configuration difference, not a CSS regression.

A fresh attempt to interact with the published trial was stopped before a click could be sent: Chrome's browser-control request timed out. No page interaction or site change resulted from that attempt. The earlier recorded live checks remain the evidence for open/close behavior; this session did not repeat them.

During the resumed 5 November check, Preview loaded after all four non-empty page Embeds were temporarily cleared. It also loaded with both runtime Embeds present and both helper Embeds cleared. It loaded with either helper cleared individually, and loaded again with all original Embeds restored. All five Embed `code` settings were read back and matched the exact saved values (44,492; 4,182; 1,373; 6,971; and 0 characters). This isolation did not reproduce or identify the earlier generic Preview compilation error; the helpers are not confirmed as its source. The temporary draft changes were fully restored and never published. The Designer was returned to Canvas.

At the published page's 2044 × 1076 viewport, a live DOM read compared computed values for the reference and candidate rows at the root, inner area, trigger, panel, primary group, links, secondary group and first item. The sampled values matched (including display, dimensions, colour, border, spacing, opacity, transform, typography, transition and overflow). This is a desktop-width computed-style check only. The browser-control surface did not provide viewport resizing for the live tab, so it does not extend the existing tablet interaction evidence to computed styles at 991 px.

**Confirmed:** candidate asset URLs/SRI and runtime instance on the published page; mobile open/second-click/Escape behavior; Preview rendering and trial-menu open/close at the observed widths; the 768 px collapse difference is due to configuration; the candidate loader alone does not cause the Preview compiler error. **Still open:** identify the remaining source of the Preview compiler error; compare authored style values across every property/state/layout; reduced motion; short-height scrolling; linked-instance and v0.2.6-upgrade behavior; rollback; Michael's visual review and acceptance. Do not describe R-269 as complete.

## Current test-page state

The test page has the sample/reference menu and one unlinked trial instance. The trial layout prop is `dropdown`; its temporary candidate loader is restored in the Designer and published to `https://disposable-sb-test-site.webflow.io/`. The isolation-only blank state was not published. No shared Library source, MWP site or Voice Focus site was changed.
