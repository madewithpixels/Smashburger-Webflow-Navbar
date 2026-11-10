# Full-width short-height fixture

Open `full-width-short-height.html` directly in a browser. It loads the checked-in candidate CSS and JavaScript by relative local paths; it does not need a site or network connection.

Use a 471 × 500 CSS pixel viewport first, then 471 × 900 CSS pixels. Open the single Menu trigger. At each height, check whether the last link, Contact us, can be reached and activated, whether scrolling the open panel moves its links, and whether keyboard focus can reach Contact us and remains visible. At the taller height, compare the same observations and note any change. Record what happens; this fixture does not presume a failure or provide a panel-specific scrolling workaround.

The menu is Full-width with visual presets off. The HTML has one root, one native details/summary trigger and one adjacent panel containing one link tree. Candidate assets are `../../candidate/dist/navbar-light.css` and `../../candidate/dist/navbar-light.js` relative to the page. The final Contact us link targets the visible `#contact` section.
