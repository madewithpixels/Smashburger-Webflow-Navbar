# Test gate repair without changing v0.2.6

16 October 2026 — Codex (night shift), brief #70, serving R-125 and R-155.

## Confirmed historical failure

Closing the first of two open overlay menus in v0.2.6 unlocks page scrolling
while the second menu remains open. Maintained source keeps the lock until
both menus close. The existing regression checks this distinction without
changing runtime behaviour or adding scenarios.

Before adding an expected-failure label, this isolated comparison exited 1:

```sh
env -u SMASHBURGER_CANDIDATE -u SMASHBURGER_FRESH_BUILD node --test --test-name-pattern='multiple overlay navbars' tests/runtime-delivery.test.js
```

- Maintained source passed.
- Historical distribution, minified distribution and self-contained Embed each
  failed the same assertion: after closing the first menu, the document's
  `data-mwp-scroll-locked` marker was absent instead of `true`.
- Four tests ran: one pass, three failures, no skipped tests or TODOs.

An earlier comparison run alongside the full suite also hit event timeouts.
Those timeouts were not used as evidence for expected failures. The isolated
comparison above reached the same scroll-lock assertion in all three released
deliveries.

## Gate changes

The overlap regression now uses the repository's existing executed-TODO
convention only for the confirmed historical failures. It does not skip the
test or change any assertion. Source remains mandatory. Either
`SMASHBURGER_CANDIDATE` or `SMASHBURGER_FRESH_BUILD` disables the new TODO label;
the candidate command sets both.

The candidate runner previously named eight test files and omitted
`tests/navbar-light.test.js`, which contains 37 maintained-source checks.
It now uses the same automatic test discovery as `npm test`, covering all nine
current test files and future discovered regressions.

Both commands run test files one at a time with `--test-concurrency=1`.
Two full concurrent runs exceeded the existing ten-second timeout in the
Library build-failure regression. No loader/integrity code, timeout or assertion
was changed. Serial file scheduling removes that competition during checking.

## Ordinary gate result

`npm test` exits 0: 124 tests, 97 passes, zero unmarked failures, zero skipped
tests and 27 executed expected failures. All 27 are historical delivery checks:

- 15 pre-existing stylesheet-failure and breakpoint/focus limitations.
- Nine pre-existing teardown, resize and owner-document lock limitations.
- Three newly labelled overlapping-overlay limitations, confirmed above.

Source passes the overlap regression without a TODO. The serial run also passed
the existing Library build-failure regression with its original timeout.

## Fresh candidate result

`npm run test:candidate` exits 0 after building the isolated candidate and
checking retained contracts: 124 passes, zero failures, zero skipped tests and
zero TODOs. All nine discovered test files run, including the previously omitted
37 maintained-source checks. The unchanged overlap assertions pass for source,
fresh distribution, minified distribution and self-contained Embed.

All 17 SHA-256 hashes in `compatibility/v0.2.6-baseline.json` match. Explicit Git
diffs against the initial baseline also confirm source, candidate deliveries,
historical deliveries, compatibility records, dependency lockfile, demo and
archived demo bytes are unchanged. Only the package's test script changed;
version and dependencies remain unchanged.

`npm run check`, syntax checks for the edited test and runner, and
`git diff --check` pass. The implementation is local commit `53cb0d2`.
Initial main was clean at `78d72f2`; the only commit since STATUS's previous
reviewed baseline (`358e157`) recorded the rehearsal evidence already described
there. No relevant documentation gap or conflicting agent work was found.

## Boundaries

This is local simulated-page evidence. No runtime source, generated delivery,
release version, pinned URL, integrity value, dependency or Acceptance was
changed. No proposed scroll-lock scenario was added. The older Library
verification pin remains separate from current source.

Not checked: browser rendering, actual scrolling, keyboard/touch operation,
assistive technology, network/CDN loading, Webflow Canvas/Preview, linked
consumer upgrade/rollback or human/device checks. No browser, external service,
remote Git operation, tag, publication or dependency installation was used.
