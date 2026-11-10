# Integrated candidate check — `bc63d67`

10 November 2026 — brief #448. Local evidence for R-121, R-125, R-269 and
R-272. This revision record supplements, and does not replace, the candidate
evidence pack dated 10 November. It does not approve promotion, hosted success,
Webflow rollout or release order.

## Run

- Revision: `bc63d67a609d16bb1447d245e94f3a92bfdba5bd` on `main`; working tree
  was clean before the run. Package: `0.3.0-rc.1`.
- Command: `npm run check:release`, run once on that exact revision; exit 0.
- Candidate rebuild reproduced all 19 paths and bytes. Existing candidate files
  were preserved.
- All 17 protected v0.2.6 Git-baseline files matched. Stable working delivery
  files matched v0.2.9. Runtime namespace, compatibility and retained contracts
  passed.
- Runtime CSS specificity guard passed for source and candidate CSS deliveries.
- Library CSS remains a known one-byte diagnostic: 29,071 expected versus
  29,070 saved. SHA-256 values differ, but content matches after trimming the
  trailing whitespace byte. The comparison is not byte identity.
- Serial local source/candidate suite: 710 tests, 695 passed, 0 failed,
  15 TODO. TODO cases record known retained v0.2.9 defects; they are not failed
  candidate assertions.

## Coverage present in the aggregate

- Repeated Embed: the actual candidate Embed is evaluated twice and both menus
  are checked independently (`tests/repeated-embed.test.js`).
- Resize: breakpoint boundaries and open-menu resize are exercised in the
  serial source/candidate runtime suite (`tests/runtime-delivery.test.js`).
- Rollback: v0.2.9-to-candidate exact rollback and tagged v0.2.6 Library Embed
  rollback are exercised (`tests/migration-rollback.test.js`).
- Authored Grid: all five layouts (Dropdown, Overlay, Left, Right and
  Full-width) check authored Grid and host styles with presets off
  (`tests/runtime-styling-contract.test.js`).

## Limits

This was a local check using installed dependencies. No browser, Webflow,
published page, CDN, hosted workflow or real Library operation was checked.
Michael's acceptance remains pending. No candidate or released delivery bytes,
pins, dependencies or Webflow content were changed by the check.
