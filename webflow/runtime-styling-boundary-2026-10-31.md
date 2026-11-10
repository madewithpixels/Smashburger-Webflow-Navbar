# Runtime styling boundary — R-269

**Status:** Local candidate built; Designer, Preview and published comparison not checked. Michael's Acceptance remains pending.

## What owns which properties

The runtime supplies zero-specificity CSS defaults for layout and appearance. A single Webflow class on the relevant element can override those defaults. State selectors still control whether an enhanced menu is visible and interactive, and how the default motion runs. These are source and JSDOM checks; they do not show Webflow's rendered Canvas, Preview or published result.

| Area | Runtime defaults | Behaviour retained |
| --- | --- | --- |
| Dropdown | Grid display; absolute placement below the header; default panel width, alignment and scroll bounds. Neutral panel, link and contact appearance is behind the preset gate. | Closed/open opacity, pointer handling, transform, transition and visibility follow menu state. |
| Full-width | Full-width placement and default column tracks; contact column treatment and panel decoration are gated presets. | State visibility and configured motion remain active. |
| Left and right | Fixed drawer placement, side, default dimensions and scroll bounds. | Side motion and open/close state remain active. |
| Overlay | Fixed viewport placement and full-size defaults; no forced Grid display or grid tracks. Surface, border, colour, spacing and centered typography are gated presets. | Overlay entrance/exit and state visibility remain active. |
| Primary, links, secondary/contact | Grid and order defaults, sizing and wrapping defaults; link and section decoration is gated. All are zero-specificity defaults. | Native details state controls submenu visibility; it remains a browser fallback. |
| Trigger and close control | Neutral size, alignment and appearance defaults are zero-specificity; visual presets are gated. | Trigger visibility follows collapsed/expanded state; icon and close behavior remain state-driven. |
| Backdrop | Fixed positioning is structural. Its dark surface is now gated by the visual preset switch. | Visibility, pointer blocking and fade remain state-driven. |

The runtime intentionally retains state rules for `opacity`, `visibility`, `pointer-events`, `transition`, and motion transforms. Transform is also used to animate a panel entering and leaving. An author who sets a competing transform can change that motion; verify authored motion on the later Designer/Preview check. The native `<details>` submenu closed rule and hiding the collapsed trigger in expanded mode are functional exceptions. Reduced-motion, stagger, focus return, Escape, ARIA/inert synchronization and scroll containment remain JavaScript behavior, not layout defaults.

No-script CSS uses `data-collapse` or the supported Webflow variant marker at the existing breakpoints; the native trigger/details markup remains available without the script. The separate Canvas helper only hides a closed collapsed panel, the configuration inspector, script placeholder bars and backdrop in Designer mode. `data-canvas-open="true"` opts the panel out of the hide rule. The helper does not assign panel layout or appearance. Canvas rendering itself was not checked.

## Upgrade and rollback guidance

### Before upgrading an installation that relies on v0.2.6 styling

The source shows a real ownership change, but it does not say which Webflow values a particular installation has saved. v0.2.6's released stylesheet forces Grid in its overlay layout and supplies visual defaults; see the [immutable v0.2.6 stylesheet](../dist/navbar-light.css) and its [release verification record](v0.2.6-release-verification.md). The candidate keeps some low-specificity structural defaults, but gates much of its appearance behind `data-presets`; its overlay no longer forces Grid. The [current source map](r269-runtime-style-ownership-2026-11-10.md) identifies the declarations and explicitly limits them to source evidence. The [candidate CSS](../candidate/dist/navbar-light.css) and [main candidate Embed](../candidate/webflow/navbar-light-embed.html) are the relevant candidate deliveries. The older top-level v0.2.9 files are not candidate evidence.

Before changing a real installation, inspect its saved Webflow classes and variants at every collapse/layout breakpoint. If the intended result currently comes only from v0.2.6, author and save the required values on the matching Webflow elements before switching runtimes:

- **Panel layout:** choose Grid or Flex deliberately, including grid tracks or flex direction, alignment, gaps, and responsive column changes. This is especially important for Overlay: the candidate will no longer turn an authored Flex panel into Grid. Candidate Full-width still has structural grid tracks, including a one-column mobile rule; decide whether those defaults are the intended layout or author the required tracks in Webflow.
- **Panel and content geometry:** check width, height, positioning, inset, overflow/scrolling, and alignment for the chosen layout. The candidate retains structural geometry for Dropdown, drawers and Overlay, so only author values that the existing installation depends on or needs to override; do not assume every layout property must be recreated.
- **Visual appearance:** check panel surface, borders, radius, shadow, text colour, link spacing and padding, contact/secondary separators, overlay typography, backdrop surface, trigger and close-control appearance. These candidate visual presets can be disabled by `data-presets="false"`; when presets are off, save the desired look in Webflow styles. With presets on, do not infer from source alone which saved class or runtime declaration will win in Designer or the browser.
- **Authored motion:** check any Webflow transform or transition on the panel. Candidate state rules still use transforms and transitions for opening and closing; an authored transform can alter that motion. Preserve and compare the intended motion rather than treating it as visual decoration.

Use a named, backed-up disposable site first. Record the exact candidate version and delivery, then compare saved Designer values and rendered Canvas, Preview and published results at the same layouts and widths. Check open and closed states, keyboard/focus behavior and a short viewport as well as appearance. If any required authored value is missing or the result differs, stop rollout and restore the matching pre-upgrade component and runtime set. This brief changes documentation only; it did not install or upgrade a site.

### What rollback must check

Rollback means restoring a compatible set, not swapping one CSS or script URL. On the disposable site, restore the matching saved component/Embed and delivery mode, the prior pinned CSS and JavaScript (or the exact self-contained Embed), URLs and integrity metadata, class names, variant/property bindings, assets, `data-presets` value and saved Webflow styles/overrides. The [local upgrade/rollback preflight](release-preflight-followup-2026-10-16.md#upgrade-and-rollback-checklist) records this whole-set requirement; the [offline rehearsal](offline-migration-rollback-2026-10-16.md) is local evidence only.

After restoring, read back the saved component and styles and compare them with the before backup. In Designer, confirm the expected classes, variants, bindings, assets and authored values. In Preview and then the published test page, check each used layout at matching widths, visual styling, menu opening/closing, keyboard/focus behavior, and that only the intended old runtime/assets load. Verify the restored page against the before state before calling recovery complete. A successful offline rehearsal does not prove a Webflow rollback worked.

No installation, upgrade or rollback was performed for this note. v0.2.6 remains immutable and is a possible recovery version, not proof of visual or behavioral parity with the candidate. No consumer update or publication is authorised by this documentation brief.

## Bounded follow-up: Designer, Preview and published comparison

Use a separate authorised brief against a backed-up disposable Webflow test site. Do not include R-268's duplicate-class investigation in this check.

1. Record the exact local candidate version and CSS/JavaScript hashes, and make the required before backup before any Webflow tool or mutation.
2. In Designer, inspect the existing `sb-nav-panel` Style panel and every collapse/layout variant. Where the intended value currently exists only because the runtime supplied it, save it as an authored style: choose Flex or Grid for display; set Grid tracks or Flex direction/alignment; set dimensions, positioning and overflow; then author primary, contact/CTA, trigger and close-control styles on their own classes. Set full-width mobile tracks to one column. Do not add an overlay Grid default: explicitly choose the desired Flex or Grid style in the Designer. Add one Flex panel with deliberately stale Grid columns and one intentionally authored Grid panel, plus opinionated host styles. Exercise dropdown, overlay, left, right and full-width, with presets on and off, at desktop and mobile breakpoints.
3. Check Canvas closed and Canvas-open states. Record computed styles and screenshots for panel, primary links, contact/CTA, trigger and close control. Confirm a class on each element controls its layout and appearance.
4. Preview the same cases, including a short viewport, opening/closing motion, keyboard, focus return, Escape, reduced motion and scroll containment.
5. Publish only to the authorised disposable site's Webflow subdomain and repeat the comparisons. Record any differences from Designer and Preview.
6. Test upgrade from the specified prior runtime and rollback on that disposable site. For rollback, verify the complete matching set and compare saved readback, Designer, Preview and published results with the before backup. Keep the consumer unchanged and leave Acceptance to Michael.

**Exit evidence:** exact candidate identity, named site/page, both backup records, screenshots and computed-style values for each surface and layout, results for behavior and upgrade/rollback, plus a plain list of any follow-up component/variant changes. A source or JSDOM pass alone cannot satisfy this evidence.

## Local evidence

- Runtime source audit: `src/navbar-light.css`; Canvas-helper audit: `src/navbar-light-canvas.css`; [dated ownership comparison](r269-runtime-style-ownership-2026-11-10.md).
- Regression fixtures: `tests/runtime-styling-contract.test.js` (Flex with stale Grid columns and authored Grid across all five layouts; opinionated host styles; presets off; Canvas helper and guard checks).
- Build guard: `scripts/check-runtime-style-specificity.mjs`, called by `npm run build`; checks source and readable/minified candidate CSS plus the CSS carried in generated Webflow Embed outputs.
- Candidate Embed JavaScript is minified by the existing pinned esbuild tool to retain room under the Webflow Embed character limit. The authored source and standalone browser demo remain readable.
- Protected v0.2.6 output must remain byte-identical under the existing distribution check; its forced and visual rules are documented in the [released stylesheet](../dist/navbar-light.css) and [release record](v0.2.6-release-verification.md).
- Evidence limit: these source and local records do not establish the saved Designer values, Canvas rendering, Preview behavior or published behavior for each installation. The current comparison records only bounded, site-specific observations; see the [published-page checklist](r269-published-page-checklist-2026-11-10.md). Do not generalise those observations to all menus or widths.
