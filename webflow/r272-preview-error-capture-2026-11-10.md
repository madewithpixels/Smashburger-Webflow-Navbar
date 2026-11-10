# Preview error capture — 10 November 2026 (R-272)

## Page and run

- **Page:** Disposable SB test site, Home, saved Designer page with Preview active.
- **Address:** `https://disposable-sb-test-site.design.webflow.com/?workflow=sitePreview`
- **Browser and date:** Google Chrome, 10 November 2026.
- **Preview custom code:** On.
- **Viewport shown by DevTools:** iPad Pro 13 emulation, 1376 × 1032 CSS px; DevTools device-toolbar zoom showed 75%. The Webflow Canvas viewport control had initially read 2044 px before DevTools opened. The page was not at a measured 667 px in this capture.
- **Candidate/version and instance:** Not visible in the page or Console evidence available in this run; not identified.

## Console evidence

Before clearing the Console, it showed Webflow's general compiler error:

```text
CompilationError: Invalid source code
    at l (https://disposable-sb-test-site.design.webflow.com/js/site/webflow.js:501:37415)
    at p (https://disposable-sb-test-site.design.webflow.com/js/site/webflow.js:501:37229)
```

The Console also showed `Uncaught (in promise) CompilationError: Invalid source code` at `webflow.js:501`. Neither message names a duplicate script, duplicate declaration or candidate script. The two `webflow.js` locations are Webflow's own page script; they do not identify the submitted source that failed compilation.

After enabling Keep log, clearing the Console and reloading once, the page showed “Compiling custom code…” briefly and then navigated to a GoDaddy sign-in page. The fresh run did not reproduce the compiler message. No further reload was attempted.

## Requests and limits

- **Related script request or response:** None identified. The available Console entry for the compiler error did not expose a related request or response body.
- **Separate unrelated request visible in the earlier Console:** `https://www.paypal.com/sdk/js?client-id=sb&merchant-id=XXX&commit=false` returned HTTP 400. DevTools said its request was unavailable in the Network panel. No evidence connects it to the compilation error, so it is not treated as a cause.
- **Rendered result:** The initial saved Designer Preview showed the page and its navigation. After the cleared-log reload, the page reached the sign-in screen rather than a completed Preview.
- **Evidence saved:** Exact Console text and locations transcribed here from the visible Console accessibility tree; no screenshot or response excerpt was saved.
- **What this establishes:** The general Preview compilation error and its two Webflow stack locations were visible before the reload. This run does not establish which submitted input failed.
- **What remains unknown:** A fresh reproduction, the candidate version/instance, a page-specific compiler location, the failing source, and any related script request or response. The duplicate-script explanation remains unconfirmed.

This is a Preview observation, not a published-page Console result. The unrelated PayPal 400 and the local source review are kept separate from Webflow's general compilation error.
