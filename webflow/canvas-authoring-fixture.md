# Designer-only closed panel fixture

On 2026-10-02, the linked self-contained `SmashBurger` instance on [SB Test Four Home](https://sb-test-four.webflow.io/) was used to test an authoring-only panel rule. A separate Code Embed on that page contains:

```html
<style>html.wf-design-mode [data-mwp-navbar] [data-mwp-panel] { display: none !important; }</style>
```

Webflow Designer's Canvas document had `html.wf-design-mode`. At the Tablet breakpoint the Brand and Menu trigger remained visible while the navigation panel had `display: none` and a zero-size box. The same Embed was compiled in Preview, whose document had `html.wf-inactive` instead; opening the menu displayed all 16 panel links. The published Home page contained the style rule but lacked `wf-design-mode`: its desktop panel remained visible and its 600px menu opened with all 16 links, no horizontal overflow. The fixture is intentionally page-local; neither shared source component Embed nor released CSS was changed.

This proves a viable Canvas-only presentation hook, not a finished editing experience. A linked Library instance cannot expand its internal element tree in the consumer site's Navigator, so hiding the panel there leaves component properties as the editing route. The source component editor does expose its internal Navigator. Before moving the rule into the source component, verify source-editor selection of hidden links, all five collapse variants, the no-JavaScript fallback, and a prepared open-state workbench instance. The current test rule hides the panel even for `Never` and expanded desktop authoring, so it is unsuitable as a universal default without a way to opt in to the open view.

A temporary copy of the same style-only Embed on the MWP Component Library self-contained page confirmed the source component editor can expand `Navbar inner` → `Navigation panel` → `Primary navigation` → `Navigation links` and select a hidden native link. Its Settings panel exposed the Link destination and text; its Style panel exposed the `mwp-css-nav_link` selector and spacing controls. The temporary source-page Embed was then deleted, and the panel returned to `display: flex`. The shared component remains unchanged by this authoring experiment.

## Canvas helper in the source components (2026-10-03)

The authoring rules now ship as a separate, generated, style-only Embed:
`src/navbar-light-canvas.css` → `webflow/navbar-light-canvas-embed.html`
(`npm run build:canvas`, part of `npm run build` and `check:dist`). They cannot
live in the runtime Embed or the CDN stylesheet. Webflow replaces any Embed whose
code contains the literal script-tag text with a "only displays in preview mode"
placeholder on the Canvas. This applies even when the text appears only inside a
CSS comment: the first helper attempt was swallowed this way. A test now rejects
that text anywhere in the helper source. Runtime and CDN assets are unchanged by
that 2026-10-03 work (then `v0.2.5`; the current released baseline is `v0.2.6`).

Installed as `SmashBurger Canvas helper` directly after the runtime Embed in
both MWP Component Library source components (self-contained element
`aca600bf-3b2d-dc23-23d1-d3aaed11d48a`, CDN element
`7ebe183f-2c0e-1ac8-3a84-992b00c93d7f`). A new `Layout` → `Canvas: show open menu`
switch (default Off) is bound to the root `data-canvas-open` attribute
(self-contained prop `b492c47f-7fb8-5e44-79a5-72b97e8c0394`, CDN
`f9ea6ef1-dab8-dc5d-0841-443e829dad02`).

Michael's Designer screenshots of the self-contained acceptance page
(Tablet variant, Left drawer) confirmed:

- Desktop (1279px): full expanded menu; only the runtime Embed placeholder
  remains; `Smashburger settings` floats as a compact card at the right instead
  of taking page flow.
- Tablet (820px), switch Off: the header shows only Brand and the burger; the
  link panel is hidden. This proves Webflow emits the variant marker on the Canvas.
- Tablet, switch On: the link panel reappears under the header for styling.
- The first floating-inspector version was unreadable over a dark section; it
  now has a white surface, dark ink, shadow and a 70vh scroll limit (Canvas only).

The switch was reset to its default afterwards. Still to verify: the CDN
source component and a linked consumer (the Mobile and Always variants were
verified later the same day; see below).

Published check (Library staging, `/smashburger-navbar`, same day): the helper
Embed is present but inert. The page has no `wf-design-mode` class and the root
emits `data-canvas-open="False"`. The settings inspector stays runtime-hidden
(`display: none`, `position: static`). At 600px the closed panel keeps its
runtime `grid`, and opening shows all 9 links with the backdrop and no overflow.

## Navbar workbench page (2026-10-03)

MWP Component Library draft page `SmashBurger workbench`
(`/smashburger-workbench`, page `6ac107a07a294c4436ac576a`). It holds three
labelled native sections, created through MCP without new classes:

1. Closed instance (`514649f7-ee9a-2345-bae5-01a561700a8e`): `Always` variant,
   `Canvas: show open menu` Off. The Canvas shows only Brand and the `MENU` trigger.
2. Open instance (`dcbde88f-7757-82c1-0005-1424d96bcff8`): `Always` variant,
   `Canvas: show open menu` On. The Canvas shows the full panel (primary links,
   CTA, socials, contacts) for styling; Preview behaves like a normal closed menu.
3. Backdrop swatch (`aabdb11b-c887-e8b6-e3ac-ea4d7b55d6a5`): a plain Div with
   the `mwp-css-nav_backdrop` class but no `data-mwp-backdrop` hook, so it never
   becomes fixed or covers the Canvas.

Michael verified the page in the Designer at Desktop and Tablet. He gave the
swatch's class a red background, and both real menus' backdrops turned red in
Preview, so styling the swatch styles the runtime backdrop as intended.

Found: on the Canvas, each instance's floating settings card hangs below its
own root and overlaps the following content. Instance 1's card covers instance
2's header and trigger; instance 2's card covers the backdrop label.

Fix, step 1 (Michael chose a compact chip): the card became a pill centred at
the top edge of the header row. Michael then found that clicking it on the
Canvas opens nothing, because the Designer intercepts Canvas clicks for
selection, so a `details` element cannot toggle there. Clicking it only
selected the hidden rows, which showed as green dashed placeholder shapes.

Fix, step 2: on the Canvas the inspector is now a non-interactive,
text-width label (`Smashburger settings`). Its rows and summary hint are hidden
with `display: none`, and the open-state styles are gone. The settings
themselves are read in the Designer's component props panel.

Fix, step 3: Michael asked why a label that does nothing is shown at all. It
is not needed: the inspector only carries prop values for the runtime script,
and the props panel already shows them. On the Canvas it is now `display:
none`, and it stays selectable in the Navigator. Written to both source helper
Embeds. Michael's Desktop screenshot confirmed it: no label, no dashed
shapes, and nothing covers the second instance.

MCP authoring notes for the future Designer Extension: `data_element_builder`
created `TextBlock` as a Div whose text stayed Webflow's placeholder, so use
`Paragraph`. Elements cannot be created or moved with a component instance as
the anchor; reorder by moving the instance relative to ordinary siblings.

## Mobile variant Canvas check (2026-10-03)

On the workbench page, instance 1 was temporarily set to `Mobile landscape`
(the base variant) and instance 2 to `Mobile portrait` with `Canvas: show open
menu` Off. Michael's Designer screenshots matched every expectation:

| Width | Mobile landscape | Mobile portrait |
|---|---|---|
| Desktop (1279px) | expanded | expanded |
| Tablet (820px) | expanded | expanded |
| Mobile landscape (667px) | Brand + MENU | expanded |
| Mobile portrait (393px) | Brand + MENU | Brand + MENU |

With the Tablet and Always checks above, every collapse variant now hides its
closed panel on the Canvas at exactly its own breakpoint. Both instances were
restored afterwards (Always; instance 2 open-menu switch On).

## Linked consumer check: CDN edition on Smashburger (2026-10-03)

Smashburger `/demo` (page `6ab820b4510a44142d770a51`) holds a linked
`SmashBurger CDN` instance (`867bf7f2-ed3c-a61e-09b8-9625881be9ec`, Tablet
variant). This means the namespaced Library variant marker and prefixed classes
are in play. Michael's Designer screenshots:

- Desktop (1279px): full link row; no settings label; only the runtime Embed
  placeholder below the header.
- Tablet (820px), switch Off: Brand + MENU only.
- Tablet, switch On: the panel shows under the header for styling.

The switch was reset to its default (Off) through MCP afterwards. The Canvas
helper is now verified on both editions, as a source component and as a linked
Library instance.

Noted, not changed: the demo page's own copy still says the component is
"pinned to v0.2.3"; it is page content outside the component.

## Script placeholder bar hidden (2026-10-03)

Webflow shows a grey "script embed only displays in preview" bar for a
script-bearing Code Embed, about 70px under every instance header. Michael
found it in the way. The helper now hides the root's direct-child `.w-embed`
elements on the Canvas. Webflow's placeholder renders inside that wrapper.
Style elements inside a hidden Embed still apply, so the helper keeps working,
and the Embeds stay selectable in the Navigator. There is no separate control,
because nobody needs the bar back. Verified on the workbench at Desktop:
both bars are gone, the closed instance shows Brand + MENU, and the open
instance shows its panel.

## Unlinked local control (2026-10-08)

On the fresh Smashburger `Unlink test` page, unlinking the Tablet Library
variant removed its Webflow variant marker and left `data-canvas-open` bound to
an obsolete component property. On the native root `header.mwp-css-nav`, Michael
set static `data-collapse="tablet"`, chose **Disconnect** for the old purple
`data-canvas-open` value, and confirmed static `true` exposes the collapsed
panel for Designer styling while `false` hides it again. The separate Canvas
helper Embed must remain in the unlinked subtree. Preview still starts closed
and uses the actual MENU control. See the exact [editing steps](migration-guide.md#show-the-unlinked-panel-for-canvas-styling).

The site-local `SB Unlink Property Trial` keeps `data-canvas-open="false"` as a
static root attribute from the outset, so it survives unlinking without a
legacy binding. Its one Base variant and `data-collapse` property are a
Tablet-only proof: the trial's extra CSS supplies the Tablet layout that the
released Library variant normally provides. A separate site-local
`SB Unlink Property Modes Trial` uses one Base variant and fixture CSS for all
five collapse choices. A fresh unlink selected to each choice had no numbered
variant selectors. The Tablet and Mobile portrait copies kept the same static
Canvas control and passed `true`/`false` Designer checks at their collapse
breakpoints. The [trial record](unlink-hardening-candidate.md)
separates the verified fixtures from remaining clean-destination work. The
shared Library and v0.2.6 delivery assets were not changed.

## Keep in HTML when hidden: isolated Code Embed check (2026-10-13)

On the unpublished `SB Unlink Clean Trial` page `Unlink Fallback Isolation`
(`6ace83e6064283b213f2c222`), the separate Canvas helper Embed
(`09cde9a2-2733-c3bd-bebf-1d90daca34ce`) was tested without hiding the runtime
loader Embed (`09cde9a2-2733-c3bd-bebf-1d90daca34cd`). The helper started
Visible, with **Keep in HTML when hidden** unchecked. Checking that option and
then setting the helper to Hidden left its code stored (Data MCP readback),
but at the 820px Tablet Canvas the collapsed menu panel and links appeared
instead of remaining hidden for styling. Thus this option did not preserve the
helper's effective Canvas CSS in this test. This agrees with Michael's report
that the feature has been unreliable for Code Embeds; do not use it as the
mechanism for hiding the SmashBurger authoring helper.

The helper was restored to Visible, Keep in HTML was unchecked again, and the
Tablet Canvas returned to the expected Brand + MENU closed view. Data MCP
confirmed visibility and helper code were retained. The test says nothing
about the sibling runtime Embed's execution while hidden, nor about published
output. Preview was restored after the Canvas test. No Library component,
release asset, or published site was changed. See also the [unlink candidate
record](unlink-hardening-candidate.md).

## Closed native Details wrapper for the two Embeds (2026-10-13)

On the isolated unlinked candidate at `SB Unlink Clean Trial` → `Unlink
Fallback Isolation` (`6ac8c9f18e63674e4f34f88a` /
`6ace83e6064283b213f2c222`), the runtime-loader Embed and Canvas-helper Embed
were moved under a new, closed native `<details>` element labelled
`SmashBurger infrastructure`. Data MCP readback confirmed the order
`summary`, loader Embed, helper Embed; both Embeds remained visible in the
stored tree. The loader still points to the exact v0.2.6 CSS and deferred
JavaScript assets. The helper retains its Designer-only rules and the isolated
candidate's local collapse CSS. The candidate root's static collapse,
backdrop, presets and Canvas-open values and its menu's motion/layout settings
remain in the saved element attributes/settings. Neither the Library source,
the shared candidate definition, nor the released v0.2.6 component was edited.

With the wrapper closed, Preview interaction after the move still opened and
closed the collapsed menu; the infrastructure summary itself could be opened
and closed. The page was then published only to the `SB Unlink Clean Trial`
Webflow staging subdomain (no custom domains). The first route request returned
404 because the prior compiled publish predated the page edits. One staging
publish compiled at `2026-10-13T22:26:55.831Z`; the exact published route,
`/unlink-fallback-isolation`, then loaded.

Chrome DevTools responsive emulation and one batched DOM read per width
confirmed one navigation root and zero document overflow at 2,060, 820, 667
and 393 CSS pixels. The v0.2.6 stylesheet and script elements were present at
all four widths, `data-mwp-ready="true"` was set, and the menu state changed
from expanded Desktop links to a closed, inert panel with a visible trigger at
the three collapsed widths. At 820, 667 and 393px, the published trigger opened
the links; Escape closed it and returned focus to the trigger at all three
widths. Moving from an open Mobile landscape menu through Desktop and back to
Mobile portrait returned to the closed mobile trigger state. Refresh at Mobile
portrait also returned the menu and infrastructure disclosure to closed.
The closed infrastructure disclosure measured 20px high and contained both
Embeds; its summary was 14px Arial with no padding.

This proves that the saved code and published CSS/JS remain present and the
runtime initializes while the Embeds sit inside a closed Details element. It
does **not** complete the authoring prototype: the plain-text summary appears
as an unstyled extra row below the navigation in published output, and the
Details does not display a human-readable property/configuration summary.
Those are visible authoring/presentation gaps; do not reuse this wrapper in a
release component without resolving them. The root's static attributes remain
available through Webflow settings and the rendered DOM, but this is not a
substitute for a readable summary.

### No-JavaScript fallback after wrapping (2026-10-13)

Chrome DevTools Request Conditions blocked only the exact v0.2.6 CDN JavaScript
URL; the stylesheet remained available. The browser reported the blocked
request and the component's fallback warning. At 393, 820 and 667 CSS pixels,
the closed menu remained hidden, the navigation `<details>` summary remained
available, and each width had zero horizontal overflow. The native disclosure
opened to expose the navigation links and closed again at each width. With the
script blocked, `data-mwp-ready` was absent and the script-managed
`aria-expanded`, `aria-hidden` and `inert` attributes were absent; native
`<details>` disclosure semantics remained exposed to Chrome's accessibility
tree. No-JavaScript Escape closing was not established. The infrastructure
Details also remained independently closed on reload.

The request-blocking rule was then turned off. After reload, DevTools reported
zero affected requests, the v0.2.6 script tag was present, the header returned
`data-mwp-ready="true"`, and the closed menu again had zero overflow at 393px.
Chrome was returned to the normal Desktop page view. The staging site has the
isolated test page published as evidence; the Library was not shared or
published and no Git push was made.
