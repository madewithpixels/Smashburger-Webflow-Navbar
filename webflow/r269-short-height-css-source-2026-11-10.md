# R-269 short-height CSS source review

**Evidence type: CSS source only.** This note describes declarations in the maintained stylesheet. It does not establish computed styles, which candidate is loaded on a page, actual scrolling, or whether any short-height check passes.

Source: [`src/navbar-light.css`](../src/navbar-light.css). The generated candidate stylesheet is `candidate/dist/navbar-light.css`; these declarations are generated from the same maintained source. Line references below use the maintained source.

## Shared collapsed-panel rules

- All collapsed panels use `box-sizing: border-box`, `max-height: calc(100dvh - var(--mwp-nav-header-height, 4.5rem))`, hidden horizontal overflow, vertical `auto` overflow and contained overscroll (lines 340–347). If the custom header-height variable is absent, the max-height subtracts 4.5rem.
- The shared rule is structural and remains active with visual presets off; the stylesheet comment distinguishes those structural rules from preset appearance (lines 334–347).
- The shared max-height and `overflow-y: auto` constrain content and declare a scroll container in CSS. They do not prove that a particular rendered panel scrolls or that a single menu is unobstructed.

## Per layout

- **Dropdown:** right-aligned collapsed panel placement is defined outside this excerpt; width is capped at `min(var(--mwp-nav-panel-width), calc(100vw - 1rem))` (lines 406–408). For height and overflow it retains the shared header-adjusted max-height and vertical auto overflow (340–347). It is not given fixed positioning by its layout rule.
- **Full-width:** spans `100vw`, centred on its anchor (410–415); retains the shared vertical auto overflow (340–347). Its explicit max-height repeats the shared header-adjusted calculation (417–420). No fixed positioning is specified for this layout rule.
- **Left and Right:** both are `position: fixed`, with `top: 0` and `bottom: 0` (439–448); both set `height` and `max-height` to `100dvh` (450–455), replacing the shared header-adjusted max-height. Width is capped at `min(var(--mwp-nav-panel-width), 100vw)` (457–459). They inherit the shared vertical auto overflow and contained overscroll (340–347). The panel is a two-row grid (`auto 1fr`) and the secondary section aligns to the end (450–463); source alone does not establish which part scrolls in a rendered layout.
- **Overlay:** fixed with `top: 0` and `bottom: 0` (439–448), then `inset: 0` and `width: 100%` (483–486). It sets `height` and `max-height` to `100dvh` (500–505), replacing the shared header-adjusted max-height, and inherits shared vertical auto overflow and contained overscroll (340–347). Preset-on padding is large and may consume vertical space, but is visual styling, not a separate height or scroll rule (507–514); preset-off removes that padding rule.

## Gaps for a later browser check

- No short-height media query or per-layout short-height override appears in these inspected layout rules; the source uses viewport units and general overflow declarations.
- Confirm the exact candidate CSS is loaded, and check each requested layout at recorded CSS viewport widths and short heights with one identifiable menu at a time. Observe panel bounds, reachable last item/CTA, wheel/touch scrolling, overscroll and interaction with a fixed header/trigger.
- Compare presets on and off, especially Overlay's large preset padding. Record actual rendered or computed styles separately from these source declarations.

No browser, Webflow, Preview or published-page behavior is claimed by this source review.
