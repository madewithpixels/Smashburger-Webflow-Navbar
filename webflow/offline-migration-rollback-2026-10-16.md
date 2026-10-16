# Offline class migration and rollback rehearsal

16 October 2026 — Codex (night shift), brief #69. Local preparation for the
class migration and release checks (R-115, R-121, R-155). Acceptance unchanged.

## Run again

From the repository root, using the dependencies already present:

```sh
node --test tests/migration-rollback.test.js
npm run test:candidate
```

The first command reads existing artifacts only. The second builds the isolated
candidate and includes the rehearsal in the candidate suite. Neither needs a
network connection or browser. There are no installs or network fetches.

## What the executable rehearsal does

1. Read the native header from the protected archived legacy demo,
   `smashed-navbar-html-demo/demo/index.html`. Add client classes (including
   legacy-looking unrelated names and collision/variant combos), accessible
   names, image `src`/`srcset` references, custom menu/root settings and a CSS
   variable. Retain its original links, including telephone and email links.
   Move the call to action before the other panel content and move the submenu
   before the primary links. Keep native menu/panel siblings intact.
2. Save the parsed fixture's complete serialisation, original class strings,
   node identities, recursive content/attribute tree and local delivery pair in
   memory, before any migration or enhancement. Check the original legacy
   runtime against this authored fixture.
3. Apply only the 37 explicit token pairs in the
   [accepted mapping table](class-namespace-migration-audit.md#chosen-class-mapping).
   No prefix-wide substitution is used. Swap the inert local delivery descriptor
   to the matching candidate CSS/JavaScript or self-contained Embed. Assert the
   same nodes, order, text, attributes and unrelated classes survive.
4. Load that fixture into a fresh jsdom page. Read its actual CSS and JavaScript
   from disk. Check discovery and repeat initialisation, trigger/panel IDs,
   opening with first-link focus, two-stage submenu/outer Escape with focus
   return, explicit public closing, native `open`, ARIA and inert state. Confirm
   disabled link/outside closing still works and authored settings/content stay
   intact during these actions. Check the paired stylesheet hides a closed
   submenu using its applicable class name.
5. Restore only the saved class strings and original delivery descriptor. Assert
   the complete fixture serialisation equals the saved original exactly, then
   repeat the focused contract with v0.2.6. Run the whole migration/rollback cycle
   twice against the same saved fixture for each delivery form.

Normal distribution, minified distribution and self-contained Embed are paired
between the protected top-level v0.2.6 artifacts and their unreleased
`candidate/` counterparts. A mixed old/new pair is rejected before execution.
Automatic resource loading is disabled; simulated-page fetch, XHR and WebSocket
entry points throw. Image references are preserved as authored data, not loaded.

The test also checks all mapping entries, including legacy settings/demo classes
not present in the archived header. Deliberate content, image, link, accessible
name, configuration, order and unrelated-class damage must fail preservation.
Rollback repairs class damage from the saved class list. It must reject other
damage rather than hide it by replacing the content tree.

## Evidence and limits

At local test commit `358e157`, `npm run test:candidate` passed **87/87**, with
zero skipped tests or expected failures. All six new rehearsal tests passed.
The three delivery forms exercised 15 fresh simulated pages: original legacy,
then two candidate/rollback pairs per form. All 17 protected historical hashes
matched. Syntax checks, `npm run check`, record link checks and `git diff --check`
passed. Explicit diffs confirmed runtime source, generated candidate output,
protected releases, version and dependencies were unchanged.

The executable checks are in [the rehearsal tests](../tests/migration-rollback.test.js).
All migration/rollback helpers are confined to
[test fixtures](../tests/fixtures/migration-rehearsal.mjs). There is no installer
or general migration command. The namespace guard protects the existing 17
historical hashes; the archived seed and released delivery files are not edited.

Each runtime check uses a fresh simulated page to represent reloading after a
delivery change. This is not an in-place live runtime swap and does not claim
that `destroy()` restores every pre-enhancement attribute. Exact rollback refers
to the saved parsed author fixture, including its delivery descriptor, not the
archived source file's original byte formatting or a runtime-mutated Webflow DOM.

Not checked: browser rendering, physical keyboard activation, assistive technology,
image retrieval, real CDN requests or integrity enforcement, Webflow class/style
records, property bindings, asset remapping, linked Library installation/update,
Canvas/Preview, or cloned-site semantic-version upgrade and rollback.

The candidate is unreleased. This rehearsal is local preparation only. The
cloned-Webflow upgrade/rollback item (R-115) stays **planned**, with its live checks
outstanding. No Library sharing, publication, release tag, dependency change or
Acceptance change is implied.
