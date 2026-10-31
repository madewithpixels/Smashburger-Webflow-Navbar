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

Older installations may rely on the runtime forcing overlay panels to Grid or on high-specificity defaults replacing a Webflow class. Those installations can change layout when they adopt this candidate. Before upgrade, inspect the panel, links, contact area, trigger and close control at each collapse breakpoint. Set the intended `display`, grid tracks or flex direction, alignment, dimensions and appearance explicitly in the component's Webflow classes/variants. For overlay, choose Grid or Flex deliberately; the runtime no longer changes Flex into Grid. If the preset look is desired, leave presets enabled; if the Webflow class owns the full look, set presets off and author the visual properties.

No installation or upgrade was performed. Test the exact candidate against a backed-up disposable site before considering rollout. If the comparison fails, restore the prior pinned runtime/candidate and its matching component state. v0.2.6 remains immutable and is the known older fallback, but it restores the forced overlay behavior and may not include later fixes; rollback is a recovery option, not proof of parity. Do not update consumers or publish from this local brief.

## Bounded follow-up: Designer, Preview and published comparison

Use a separate authorised brief against a backed-up disposable Webflow test site. Do not include R-268's duplicate-class investigation in this check.

1. Record the exact local candidate version and CSS/JavaScript hashes, and make the required before backup before any Webflow tool or mutation.
2. In Designer, inspect the existing `sb-nav-panel` Style panel and every collapse/layout variant. Where the intended value currently exists only because the runtime supplied it, save it as an authored style: choose Flex or Grid for display; set Grid tracks or Flex direction/alignment; set dimensions, positioning and overflow; then author primary, contact/CTA, trigger and close-control styles on their own classes. Set full-width mobile tracks to one column. Do not add an overlay Grid default: explicitly choose the desired Flex or Grid style in the Designer. Add one Flex panel with deliberately stale Grid columns and one intentionally authored Grid panel, plus opinionated host styles. Exercise dropdown, overlay, left, right and full-width, with presets on and off, at desktop and mobile breakpoints.
3. Check Canvas closed and Canvas-open states. Record computed styles and screenshots for panel, primary links, contact/CTA, trigger and close control. Confirm a class on each element controls its layout and appearance.
4. Preview the same cases, including a short viewport, opening/closing motion, keyboard, focus return, Escape, reduced motion and scroll containment.
5. Publish only to the authorised disposable site's Webflow subdomain and repeat the comparisons. Record any differences from Designer and Preview.
6. Test upgrade from the specified prior runtime and rollback on that disposable site. Keep the consumer unchanged and leave Acceptance to Michael.

**Exit evidence:** exact candidate identity, named site/page, both backup records, screenshots and computed-style values for each surface and layout, results for behavior and upgrade/rollback, plus a plain list of any follow-up component/variant changes. A source or JSDOM pass alone cannot satisfy this evidence.

## Local evidence

- Runtime source audit: `src/navbar-light.css`; Canvas-helper audit: `src/navbar-light-canvas.css`.
- Regression fixtures: `tests/runtime-styling-contract.test.js` (Flex with stale Grid columns and authored Grid across all five layouts; opinionated host styles; presets off; Canvas helper and guard checks).
- Build guard: `scripts/check-runtime-style-specificity.mjs`, called by `npm run build`; checks source and readable/minified candidate CSS plus the CSS carried in generated Webflow Embed outputs.
- Candidate Embed JavaScript is minified by the existing pinned esbuild tool to retain room under the Webflow Embed character limit. The authored source and standalone browser demo remain readable.
- Protected v0.2.6 output must remain byte-identical under the existing distribution check.
