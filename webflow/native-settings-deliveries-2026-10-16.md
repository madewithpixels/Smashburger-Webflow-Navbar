# Native settings across candidate deliveries

16 October 2026 — Codex (night shift), brief #74. Local configuration evidence
for the class migration, retained public settings and release checks
(R-121, R-122, R-155). Acceptance is unchanged.

The supported settings paths pass in maintained source, candidate distribution,
minified output and the self-contained Embed. No departure from the existing
contract was reproduced, so no runtime or generated delivery was changed.
The tests protect existing behaviour; they add no precedence or setting names.

## Sources and evidence

The starting checkout was clean on main at `bc2caeb`. The only commit since
STATUS's reviewed baseline `60960a3` recorded the already described motion
evidence and handoff. No conflicting agent session or new answer appeared in
boss's inbox.

The established contract comes from
[`configure()`, `collapsePreset()` and the behaviour handlers](../src/navbar-light.js),
the [documented properties](../README.md#component-properties), the
[property map](component-map.md#component-properties), and the saved
[Library baseline](evidence/library-sb-nav-baseline-2026-10-15.json) and
[candidate readback](evidence/library-sb-nav-candidate-2026-10-15.json).
The [Library record](library-sb-nav-candidates-2026-10-15.md) explains how those
copies retained their bindings. These are saved source-definition records,
not fresh Webflow inspection or linked-consumer evidence.

In the table, **menu** means the native Details element, **root** means the
navbar header, and **text** means a native element with `data-mwp-config-value`.
The order shown is the existing order for non-empty values, from highest
priority to lowest. It is specific to each row.

| Settings | Established input order and source | Executable evidence | Limit |
| --- | --- | --- | --- |
| Layout, motion, alignment, icon lines | Menu `data-mwp-layout`, `data-mwp-motion`, `data-mwp-align`, `data-mwp-icon-lines`; then root `data-layout`, `data-motion`, `data-align`, `data-icon-lines`; then text `layout`, `motion`, `alignment`, `iconLines`. `configure()`; saved Library motion attribute and layout/alignment/icon text bindings. | Each path, conflicting values, defaults, surrounding text whitespace, five `mwp-layout-` and seven `mwp-motion-` presets. Normalised layout drives automatic scroll locking; normalised motion controls completion timing, including immediate None. | No rendered layout or animation claim. Preset normalisation removes the established prefix; this does not introduce case folding or support for malformed preset names. |
| Focus first, close outside, close link, scroll lock | Menu then root attributes `data-focus-first`, `data-close-on-outside`, `data-close-on-link`, `data-scroll-lock`; then text `focusFirst`, `closeOutside`, `closeLink`, `scrollLock`. `configure()` and saved text bindings. | False beats conflicting lower-priority True. Each path also tests mixed-case True/False, resulting focus, a nested link click, outside click and scroll-lock acquisition/release. Auto locks Left, Right and Overlay, but not Dropdown or Full-width. | Scroll CSS state is checked in a DOM simulator; physical scrolling is not. Backdrop click remains its separate unconditional close handler. |
| Opening duration | Menu `data-mwp-open-duration`; root `data-open-duration`; menu `data-mwp-duration`; root `data-duration`. `configure()`. Saved **Opening duration** is bound to menu `data-mwp-duration`. | Separate menu/root durations override generic values. Milliseconds, seconds, explicit zero, shared-duration fallbacks and both saved editions reach the opening deadline. | There is no established text `openDuration` or text `duration` path. The menu generic duration remains the closing fallback when no separate closing value exists. |
| Closing duration | Menu `data-mwp-close-duration`; root `data-close-duration`; text `closeDuration`; menu `data-mwp-duration`; root `data-duration`. `configure()` and saved **Closing duration** text binding. | Conflicts, seconds, zero and generic fallbacks reach an independently asserted closing deadline. Both saved editions retain different opening and closing defaults and overrides. | Do not replace this with a universal “menu always wins” rule: separate root/text closing values already beat generic menu duration. |
| Distance and easing | Menu `data-mwp-distance` then root `data-distance`; menu `data-mwp-ease`, menu `data-mwp-easing`, then root `data-easing`. `configure()`; saved Distance/Easing menu bindings. | Exact effective CSS properties, both easing aliases and their priority, root fallback, and a complete menu cycle. | No established text distance/easing binding. CSS parsing and visible travel/easing require a browser. |
| Panel width, stagger, icon duration | Menu `data-mwp-panel-width`, `data-mwp-stagger`, `data-mwp-icon-duration`; root `data-panel-width`, `data-stagger`, `data-icon-duration`; text `panelWidth`, `stagger`, `iconDuration`. `configure()` and saved text bindings. | Each input path and conflicting values set the exact effective CSS properties while menu behaviour still completes. | The simulator does not prove panel geometry, item animation or burger rendering. |
| Submenu icon duration/easing/rotation | Root `data-submenu-icon-duration`, `data-submenu-icon-easing`, `data-submenu-icon-rotation`; then text `submenuIconDuration`, `submenuIconEasing`, `submenuIconRotation`. `configure()` and saved text bindings. | Root and text values, root-over-text conflicts and both editions' saved defaults set exact CSS properties. | No established menu-attribute route; no rendered arrow-motion claim. |
| Collapse mode | Root `data-collapse` before a recognised `data-wf--…--variant` value. `collapsePreset()`, documented five variants and saved definitions. | All five modes, conflicting variant markers, variant-only fallback, simulated resize and public open/close behaviour. | This uses an explicit variant marker; unmarked Webflow Base CSS and Canvas authoring are not reverified here. |
| Layout presets, backdrop, Canvas-open | Saved root `data-presets`, `data-backdrop`, `data-canvas-open` bindings; `configure()` leaves these intact. CSS handles the preset switch. [Layout presets](layout-presets.md#layout-presets-switch-v025). | Resolving both saved editions preserves these attributes. Presets False excludes the panel from the visual-preset selector while structural opening/closing still works. Settings text is visible before readiness and hidden by runtime CSS afterwards. | Presets is a root CSS switch, not the `mwp-layout-` normalisation above. Selector matching and computed settings visibility do not prove rendering, backdrop visibility or Canvas behaviour. |

## Executable checks

[`tests/configuration-delivery.test.js`](../tests/configuration-delivery.test.js)
adds **42 scenarios per delivery, 168 candidate checks**. Ordinary `npm test`
runs those 42 scenarios against maintained source; candidate mode runs the same
assertions against all four deliveries. The shared fixture loads each real local
JavaScript and CSS delivery; no network, browser or desktop app is used.

The saved-binding checks read the candidate JSON without modifying it. For each
edition they resolve the four native menu property bindings, three root property
bindings and all 14 settings-text bindings against that edition's property IDs
and defaults. They repeat with selected overrides, including a prefixed Overlay
layout, Custom motion, 61 ms opening, 11 ms closing, focus enabled, presets off,
closing disabled, scroll locking disabled and a different panel width. This is a
configuration-only reconstruction in the shared native fixture, not a full
Library component installation. It does not execute the old saved CDN loader or
claim its pinned bytes include later runtime repairs.

Each timed cycle checks native Details state, public state, root/menu/panel/
backdrop state, trigger ARIA and panel relationship, panel ARIA/inertness,
focus, scroll-lock state and the exact `open → opened → close → closed` event
sequence. A controlled clock advances only enhancement timeouts; native Details
notifications still arrive asynchronously. Completion must wait until its own
configured deadline, including independent open/close durations. None motion
completes at zero delay while retaining the configured CSS values.

The fixture's existing `CSS.supports` stand-in accepts values because jsdom
does not supply that browser API. These tests use valid CSS tokens and verify
their delivery and runtime timing; they do not verify browser CSS validation.

## Ambiguities retained

- The property documentation does not promise that every property has all three
  input routes. The saved records explain the mixed menu/root/text delivery.
  Missing routes in the table were not invented or repaired.
- Empty menu/root strings fall through because `configure()` uses non-empty
  values; trimmed blank text also falls through to defaults. The tests retain
  this behaviour. A bare boolean attribute in `configure()` is therefore not a
  new presence-based True contract. Use explicit `true` or `false`.
- Duplicate text keys, multiple competing recognised variant markers, unknown
  preset names, and recovery from an invalid high-priority CSS token have no
  documented authoring promise. No precedence was added for them.
- Layout presets uses the CSS string `false` case-insensitively. It is not the
  runtime's general boolean parser. Canvas-open is a separate authoring setting.

These points do not block this brief and need no new product decision. A future
request to extend the configuration surface should settle its contract first.

## Results and handoff

Final commands and counts are recorded in [STATUS](../STATUS.md). Use
`npm run test:candidate` to rebuild local candidates and run the mandatory
configuration scenarios alongside the rest of the maintained suite.

No Library snapshot, property, binding, public hook, protected release, loader
integrity code, dependency, Webflow content, remote state or Acceptance changed.
Browser rendering, real input, assistive technology, Canvas/Preview, linked
consumer properties/installation/update, CDN loading and release publication
remain outside this local evidence. Existing approval and access gates remain.
