# R-270 trigger colour, size and timing — local source map

10 November 2026 — Codex (night shift). Local source and checked-in delivery evidence only.

## Maintained source map

- **Closed trigger:** `src/navbar-light.css:43-50` sets alignment, cursor, list marker, touch handling and selection only. `:43-54` has no trigger colour, width, height, border, or transition declaration. The usual trigger appearance and dimensions are therefore author/Webflow styles, not values defined by this source.
- **Expanded breakpoint:** `src/navbar-light.css:139-140` hides the trigger when the navbar is expanded. The collapsed trigger is displayed at `:163-170`. Responsive visibility switches are at `:222-228`, `:248-260`, and `:274-286`; these do not set dimensions or colour.
- **Open and hover/focus:** No trigger-specific `:hover` or `:focus` appearance rules occur in maintained `src/navbar-light.css`. The ordinary open state has no trigger colour or size rule. The icon lines, rather than the trigger box, animate: `:62-68` defines opacity/transform transitions, and `:72-94` changes line transforms/opacity while the native menu is open.
- **Closing control, limited layouts:** For collapsed Left, Right and Overlay layouts, with presets enabled, `src/navbar-light.css:563-570` applies while state is `opening`, `open`, or `closing`. It sets background `var(--mwp-nav-close-surface, #1d2022)`, border `1px solid var(--mwp-nav-close-border, rgb(255 255 255 / 0.3))`, pill radius, text `var(--mwp-nav-close-ink, #fff)`, and minimum width/height `2.75rem` (44px at the usual 16px root size). The base selector does not declare a transition for these values. This rule does not cover Dropdown or Full-width, nor presets-off.
- **Duration tokens:** `src/navbar-light.css:8-19` defaults panel open/close to 280ms/220ms and icon transitions to 220ms. These are panel and icon timings, not a trigger background-colour duration. The panel close transition is at `:190-196`; opening is at `:211-216`. `src/navbar-light.js:360-378` moves opening to open after the configured open duration; `:381-393` keeps the closing state until the configured close duration expires. Reduced motion or `data-motion="none"` makes the JS state timer zero at `src/navbar-light.js:418-423`.
- **Close rule motion:** `src/navbar-light.css:563-570` changes the close-control surface/colour/minimum dimensions during opening, open and closing but declares no transition for those properties. Any interpolation depends on other authored styles or browser defaults and cannot be inferred from this rule.

## Checked-in delivery comparison

The readable generated candidate CSS contains the matching trigger and close-control declarations at `candidate/dist/navbar-light.css:32-42` and close-control rule at `:443-450`. The main Webflow Embed carries the trigger declarations at `candidate/webflow/navbar-light-embed.html:44-54` and close-control rule at `:564-571`. The minified releases (`dist/navbar-light.min.css`, `candidate/dist/navbar-light.min.css`) preserve code but are not useful for declaration-level line references. No trigger colour/size defaults are added by these checked-in generated CSS copies. The candidate JS timings/state handling are generated from maintained JS; the older v0.2.7 consumer browser note below concerns a separate installation and must not be conflated with current candidate defaults.

## Separate consumer-site browser evidence

The earlier read-only observations in `webflow/evidence/r270-r271-v027-2026-11-04.md` report:

- Voice Focus at 511px: 56×56px trigger, plum surface and soft-pelican text; computed background transition 180ms; panel opening opacity/transform 280ms; configured close duration 220ms.
- madewithpixels at 2044px: 72×72px trigger; Coral base and Raspberry on hover, focus and open; computed trigger transition 0s; configured close duration 220ms. No state-specific size change was found in inspected trigger rules.
- These are site-specific rendered measurements and colour names from that browser pass. They are not values from the maintained source map above, and they do not establish all states, widths, or consumers. The reported early close within 40ms after a click did not instrument or identify a resize event.

## Browser-only unknowns

- Current rendered trigger width, height and computed colour for each consumer and breakpoint.
- Whether either installation's hover, keyboard focus, open and closing colours match its earlier reported values, including focus-visible treatment and timing in closing frames.
- Whether the 44px minimum close-control style is overridden, its rendered box size, or applies to any particular consumer instance.
- Actual computed transition properties and durations after current authored styles, reduced-motion preferences, and runtime overrides are applied.
- Whether a trigger colour/size transition completes before or during panel opening/closing on the current consumer sites.
- The resize event source for the historical 40ms closure and current consumer behavior after the R-271 release.

No browser or Webflow check was made for this source map. Source declarations and delivery copies do not prove consumer-site rendering.
