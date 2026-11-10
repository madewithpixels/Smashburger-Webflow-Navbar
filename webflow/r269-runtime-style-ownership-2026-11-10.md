# Runtime style ownership across menu layouts

**Scope:** Local source comparison for brief #389. This records CSS declarations and their selectors, not proof of computed or rendered ownership in Webflow.

## Files compared

- `src/navbar-light.css` is the maintained runtime stylesheet (lines 1–717).
- `candidate/dist/navbar-light.css` is the checked-in 0.3.0-rc.1 candidate stylesheet. It has generated formatting and a candidate banner. The layout selector groups appear at candidate lines 328–430; shared panel/state rules at 156–225 and 282–327. The rules reviewed correspond to the source declarations below.
- The `<style>` block in `candidate/webflow/navbar-light-embed.html` matches `src/navbar-light.css` exactly after trimming outer whitespace. Its CSS starts one line later because of the opening `<style>` tag; layout rules map to source lines 334–717 and Embed lines 335–718.
- `candidate/webflow/library/navbar-light-embed.html` contains minified CSS on line 2, so line-by-line comparison is not useful. This review did not perform a complete normalized selector/declaration comparison for that block.
- `dist/navbar-light.css` and `webflow/navbar-light-embed.html` are the older 0.2.9 delivery, not the candidate. They retain forced Grid/default styling and older class hooks (for example, the Embed changes the backdrop rule and class selectors; compare source lines 26, 100 and 126–128 with `webflow/navbar-light-embed.html` lines 23–26, 94–101 and 118–123). Do not use these as candidate evidence.

## Shared ownership and states

- **Root and trigger structure:** `position`, `isolation`, `z-index`, trigger alignment, cursor, touch behavior and menu stacking defaults are in zero-specificity `:where(...)` selectors, so ordinary Webflow class rules can override them (source lines 8–50). The trigger's painted look and dimensions are not set here except the open drawer/overlay close-trigger preset below.
- **Closed collapsed menu:** Trigger is shown; the panel is placed and hidden with opacity, pointer-events, transform and visibility. The closed state disables transition (source lines 163–205). Those state declarations are behavior; panel display/placement defaults are low-specificity structure.
- **Opening/open/closing:** Open selectors show the panel and enable pointer input; transition timing uses the configured open/close variables. Motion presets can change transform; `none` and `custom` alter transitions/visibility (source lines 185–218 and 585–658). Item stagger is also runtime behavior (lines 661–682).
- **Expanded layout:** The trigger is hidden and panel returns to static flow; display is Flex in a zero-specificity selector. State visibility and transitions are explicitly neutralised (source lines 137–160). Webflow classes can supply the desired expanded panel display/layout.
- **Backdrop:** Fixed inset and stacking are structural; its neutral visual surface is preset-gated. Opacity, visibility, pointer-events and transition depend on state; state selectors activate it for each layout (source lines 120–135 and 589–597).
- **Appearance presets:** Panel surface, border, shadow, ink, gaps and padding, link spacing, secondary separators, overlay look and close-trigger appearance are gated by `data-presets` (source lines 334–405, 422–426, 432–436, 507–528 and 563–570). They are candidate defaults, not evidence of what a particular Webflow class or Canvas actually wins in the cascade.

## Per-layout map

- **Dropdown:** Panel is absolute, below the header, right-aligned by default, with a constrained width; `[data-align="left"]` and center alignment can change its anchor (source lines 172–183, 300–331, 406–408). Panel max-height and scrolling are shared collapsed structure (340–347). Optional backdrop appears in opening/open state when enabled (589–597). No layout-specific surface beyond the shared preset panel.
- **Full-width:** Panel spans the viewport and is centered; desktop uses two panel columns and responsive primary-link tracks. At widths up to 767 px the panel columns become one (410–430, 572–582). Border sides and shadow, plus the secondary-column separator and padding, are presets (422–426, 432–436, 577–582). Backdrop is optional (589–597).
- **Left:** Panel is fixed to the viewport height and left edge, with a capped width; secondary content is aligned to the bottom (439–468, 450–463). Closed/entry transform comes from left placement/motion, while open removes it (470–472, 585–587, 600–604, 622–625). During opening/open/closing, the menu trigger moves into the drawer; the preset supplies its close-button appearance (547–570).
- **Right:** Same fixed-height drawer structure as Left, anchored right; its closed transform enters from the right (439–463, 474–480). Shared drawer trigger move and close appearance apply (547–570). Open state clears the placement transform (585–587).
- **Overlay:** Fixed full-viewport panel with full width/height, no inherited centered-anchor translation, centered content alignment; its upward entry transform is separate motion behavior (483–505). Dark surface, no border/radius, ink, spacing, centered link layout and large link typography are presets (507–528). Trigger remains in its authored header position; only stacking changes, unlike the drawer trigger (545–556). Backdrop state behavior applies (589–597).

## Differences and evidence limits

- The main candidate Embed's CSS text is an exact source match. Candidate CSS files have generated formatting/banner differences; the inspected main style declarations show the same rules. The minified Library Embed still needs a full normalized comparison before claiming byte- or rule-for-rule parity across all candidate artifacts.
- The older 0.2.9 stylesheet/Embed is materially different in selectors and preset ownership, including forced/renamed styles; it is not the current candidate and should not be conflated with it.
- Existing STATUS reports contain limited staging evidence: earlier Preview reports for some layouts and a published page read for Dropdown/Full-width and a Full-width presets-off value. Michael also reported all five layouts opening in staging, without exact widths or menu-instance mapping. Those observations are separate from this source map and do not prove Designer Style-panel ownership or complete Canvas/Preview/published parity.
- **Rendered Webflow evidence from this session:** none. No page was opened or changed. Computed-style and matched viewport evidence for all five layouts, including the presets-off case, remains open.

**Open questions (not blocking):** Does the minified Library Embed preserve every source selector/declaration? At each layout and state, do authored Webflow class values win in Designer, Preview and published output, including close-trigger appearance and authored transforms?
