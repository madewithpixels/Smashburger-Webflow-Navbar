# Replacing an existing Webflow Navbar with SmashBurger

**Version boundary — reviewed 16 October 2026:** The installation and adaptation steps below apply to the released **v0.2.6 legacy Library component**, not the unreleased class migration. Project-specific navigation content, destinations and visual design remain outside this guide.

| Contract | Applicable files and instructions |
| --- | --- |
| Released v0.2.6 | Legacy `mwp-css-nav` / `mwp-css-nav_*` classes; immutable top-level `dist/` and Webflow Embeds/loader. Use these together for an existing released Library copy. See [release and rollout verification](v0.2.6-release-verification.md). |
| Maintained, unreleased 0.3.0-rc.1 | `src/` and `candidate/` use `sb-nav` / `sb-nav-{role}`. They retain the `data-mwp-*` hooks, `--mwp-*` variables, APIs/events and legacy motion/variant values. Follow [the class map and compatibility record](canonical-rename-2026-10-15.md); do not globally replace `mwp-`. |
| Isolated Library candidates | Both sb-nav source editions are prepared with five variants. Their special aliases and exact-commit CDN verification pin are described in [the Library candidate record](library-sb-nav-candidates-2026-10-15.md). They have not been shared or verified as linked consumer updates. |

Do not mix released classes with candidate CSS or install the illustrative tag loader at `candidate/webflow/navbar-light-cdn-loader.html`: its proposed release URLs are not live. The separate commit-pinned Library loader is for authorised verification only. The class migration and the one-Base unlink trial are separate candidates; neither changes the v0.2.6 installation instructions.

For routine native content and accessibility edits, use the existing [safe-editing guide](smashburger-lite-safe-editing.md). It is a v0.2.6 reference draft for the future Lite clonable, which is not built or published; its one-Base instruction belongs to Lite, not the released five-variant Library component.

## Recommended workflow

1. Create a Webflow backup.
2. Keep the old Navbar temporarily as a visual and class reference, but do not leave two active navigation landmarks in the published page.
3. Insert the released `SmashBurger` or `SmashBurger CDN` from the shared Library. Confirm that the delivery Embed uses v0.2.6 and the native classes are the legacy family above; do not select a versioned sb-nav candidate.
4. Configure collapse, layout, motion and optional regions while the instance is still linked.
5. Verify the unstyled component in Preview: open, close, Escape, focus return and the required breakpoints.
6. Unlink the configured instance when the destination project needs structural or visual changes beyond the Library properties.
7. Confirm that the root retains `[data-mwp-navbar]` and the intended collapse value. For an always-collapsed local version, explicitly retain `data-collapse="always"`.
8. Keep the v0.2.6 self-contained enhancement or exact-version pinned CDN Embed. For self-hosting, use matching v0.2.6 CSS and JavaScript. Keep the matching integrity metadata for CDN delivery, and only one active delivery mode; see [switching delivery](../README.md#switching-delivery-without-rebuilding-the-navigation).
9. Transfer presentation classes to the existing native elements rather than replacing their semantics.
10. Add project-specific utility links as ordinary native Link Blocks.
11. Complete the CSS work and full behavior check before creating a destination-project component.
12. Remove the old reference Navbar before publishing.

## Show the unlinked panel for Canvas styling

After unlinking, the component's `Canvas: show open menu` property is no longer a reliable place to find the control. Use the native root element instead:

1. In the Navigator, select the outer `header.mwp-css-nav` with `data-mwp-navbar`. Do not select the `details` trigger or the `nav` panel.
2. Set the root's custom attribute **`data-collapse`** to the mode that was selected when you unlinked: `never`, `tablet`, `mobile-landscape`, `mobile-portrait` or `always`. A fresh Tablet unlink on 2026-10-08 removed the linked Webflow variant marker, so the Canvas helper could not infer its breakpoint until this static attribute was added. The runtime also reads this value. On a v0.2.6 unlink, changing this attribute alone does not replace the variant's Webflow layout classes; keep it aligned with the actual native layout.
3. Set **`data-canvas-open` to a static `true`** on the same root. A fresh Tablet unlink left this attribute as a legacy component-property binding that resolved to `null`. In the purple value dropdown, choose **Disconnect**, then enter `true` as the ordinary value; do not add a second attribute with the same name. The existing `SmashBurger Canvas helper` Embed then shows the collapsed panel on the Designer Canvas at the selected collapse breakpoint. Its links remain native, selectable elements for styling.
4. Set **`data-canvas-open` to `false`**, or remove the attribute, when finished. The collapsed Canvas view returns to Brand and trigger. Keep the helper Embed in the unlinked subtree.
5. On the backed-up destination, check Designer Preview at Desktop, Tablet and both Mobile breakpoints, including refresh behaviour. Never refresh the protected Navbar Light test page without explicit approval and a confirmed backup. The helper is scoped to `html.wf-design-mode`, so the custom attribute should not force a runtime-open menu. Open and close the actual menu in Preview to verify it.

This is a **Canvas styling view**, not the menu's interactive `open` state. Do not force `open` on the native `details`, change `aria-expanded` or set `data-state` to style the panel. Those are runtime/accessibility state. The root attribute is a local, editable control that remains available after Library properties disappear; the current release does not recreate it as a grouped local component property.

The [one-Base collapse/unlink trial](unlink-hardening-candidate.md) has historical fresh-unlink and isolated no-script evidence, described below. It has not replaced the released five-variant Library structure; do not treat its findings as a general unlink guarantee.

If you turn an unlinked copy into a **site-local component**, check inherited Library bindings before using it as a new source. In the `Unlink test` trial, a later unlink converted a legacy-bound MENU label and 14 runtime settings values into Webflow placeholder text. Disconnect or replace those bindings with the intended static text (or deliberate new local props), then unlink a fresh duplicate to verify every value. Also preserve the root's `data-backdrop="true"` and `data-presets="true"` defaults: a blank `data-backdrop` removed the dropdown backdrop in Preview until the local component definition was corrected. The [trial record](unlink-hardening-candidate.md) lists the verified values and checks. Do not remove the native settings subtree simply to hide it; the runtime reads those values.

## Structural contract: v0.2.6 and retained candidate hooks

Keep this canonical relationship for native no-script fallback in both versions:

```text
Navbar root
└─ Navbar inner
   ├─ Menu details
   │  └─ Menu trigger
   └─ Navigation panel
```

**Already released in v0.2.6:** enhanced open-state CSS responds to the panel's own runtime `data-state`, and the script finds the menu, trigger and panel within the root. An ordinary wrapper around `Menu details` can therefore work after enhancement. This is not a future fix. The released [CSS](../dist/navbar-light.css) contains both the panel-state rule and `[data-mwp-menu][open] + [data-mwp-panel]`; the released [script](../dist/navbar-light.js) sets panel state. Maintained [CSS](../src/navbar-light.css) and [script](../src/navbar-light.js) retain these hooks.

**Still required without JavaScript:** keep `Menu details` and `Navigation panel` adjacent direct children of `Navbar inner`. The native open-state selector uses `+`; wrapping the menu separately breaks that relationship even if enhanced opening succeeds. Use Flex or Grid order, margins, gaps, alignment and positioning while keeping those functional siblings intact.

The [2 October enhanced-layout fixture](enhanced-layout-regression.md) supplies historical published wrapped-trigger evidence at 1280px and 600px. It tested then-candidate source, not the later v0.2.6 release bytes or the current sb-nav Library candidates. The released-file readback above establishes that v0.2.6 includes the feature; it is not a fresh browser check.

## Webflow-native restrictions

Webflow's native Menu Button belongs to its native Navbar and cannot be pasted freely into unrelated structure. SmashBurger does not need it: its trigger is a native `<summary>` with `[data-mwp-trigger]`.

To reuse an existing visual treatment:

- Apply ordinary project classes to the SmashBurger `Menu trigger`.
- Keep the `<summary>` element and its data hook.
- Recreate layout wrappers as ordinary Div Blocks.
- Copy ordinary Link Blocks and icon assets separately.
- Do not add Webflow's `w-nav-button` class or replace the trigger with a native Navbar Menu Button.

## Historical Library trials and styling findings

The following records describe the legacy classes, sites and versions observed at the time. They are not current sb-nav rollout checks or permission to repeat Webflow changes.

Unlinking a configured Library instance can create a long sequence of variant-derived combo classes such as `.always`, `.always-1`, `.always-2` and later numbered names. These are generated by Webflow from the selected component variant, not required naming conventions from the SmashBurger runtime. Some can still carry important authoring layout, breakpoint or component-property visibility rules. Treat them as static output from the chosen configuration and verify each contribution before renaming or removing it; do not bulk-delete the sequence during the initial restyle.

The first real-site audit found 35 materialized `Always` selectors across 102 individual element attachments. Thirty selectors and 97 attachments were declaration-free; five carried rules for the root, inner, menu, trigger or panel. On that instance, all 97 empty attachments were removed and the five functional declarations were transferred to the corresponding local base selectors, leaving no `Always` classes in the navigation subtree. Desktop and 393px Preview checks then passed pointer and keyboard activation, Escape focus return, ARIA/inert and backdrop state, panel containment and zero horizontal overflow. Those figures remain a useful fixture, not yet a guarantee for every configuration or Webflow release. The component-hardening roadmap includes repeating the audit on a fresh instance and fixing the source variants so future users do not need to repeat the cleanup. The planned clonable will start from a deliberately named local component rather than exposing this unlink-generated class trail to new users.

A 2026-10-08 read of both source components found real variant declarations on the inner, native menu and panel at collapse breakpoints, while the sampled `.mwp-css-nav_links` variant styles had no declarations. This confirms that a blanket variant-style removal would discard authoring layout. It does **not** establish that removing empty overrides, or replacing variants with a collapse property, prevents Webflow from generating numbered combo classes. See [the reversible candidate and fresh-unlink checklist](unlink-hardening-candidate.md).

The one-Base-variant candidate produced zero numbered selectors on five fresh source-site unlinks, one selected to each collapse choice. It was then shared as a single unreleased Library candidate and freshly unlinked in the clean `SB Unlink Clean Trial` destination: the resulting 79-node native subtree retained both Embeds and had no numbered `Tablet N` classes. A Data MCP audit matched all 66 unlinked setting values to the linked instance, including eight remapped icon assets, with zero mismatches. Clean-destination Desktop rendered expanded direct links; Tablet and both mobile Preview open/Escape checks passed, and the temporary Canvas-open value was restored. The Preview reload once reported `CompilationError: Invalid source code`; leaving and re-entering recovered a Desktop render, so Preview refresh parity remains inconclusive.

The isolated, published `/unlink-fallback-isolation` route subsequently supplied direct DOM and keyboard evidence at Desktop, Tablet and both mobile widths: one navigation root, zero overflow, the expected closed/open ARIA and inert state, Escape focus return at each collapsed width, and closed-state reset after a breakpoint change and refresh. With only the pinned v0.2.6 JavaScript request blocked and CSS retained, native `<details>` opened and closed at Tablet and both mobile widths with zero overflow. That fallback has native disclosure semantics but no script-managed ARIA/inert state; Escape closing without JavaScript was not established. The script-block rule was disabled and runtime initialization returned. The Library's `All Links` and `Body (All Pages)` styles were preserved. This evidence applies to that one-Base unlink candidate and Webflow session using pinned v0.2.6 runtime assets. It does not establish a released collapse-mechanism change or a guarantee for every future Webflow unlink.

There is also a tooling trap after unlinking: the imported namespaced Library selector and its new local counterpart can retain the same display name. Style-record deletion or name-only assignment is unsafe when identities collide. On the 2026-10-13 recovery duplicate, an exact element-ID `set_style` operation preserved the local base class and removed the selected numbered token; Data MCP readback confirmed the backup changed and the original page did not. This proves that scoped assignment on this fixture, not global style-record deletion, can be used after a full-tree preflight. Keep a recovery copy, preserve every ordinary base/project class, and read back the complete class lists and computed layout after each batch.

A read-only style inventory of `SB Unlink Clean Trial` on 2026-10-13 returned 193 style records, including 117 `mwp-css-nav*` records. Thirty-six navbar display names each resolved to two distinct records: one imported Library style (`isFromLibrary=true`, namespaced selector such as `.mwp-component-library--mwp-css-nav_links`) and one local style (`isFromLibrary=false`, selector such as `.mwp-css-nav_links`), each with a different style ID. This confirms that display name alone does not identify the selector in this destination. No name-targeted style write was attempted; the exact mis-targeting behavior still needs a Designer-safe or otherwise non-destructive proof before considering the hazard test complete.

The Library currently shares `All Links` and `Body (All Pages)` tag styles alongside the component. The native Brand and navigation classes intentionally inherit typography and link presentation, so those tags can affect the appearance of a new destination site. Active consumers reported no visual regression at v0.2.6; preserve the tag styles during this hardening work and compare their cascade in any new clean-install fixture. Webflow's Asset settings only manages asset folders and cannot exclude tag styles.

When a functional combo must be consolidated locally, remove that combo from the element before editing the base selector. Webflow's Style panel continues writing to the final combo while it remains attached even if the base token appears active. Temporarily remove later semantic project classes where necessary, edit and verify the unambiguous base, then restore only deliberately named classes such as the destination project's trigger or authoring helper class.

The legacy MWP Component Library source components (CDN and self-contained) were verified with a default-on `Content / Show brand` Switch bound to the native Brand link's visibility. Designer readback in each edition showed `display: none` and a zero-size box when hidden, then restored the visible default. The two-component Library update was shared and accepted on SB Test Four: the linked self-contained instance exposed the new control and hid the Brand link from the Canvas accessibility tree when disabled. On a temporary published hidden-state test, Brand was absent from the DOM and the first Tab focused Facebook. The default was restored and republished; Brand returned as the first anchor and first Tab stop. The visible-default instance also passed a published mobile menu check at 600px with zero horizontal overflow. After unlinking, the Brand can still be deleted or hidden with ordinary Webflow controls without affecting the enhancement.

Older Library copies used `background-color: inherit` on the navigation panel and submenu list. The legacy source Library readback recorded in that audit gives the expanded panel an explicit transparent background and the submenu a white surface with dark ink; see [the background audit](background-audit.md). Both are ordinary Webflow class values for a destination to override. On a dark destination wrapper, choose a light main-navigation ink as part of the site's styling; the submenu retains its own contrast.

Older Library copies carry a component-level `max-width: 80rem` on the navigation inner. That presentation choice can obstruct an existing project's container system. On 2026-10-01 the base `mwp-css-nav_inner` class in MWP Component Library was cleared; Designer readback shows `Max W: None` in both delivery editions. The CDN edition passed 1920px and Tablet Preview checks, and both editions passed wide and Tablet checks on the published Library staging site. The revised Library was shared and accepted on SB Test Four; its fresh linked self-contained instance filled a 1734px Preview canvas and worked at 600px in Preview and published staging. A second check wrapped that linked instance in a destination-owned 70rem container, then passed wide, Tablet and mobile Preview and published staging checks. See [the repeatable width fixture](width-regression-fixture.md) for measurements. For an older unlinked integration, remove or override the maximum on the local inner and apply any width constraint through a destination-project container class.

To constrain a destination header, give its own wrapper a project class such as `site-header_container`. Set that class to the project's chosen `max-width` and horizontal `margin: auto`; add the desired inline padding there. Keep `mwp-css-nav_inner` unrestricted. This preserves the full-width default for a fresh install while letting each site choose its own content width. Verify the resulting header at the widest project breakpoint and at Tablet, then open the menu to check that its panel placement still follows the selected layout.

## Panel placement and CSS priority

The legacy `v0.2.0` functional stylesheet supplies a right-aligned dropdown fallback with `position: absolute`, `right: 0`, `top: 100%`, `transform-origin: top right` and `width: var(--mwp-nav-panel-width)`. Its selector has the same specificity as one ordinary Webflow class, then wins because the CDN stylesheet loads later. These defaults are useful for an untouched component but should not dictate the geometry of a locally styled panel.

For a `v0.2.0` integration, add one deliberately named combo class to `mwp-css-nav_panel` and set the intended geometry there. For example, a full-width panel can set `left: 0`, `right: auto` and `width: 100%`. The two-class Webflow selector outranks the released fallback without custom code or `!important`.

`v0.2.1` introduced the separation of state from presentation, retained in released v0.2.6. Closed/open opacity, visibility, pointer handling and transitions remain functional rules, while panel display, positioning, insets, alignment, width and transform-origin are zero-specificity fallbacks. A normal Webflow panel class can therefore replace the default geometry even though the delivery stylesheet loads later. See [released v0.2.6 CSS](../dist/navbar-light.css). Immutable `v0.2.0` remains available for historical rollback; when adapting a legacy integration to the current released baseline, deliberately select matching v0.2.6 files and integrity metadata rather than changing only the CSS URL.

## Stacking before clipping

An open navigation panel can appear clipped when sticky or positioned page content is actually painting above it. Inspect stacking before changing overflow, masks or containment.

Released v0.2.6 positions the root and uses `z-index: var(--mwp-nav-z-index, 100)`. Set `--mwp-nav-z-index` on the root or inherit it from a project wrapper; wrapper inheritance is already released, not a future feature. Both the [released CSS](../dist/navbar-light.css) and [maintained candidate CSS](../src/navbar-light.css) use this rule. The [historical enhanced fixture](enhanced-layout-regression.md) recorded an inherited value of `240`. Check the actual stacking context in Preview before raising the value: a positioned ancestor can still keep the whole navigation below other page content.

## Backdrop behavior

**Released v0.2.6:** Left drawer, Right drawer and Overlay activate the retained native backdrop when the collapsed enhanced menu opens. Dropdown and Full-width also support an opt-in backdrop through root `data-backdrop="true"` or `"True"`; the selector is case-insensitive. Keep `Show backdrop` enabled on a linked legacy Library instance so its visibility binding leaves the native element present. After unlinking, retain the element and set the static root attribute if either of those layouts needs it.

The backdrop dims the page, sits behind the panel and closes the enhanced menu when selected. Enabling a Dropdown or Full-width backdrop does not itself lock scrolling. `data-scroll-lock` controls that independently; `auto` locks Left, Right and Overlay only. Evidence: the [released CSS backdrop rules](../dist/navbar-light.css), released script's `usesScrollLock()` and backdrop click handler in [dist/navbar-light.js](../dist/navbar-light.js), and the retained rules in [maintained CSS](../src/navbar-light.css) and [script](../src/navbar-light.js). The [v0.2.4 release record](v0.2.4-release-verification.md) and [v0.2.6 rollout](v0.2.6-release-verification.md) replace the old v0.2.3 installation boundary. The [2 October fixture](enhanced-layout-regression.md) is historical enhanced-layout and binding evidence, not a fresh test of the released or sb-nav deliveries.

The Backdrop should remain a sibling within the SmashBurger root and retain `[data-mwp-backdrop]` plus `aria-hidden="true"`. Keep it non-blocking while closed. After unlinking, it can be removed when the destination project will never use it.

## Designer, Preview and delivery

Fresh clean-destination legacy Always unlink selector identities and declarations are recorded in the [2026-10-13 class audit](always-unlink-class-audit-2026-10-13.md). Its recovery duplicate now has all 100 declaration-free attachments removed (99 numbered plus the unnumbered root token); the three functional numbered tokens remain. The original page and all style records remain untouched. Four Canvas breakpoints have zero overflow, and Mobile portrait Preview open/Escape, ARIA/inert, and trigger-focus behavior passed after final cleanup. The Designer Preview iframe intercepted the backdrop pointer check, and a fresh no-JavaScript fallback was not repeated; see the audit for those limits.

In released v0.2.6, the Canvas helper hides the redundant settings inspector and script Embed placeholder bar while keeping the native infrastructure selectable through the Navigator. The runtime also hides settings after initialisation in Preview/published output. Retain the settings subtree and both runtime/Canvas Embeds after unlinking. See [the release record](v0.2.6-release-verification.md) and [Canvas authoring history](canvas-authoring-fixture.md). The later manual settings snapshot remains a prototype, not a released replacement.

Use class-based Navigator labels for structural elements so authors can see the styling selectors. The accepted `sb-nav` class mapping is implemented in unreleased source and isolated Library candidates; it has not replaced released legacy classes. See [the namespace audit](class-namespace-migration-audit.md) and [saved Library candidate readbacks](library-sb-nav-candidates-2026-10-15.md).

Use exactly one delivery mode:

- Self-contained Embed.
- Exact-version pinned CDN loader with matching integrity metadata.
- Self-hosted files generated from the same release.

For the released Library, select the top-level v0.2.6 files linked in [README delivery instructions](../README.md#switching-delivery-without-rebuilding-the-navigation). Do not use a floating CDN tag or replace only one of the matching CSS/JavaScript files.

## Candidate rollout gates: not installation instructions

The [15 October native sb-nav staging fixture](new-smashburger-test-2026-10-15.md) passed layout/motion, collapse/width, keyboard and no-JavaScript checks. It was a fresh native fixture, not a Library install or linked upgrade; its Preview stalled. Separately, [both real Library candidates](library-sb-nav-candidates-2026-10-15.md) have saved source readbacks and self-contained Canvas/Preview evidence. Their CDN browser reconstruction and script-omission checks are local evidence, not actual Webflow CDN Preview or linked-consumer fallback proof.

The existing gates remain: Michael's approval of the exact five-resource Library share; installation/update only in the backed-up authorised test destination; linked properties, assets, variants and overrides; fresh unlink, upgrade/rollback and actual staging fallback; human/device accessibility and physical-display icon checks; final release promotion, tag and matching integrity URLs. Lite additionally needs a verified released runtime and clone/install checks before publication. Follow the [Library sharing record](library-sb-nav-candidates-2026-10-15.md#sharing-gate-and-next-action) and [Lite scope](smashburger-lite-clonable-scope.md). These records do not authorise other sites, a release or retirement of v0.2.6 pins.

## Accessibility checks after adaptation

- The menu trigger retains an accessible name.
- `aria-expanded` changes when the menu opens and closes.
- The closed panel is `aria-hidden` and inert after enhancement.
- Escape closes the menu and returns focus to the trigger.
- Icon-only links have specific `aria-label` values.
- Decorative icons are hidden from assistive technology where appropriate.
- Every Link Block has a valid destination and keyboard-visible focus state.
- Only one navigation/header landmark remains in the published page.
- Desktop, Tablet, Mobile landscape and Mobile portrait are checked independently.

## Before creating the local component

Finish functional structure, CSS, destinations, accessible names and breakpoint testing first. Then create the destination-project component and roll it out to additional pages. Library updates do not automatically update an unlinked or newly local component, so future SmashBurger releases must be reviewed and deliberately backported where relevant.

## Planned public clonable

A free Webflow clonable, provisionally named `SmashBurger Lite`, is on the roadmap as an early public introduction to SmashBurger. It will avoid making new users repeat the Library-to-unlinked migration and will include a preconfigured editable local component, a plain baseline, a styled example, the pinned delivery Embed, a short safe-editing guide and a clone/install verification pass. Its structural `sb-nav` / `sb-nav-{role}` classes will remain visible directly in the Navigator rather than being masked by custom display names. A dedicated workbench will keep prepared closed/open examples and a backdrop reference away from real page layouts, allowing shared Webflow classes to be styled without leaving production instances obstructing the Canvas. The bounded first-release scope and gates are recorded in [SmashBurger Lite clonable scope](smashburger-lite-clonable-scope.md).

The unreleased versioned class migration has a separate [namespace audit](class-namespace-migration-audit.md) that distinguishes structural class names from runtime hooks and release compatibility strings. Do not apply a global `mwp-` replacement.
