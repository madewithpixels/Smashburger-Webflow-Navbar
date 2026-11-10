# R-269 published-page comparison checklist

For one focused browser session on the Disposable SB test site. Compare the saved Home page in Designer Canvas and Preview with the newly published Home page. The site was published to its Webflow subdomain on 10 November 2026. Do not treat Preview or Michael's reports as published-page evidence.

## Reported before this session

- Michael reports that the unlinked bottom candidate opened cleanly in Dropdown, Full-width and Left in Preview at 667 px. The separate still-linked second menu opened without clipping in Right, but sat under the bottom menu; its Overlay layout was also good. These are Michael's visual observations, not independent published-page checks.
- Michael reports that all five layouts (Dropdown, Full-width, Left, Right and Overlay) opened cleanly at Tablet and Mobile sizes. The exact widths and menu instance for each layout are unknown.
- Michael reports that on his phone the upper expanded menu is cut off by menus below it, while the lower menu works well. Exact width, page and menu identity are unknown.
- In the Designer Canvas, the unlinked candidate was checked with presets off at 999 px. It remained visible with its links and outlined CTA, with no obvious appearance change. This does not establish Preview or published behavior.
- The published Home page loaded at 1280 × 720 and showed three expanded navigation rows stacked vertically. The three rows' relationship to the saved page's standalone menu, nested Library instance and unlinked candidate is unknown. This is the only recorded published visual evidence; intended appearance, responsive behavior and interactions remain unchecked.

## Focused checks

For each screenshot, record the page, layer (Canvas, Preview or published), menu instance (identify it by its visible position and Designer/Navigator label; write **unknown** if it cannot be matched), viewport width × height in CSS pixels, layout setting, presets state and result. Capture a screenshot and computed styles for the menu panel, links and CTA where available. Keep observations separate by layer.

1. **Identify and compare appearance.** On Home, match the three saved menu roots to what appears in Preview and on the published page. At the published baseline of 1280 × 720, record each row's appearance, position and open/closed state. Repeat at a matched desktop width and a matched mobile width in all three layers. State whether the same menu and layout are being compared; if not known, mark unknown. Record screenshots and computed panel/link/CTA styles. Do not infer that the stacked rows are intended.
2. **Presets off.** Use the unlinked bottom candidate where it can be identified; its saved layout is Dropdown. At 999 px, Designer Canvas presets-off appearance is already reported above. In Preview and published Home, record the actual width and height, how presets were disabled (if possible without changing saved content), and the appearance of the panel, links, CTA and trigger. If the published page cannot be switched to presets off without editing/publishing, record not checked. Record screenshots and computed styles. Do not call the Canvas observation a pass for Preview or published.
3. **Short viewport height.** On the published Home page, open each identifiable menu at the same recorded width and a deliberately shortened, measured viewport height. Repeat in Preview if available. Record whether all links and the CTA can be reached, whether the panel scrolls, clips or overlaps, and the exact viewport dimensions and menu instance. No short-height result is recorded yet; choose and write down the height used rather than assuming one.
4. **Keyboard opening, Escape and focus return.** On the published Home page, identify one menu trigger and record its instance and viewport dimensions. Starting with focus before/on the trigger, use keyboard only to open the menu; record the key, focus indicator and resulting focus target. Press Escape; record whether the menu closes and where focus lands. Reopen it, move focus into the menu and press Escape; record whether focus returns to the trigger. Repeat in Preview if its keyboard controls work. Capture a short recording or screenshots plus a written key/focus sequence. No published keyboard or focus-return result is recorded yet.

## Evidence boundary

Mark each result **observed in Canvas**, **observed in Preview**, **observed on published page**, **Michael-reported**, or **not checked**. Record failures and unknown page, width or instance identity plainly. This checklist records no acceptance; Michael reviews the results.
