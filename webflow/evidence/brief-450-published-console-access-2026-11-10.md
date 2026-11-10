# Brief 450 — published staging Console access — 10 November 2026

Serves R-272. This record covers the published Home page only; it does not
replace the actual repeated-Embed check or the separate saved Designer Preview
record.

## What was observed

- Opened `https://disposable-sb-test-site.webflow.io/` in a new Google Chrome
  tab through the authorised desktop app controls.
- Chrome exposed the page title “Disposable SB test site” and the Home URL. The
  accessibility tree showed three `Site navigation` containers, each with the
  same MWP / LAB, Home, CDN build, Self-hosted, Style guide, More, release and
  contact/social links.
- This is page/content identity only. The browser did not expose a page revision,
  loaded script URL/version or response bytes in the view reached. No asset
  identity was established.
- The active Chrome app was Google Chrome; its browser version was not exposed.
  The CSS viewport dimensions were not measured.

## Access limit and undone checks

- A fresh reload with Console cleared was not completed. No Console was read.
- Chrome's desktop accessibility view initially showed a Webflow Designer tab.
  After opening the published Home, the authorised keyboard attempts did not
  open a readable Console: `super+alt+j` returned an app-change notice; the
  subsequent `super+shift+j` opened Download history. Chrome's tab inventory
  route reported “The browser access host is unavailable.”
- No menu was opened or interacted with. Whether either menu produces a
  duplicate declaration/script-name error is unknown. Other Console errors and
  failed script requests, including their locations, are unknown.
- No conclusion follows about the actual repeated Embed test, current staging
  bytes, or saved Designer Preview. Those remain separate surfaces and checks.
- The tab opened for this check was closed. No Webflow content or settings were
  changed.

## Handoff

Retry the published Home Console check in a Chrome session where the Console is
readable through the granted controls. Capture the CSS viewport, fresh reload,
loaded page and asset identity exposed by Chrome, then open each menu separately.
