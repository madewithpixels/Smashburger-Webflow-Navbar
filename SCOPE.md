# SmashBurger — Scope

Extracted 14 October 2026 for brief #6. Sources are the README, original
`todo.md`, the linked Webflow records and git history at `c808ca4`.
Updated with Michael’s Q-01–Q-07 answers on 14 October 2026 (this session).
Michael settled D-012 and D-013 in boss on 15 October 2026. SmashBurger remains the
product identity; the `sb-nav` class mapping and new repository/local path are set.

## Purpose

A CSS-first, Webflow-native replacement for the native Navbar, with one shared set
of expanded/collapsed links, editable component properties and progressive
JavaScript enhancement. Source: [README — introduction](README.md#smashburger).

## Principles

- **S-01:** Visible structure uses native Webflow elements, with no pseudo-elements.
  Source: README §Design constraints; ROADMAP R-001, R-004.
- **S-02:** CSS and native details/summary provide the functional no-script baseline;
  JavaScript adds accessibility and progressive behavior. Source: README §Design
  constraints; R-005–R-007, R-031, R-038–R-042.
- **S-03:** Use one link tree across expanded and collapsed layouts, with normal
  editable Webflow classes for destination styling. Source: README introduction
  and §Styling and destination-project inheritance; R-024–R-026.
- **S-04:** Native content, configuration and delivery remain available to authors;
  Canvas-only controls must preserve Preview/published behavior. Source: R-002,
  R-029–R-030, R-165–R-176; [Canvas fixture](webflow/canvas-authoring-fixture.md).
- **S-05:** Preserve keyboard, focus, ARIA/inert, reduced-motion and native fallback
  behavior through maintenance. Source: R-038–R-042, R-150, R-225–R-266.
- **S-06:** Self-contained delivery is the dependable default; CDN is optional and
  exact-version pinned with integrity metadata. Source: todo §9; README §Optional
  CDN distribution; R-098–R-117.
- **S-07:** Immutable releases require new versions for corrections. Protect existing
  CDN URLs and compatibility contracts through the planned class migration.
  Source: README §Optional CDN distribution; R-120–R-127;
  [namespace audit](webflow/class-namespace-migration-audit.md).
- **S-08:** Generated output remains editable and functional after the future app is
  closed or uninstalled. The proposed Make local track preserves authored structure and provides a
  recoverable conversion; commitment is deferred until Lite works (Michael,
  Q-04, 14 October 2026; D-014). Source: todo §11; R-192, R-200–R-208.
- **S-09:** Structural Navigator labels should expose descriptive `sb-*` classes.
  SmashBurger is the product identity and SmashBurger Lite is the free clonable
  name. Michael accepted the `sb-nav` mapping in D-012 on 15 October 2026.
  Source: R-121, R-162–R-164; namespace audit §Chosen class mapping; D-012.
- **S-10:** Backup before structural Webflow testing and retain deliberate publication
  approval. Source: README §Webflow testing safety; R-008. This brief authorises
  documentation and one local commit only; it authorises no external mutation.

## In scope

Native self-contained and optional CDN Library editions, standalone sources,
generated Embeds, reference demo, tests, integration/migration documentation and
responsive/accessibility verification. Source: README §Repository map and §Optional
CDN distribution; todo §§1–10, 13.

The accepted Lite boundary is a native local component with plain and styled
examples, a workbench, a safe-editing guide and one pinned CDN loader. No Library
install, app dependency, CMS or mega-menu. Source: Michael, Q-01, 14 October 2026;
D-011; R-177–R-186. The clonable is not built or published.

The Designer Extension / Make local commitment is deferred until Lite works.
Mega-menu stays separate from the basic navbar; premium pricing, licensing and
backend are deferred. Source: Michael, Q-04/Q-05, 14 October 2026; D-014/D-015;
R-187–R-224. The manual settings snapshot stays a prototype, with a muted
“Infrastructure and settings” label direction. Source: Michael, Q-07,
14 October 2026; D-016; R-165. Label styling is not implemented by this update.

## Out of scope / gates

- No duplication of desktop/mobile navigation or proprietary app-owned runtime.
  Sources: README introduction; todo §11, R-207.
- Mega-menu complexity stays separate from the default instance. Source: todo §12;
  D-015 records Michael’s accepted separation; commercial choices are deferred.
- No public clonable publication before versioned class migration, verified released
  runtime, clone-flow checks and approval. Source:
  [clonable draft §§Explicit exclusions, Build and acceptance gates](webflow/smashburger-lite-clonable-scope.md).
- SB Test Four/Five were explicitly excluded from the 8 October v0.2.6 rollout.
  Verify fresh installs in current test projects. Keep R-160 as a historical
  defect and leave the SB Test Four page alone (Michael, Q-06, 14 October 2026; D-010).
  Source: [release §Test-site scope](webflow/v0.2.6-release-verification.md).
- This update covers the four docs and one local commit only; Michael pushes.
  Source: Michael’s instructions in this session, 14 October 2026.

## Success criteria

Native editable installation, one shared link tree, correct collapse/layout behavior,
keyboard/focus and ARIA/inert, working CSS-only fallback, zero horizontal overflow,
loaded assets and matching pinned release bytes. Sources: R-113–R-114, R-137,
R-185, R-225, R-260–R-261;
[POC record](webflow/smashburger-poc-acceptance.md) and
[clonable acceptance gates](webflow/smashburger-lite-clonable-scope.md).
These are technical criteria; Michael alone signs off Acceptance.

## Naming and repository direction

The SmashBurger product identity and `sb-nav` class mapping are settled (D-012).
The canonical repository/package direction and local destination are settled in
D-013. Michael will create and clone the new repository at
`/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`. The current
checkout and remote have not moved. Continue with R-119 onward after that clone is
available; move the local folder only at R-128. Existing pinned assets and old
compatibility URLs remain protected until the planned release checks are complete.
Source: Michael’s accepted decisions in boss, 15 October 2026; R-119–R-128.

## Deferred decisions (not blocking the docs update)

Designer Extension / Make local waits until Lite works (D-014). Premium pricing,
licensing and backend remain deferred (D-015). Source: Michael, Q-04/Q-05,
14 October 2026 (this session).
