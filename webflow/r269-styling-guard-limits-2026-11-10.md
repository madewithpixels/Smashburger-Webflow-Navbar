# R-269 styling guard limits — 10 November 2026

This note records the CSS risks relevant to the local specificity guard, the existing regression evidence, and the guard's limits. It complements the [local coverage map](r269-local-coverage-map-2026-11-10.md); it does not repeat its full test inventory.

## Risk review

- **Opinionated host styles:** covered locally. The JSDOM regression combines a `nav` host rule with an authored Grid class while presets are off and checks which values win. It does not represent every site-wide selector or Webflow's cascade.
- **Stale Grid settings on a Flex panel:** covered locally. The single author class sets Flex and retains Grid columns as inert stale values across Dropdown, Overlay, Left, Right and Full-width.
- **Flex/Grid combinations:** covered locally for authored Flex with stale Grid columns and authored Grid with explicit columns and alignment. Other author declarations are not exhaustively combined.
- **Presets on/off:** covered locally for gated visual defaults and the presets-off authored Grid/host-style scenario. This does not prove the saved instance setting or rendered contrast in Webflow.
- **All five layouts:** represented by the stale-track Flex test. The authored Grid + host-style test uses Overlay only; layout-specific rendering still requires the browser checks listed in the coverage map.
- **Guard property inventory:** a confirmed gap was that `flex-direction`, `flex-wrap`, Grid areas/placement, `place-*`, and row/column gaps were not in the declaration allowlist. A future high-specificity runtime declaration using one could evade the guard despite being author-owned layout. These properties are now included, with focused regressions for representative Flex and Grid declarations.

## What the guard establishes

The guard parses the source and generated CSS files it names, finds rules whose selectors contain supported `data-mwp-*` targets, and rejects a maintained list of layout and appearance declarations unless the whole selector has the zero-specificity `:where(...)` form. It allows the documented narrow display-behavior exception for icon lines, submenus and expanded panels. The focused tests verify representative accepted and rejected selectors and declarations.

This is a bounded source audit, not a complete CSS parser or a proof of the final page cascade. It does not check every CSS property, escaped or dynamically generated target spelling, stylesheet ordering, inline styles, `!important` rules from a host page, Webflow's generated selectors, or which bytes a saved page actually loads. A new layout/appearance property may need to be added to the inventory when the runtime or supported author contract changes.

JSDOM confirms local selector matching and computed declaration values for the fixtures; it has no browser layout engine. These checks cannot establish Designer Style-panel editability, Canvas-open layout, Preview compilation/rendering, published rendering, real viewport geometry, or parity between a saved Webflow page and these local generated files. Those checks remain separate and open under R-269.
