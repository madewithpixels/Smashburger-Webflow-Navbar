# Native navigation after destroy — local candidate evidence

16 October 2026 — Codex (night shift), brief #76 (R-005, R-006, R-155).

The unreleased candidate now restores the native menu when enhancement is
destroyed. Local DOM tests show that the summary can open the menu again without
leaving the links hidden or inactive. This is local evidence; rendered browser
and real keyboard behaviour remain to verify. Michael's Acceptance is unchanged.

## Change and boundary

Baseline: `a59f455` on main in the explicitly supplied
`Webflow-Navbar-Light` checkout. There were no commits after its reviewed baseline.
`STATUS.md` and `webflow/brief-74-recovery-2026-10-16.md` were already uncommitted.
The canonical checkout was not changed or treated as containing this repair.

Implementation and generated outputs: local commit `7c6abdd`.

- Capture fields the runtime changes before configuration or initial state runs.
- Restore ready/collapse/state markers, projected settings, trigger ARIA,
  panel ID, hidden/inert state, native menu/submenu open attributes and API handles.
- Restore runtime-written inline properties, including their authored priority.
- Keep authored content, unrelated attributes and inline styles, including edits
  made while enhancement is active.
- Retain listener/observer removal and timer cancellation. Repeated destruction
  does nothing, including after another instance has been initialised.
- Destroying an instance that skipped enhancement leaves its markup alone.
- Existing scroll-lock functions and public API names are unchanged. This is
  separate from the proposed scroll-lock teardown work.

## Regressions and results

Test: [destroy-delivery.test.js](../tests/destroy-delivery.test.js).
The existing [candidate test gate](../scripts/check-built-runtime.mjs) now includes it.
The same nine cases run against maintained source, candidate distribution,
minified output and self-contained Embed: 36 focused tests.

- Destroy from enhanced open and closed states, with initially open and closed
  native Details: four cases per delivery.
- Click the native summary after destroy. Assert open state, sibling structure,
  locally computed visible styles, no runtime ARIA/inert restriction, link tab
  eligibility and programmatic focus.
- Destroy again, initialise again, open and close through the new API, then
  destroy again. An old API's repeated destroy cannot erase the new instance.
- Preserve authored accessibility, configuration, IDs, submenu openness, API
  handle and inline styles, with initially true and false inert properties.
- Destroy during opening/closing. Wait beyond the configured transition and
  assert no late state, completion event or queued first-link focus.
- Destroy skipped enhancement with missing menu, panel, trigger or stylesheet.

Before rebuilding, the repaired source passed 9/9 and the old candidate outputs
failed 27/27. This confirms the regressions catch the original lifecycle defect.
After rebuilding:

- `npm run test:candidate`: **89/89 pass**, including all 36 new regressions;
  zero failures, cancellations, skips or expected failures.
- `node --test tests/navbar-light.test.js`: **37/37 pass**.
- `npm run check:dist`: candidate output reproduces byte for byte.
- Namespace/compatibility checks: all **17 protected historical files** retain
  their recorded hashes; existing compatibility names remain unchanged.
- Runtime/test syntax and `git diff --check`: pass.
- Self-contained Embed: 48,068 characters; isolated Library Embed: 48,357,
  below the existing 50,000-character build limit.

Generated candidate loaders have refreshed local integrity values. Their URLs
are not proof that this repair is available remotely. In particular, the Library
verification loader still names an earlier exact commit and cannot deliver this
local repair; do not install it as evidence of the repaired candidate. No loader,
Library update, release, remote operation or publication was installed tonight.

## Remaining checks and handoff

- Not checked: rendered browser layout, native inert reflection, real pointer or
  keyboard activation, tab order or assistive technology.
- In an authorised browser session, destroy from open and closed states. Open
  the native summary with mouse, Enter and Space; reach the visible links with
  Tab. Repeat after reinitialisation and check an initially open native menu.
- Check both standalone candidate delivery and the self-contained Embed. Native
  fallback still requires the existing supported adjacent menu/panel structure.
- Not checked: Webflow, Designer/Preview, linked consumers, CDN delivery, devices
  or publication. Existing broader release gates remain separate.
- Review local commits in this explicitly supplied checkout before transferring
  them to the canonical project. Preserve the earlier settings-recovery work.
- STATUS includes the dated record but remains uncommitted with the pre-existing
  notes. This evidence file and ROADMAP retain a separately committable account.
