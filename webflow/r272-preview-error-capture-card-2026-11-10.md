# Preview compilation error capture card (R-272)

Use this during the next authorised Chrome session on the Disposable SB test site. Capture one failing run before changing page content, code or Preview settings.

## Before reproducing

- **Page and address:** ______________________________
- **Page state:** ☐ saved Designer ☐ Preview ☐ published (record the exact URL)
- **Candidate/version and instance:** ______________________________
- **Viewport:** ______ × ______ CSS px; browser zoom: ______
- **Date/time and browser:** ______________________________
- **Preview custom code:** ☐ on ☐ off ☐ not applicable

## Capture sequence

1. Open the named page in the state above. Record the page state and URL; do not call a published-page result a Preview result.
2. Open Chrome DevTools before reproducing. In Console, enable preservation of the log, clear old entries, then reproduce the failure once with the current Preview custom-code setting recorded above.
3. Copy the complete visible error text, including its type, message, stack and any source link. Record whether it says only `CompilationError: Invalid source code` or names a duplicate declaration/script. Do not paraphrase it.
4. Open the error's source link, if present. Record the full source URL, line and column, and the surrounding relevant lines. If no page-specific location is supplied, write **none supplied**; do not substitute the local Embed line number.
5. In Network, preserve the log and filter to script requests. Find requests associated with the failure by timing, initiator or the Console source link. Record request URL, initiator, status, response content type and relevant response text. If no related request or response is identifiable, write **none identified**. Save a screenshot or copy the relevant response excerpt where available.
6. Record whether the page rendered, remained on “Compiling custom code…”, or showed another result. Keep this run separate from any later run with custom code off or on.

## Result

- **Exact error text:** ______________________________
- **Console source URL:line:column:** ______________________________
- **Relevant script request / response / initiator:** ______________________________
- **Rendered result:** ______________________________
- **Evidence saved (screenshot or copied excerpt):** ______________________________
- **What this run establishes:** ______________________________
- **What remains unknown:** ______________________________

## Interpretation boundary

The recorded Preview failure is Webflow's general `CompilationError: Invalid source code`; no duplicate-name message has been confirmed. The local source review found no concrete syntax or scope defect in the checked generator path. That review did not inspect Webflow's submitted Preview input or diagnose runtime behaviour. Treat a duplicate-script explanation as unconfirmed unless this capture shows a specific duplicate declaration or name error. A successful local parse, a different page state, or a published-page Console does not explain or clear the Preview compilation error.

**Source records:** [R-272](../ROADMAP.md#r-272--update-the-shared-smashburger-candidate-and-verify-the-disposable-staging-page-has-no-duplicate-script-name-error); [10 November local source review](../STATUS.md#10-november-2026--local-preview-error-source-review--codex); [earlier Preview diagnosis](lite-preparation-local-tests-2026-10-14.md#empty-page-preview-compiler-probe).
