# SmashBurger — Scope

Extracted 14 October 2026 for brief #6. Sources are the README, original
`todo.md`, the linked Webflow records and git history at `c808ca4`.
This records existing direction; proposed boundaries still need Michael.

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
  closed or uninstalled. Make local preserves authored structure and provides a
  recoverable conversion. Source: todo §11; R-192, R-200–R-208.
- **S-09:** Structural Navigator labels should expose descriptive `sb-*` classes;
  SmashBurger Lite is the clonable product name. Source: R-121, R-162–R-164;
  namespace audit §Chosen class mapping. The exact mapping is Proposed in D-012.
- **S-10:** Backup before structural Webflow testing and retain deliberate publication
  approval. Source: README §Webflow testing safety; R-008. This brief authorises
  documentation and one local commit only; it authorises no external mutation.

## In scope

Native self-contained and optional CDN Library editions, standalone sources,
generated Embeds, reference demo, tests, integration/migration documentation and
responsive/accessibility verification. Source: README §Repository map and §Optional
CDN distribution; todo §§1–10, 13.

Planned product tracks: basic free clonable, private Designer Extension installer,
Make local, conservative maintenance and optional separate premium mega-menu.
These are roadmap direction, not completed products. Source: todo §§10–12;
R-177–R-224. The detailed clonable scope is a draft (D-011).

## Out of scope / gates

- No duplication of desktop/mobile navigation or proprietary app-owned runtime.
  Sources: README introduction; todo §11, R-207.
- Mega-menu complexity stays separate from the default instance. Source: todo §12;
  D-015 records this future product boundary as Proposed.
- No public clonable publication before versioned class migration, verified released
  runtime, clone-flow checks and approval. Source:
  [clonable draft §§Explicit exclusions, Build and acceptance gates](webflow/smashburger-lite-clonable-scope.md).
- SB Test Four/Five were explicitly excluded from the 8 October v0.2.6 rollout.
  Their historical defects remain; future ownership is an open question (D-010).
  Source: [release §Test-site scope](webflow/v0.2.6-release-verification.md).
- Tonight: no code, Webflow, CDN, release, remote or dependency changes. Source:
  Michael's brief #6 and night-shift hard limits, 14 October 2026.

## Success criteria

Native editable installation, one shared link tree, correct collapse/layout behavior,
keyboard/focus and ARIA/inert, working CSS-only fallback, zero horizontal overflow,
loaded assets and matching pinned release bytes. Sources: R-113–R-114, R-137,
R-185, R-225, R-260–R-261;
[POC record](webflow/smashburger-poc-acceptance.md) and
[clonable acceptance gates](webflow/smashburger-lite-clonable-scope.md).
These are technical criteria; Michael alone signs off Acceptance.

## Open questions for Michael

- D-011: confirm the 14 October Lite draft's complete boundary (inferred — confirm).
- D-012: approve the exact `sb-nav` / `sb-nav-{role}` mapping (inferred — confirm).
- D-013: confirm canonical repo/package direction and a MacStudio replacement for
  the historic Macbook folder target (inferred — confirm).
- D-014: confirm the preferred Designer Extension and Make local product track
  (inferred — confirm).
- D-015: confirm the separate premium mega-menu boundary; commercial model and
  backend remain undecided (inferred — confirm).
- D-010: decide whether the old SB Test Four defect should remain active or be
  replaced by current fixtures, without an agent dropping R-160 (inferred — confirm).
- D-016: decide whether the manually maintained infrastructure snapshot should
  graduate beyond the prototype, and how its summary should look (inferred — confirm).
