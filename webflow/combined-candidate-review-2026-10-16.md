# Combined SmashBurger candidate review — 16 October 2026

Brief #88 — Codex (night shift), serving browser and release readiness
(R-037, R-095, R-121, R-125, R-126, R-155). Acceptance remains pending.

## Starting point and build

- Confirmed Git root: `/Users/michaelauty/Work on MacStudio/Smashburger-Webflow-Navbar`.
- Confirmed `smashburger` in `/Users/michaelauty/.config/boss/runner.json` points to the same folder.
- Started on `main` at candidate commit `9211a9f5871b9de30a613b0bf7d5118035858d86`; the working tree was clean.
- `npm run build` completed with exit 0. `git diff --exit-code -- candidate` also returned 0, so the checked-in candidate files are identical to the files regenerated from this commit.
- Candidate outputs are under `candidate/dist/` and `candidate/webflow/`. This identifies the exact local build; it does not prove that Chrome loaded it.

## Chrome and local preview

- Browser requested: Google Chrome. No candidate page was successfully loaded.
- Tried `python3 -m http.server 8765 --bind 127.0.0.1` from the canonical folder. It exited with `PermissionError: [Errno 1] Operation not permitted` while binding the local address.
- Opened a fresh Chrome tab at `http://127.0.0.1:8765/candidate/webflow/`. Chrome showed `ERR_CONNECTION_REFUSED` (“127.0.0.1 refused to connect”). Closed that tab and confirmed it was no longer in the tab list.
- CUA reported `Capability is not available: visibility` when asked to create a visible tab. Omitting that unsupported option allowed the tab attempt, but did not make the local server reachable.
- The available CUA browser API exposes page/DOM inspection, screenshots, read-only page evaluation and console logs. It did not expose viewport emulation or network request blocking. The Node REPL did not expose a working Playwright import (`SyntaxError: The requested module './index.js' does not provide an export named 'default'`), so CDP controls were unavailable in this session.
- Not checked in Chrome: 1280, 991, 767, 479 or 393px widths; Full-width and Right menus in a short viewport; scrolling; closing; focus return; Escape; overlapping menus; rapid open/close; reduced motion; Custom animation; or script blocking and native closed Details/link fallback. No Webflow Preview was used because it was not showing this exact combined candidate.

## Read-only Webflow state

Read through Webflow MCP on 16 October 2026. No page, component, asset, Library item or publication was changed.

- `MWP Component Library` (`6a0351de7c4e42148a81db6f`) still contains the saved self-contained candidate `SmashBurger 0.3.0-rc.1 candidate` (`f5b0a303-de0f-3ff8-adbe-6369ae720de8`) and CDN candidate `SmashBurger CDN 0.3.0-rc.1 candidate` (`6dc7881f-30d8-cf8a-c2c5-1efdfa57f459`). Both definitions report five collapse variants, 60 properties and nine image properties. Readback of all 144 elements in each definition found 67 component-property bindings. Their native header/details/summary/navigation structure and candidate class names remain present.
- All nine icon image properties in each saved edition point to its original MWP Component Library SVG assets. Read-only `get_asset` calls resolved the Facebook, Instagram, LinkedIn, TikTok, Threads, X, WhatsApp, Telephone and Email SVGs.
- The `Smashburger` staging site (`6a7d0157bbb1360af4e66961`) Home page (`6a7d015abbb1360af4e66968`) has a linked `SmashBurger CDN` instance (`867bf7f2-ed3c-a61e-09b8-9625881be9ec`). It is the older shared component (`97620538-d9db-0997-4d42-278c3ee1dffc`), with 60 properties and the same five collapse variants. Its selected variant is Tablet; its two explicit overrides are Tablet and Show primary navigation. The nine icon properties point to nine destination-site SVG assets, each resolving by `get_asset` to the expected icon filename.
- These saved definitions and the linked consumer predate the combined candidate commit recorded above. Their structure, properties, bindings and assets are not proof that the 16 October combined candidate is installed, rendered or released.

## Handoff and limits

- The local build is reproducible from the recorded commit. The Chrome review and all candidate-specific rendered checks remain open because this environment denied local server binding and Chrome could not reach the address.
- Do not share, publish, update or unlink the Library, and do not release or tag anything. The current authority does not allow those actions.
- Next: once local preview can bind to loopback, rerun the Chrome checks against this exact commit and record the loaded CSS/JavaScript URLs before treating any browser result as candidate evidence.

## 16 October 2026 follow-up

The follow-up session started from clean `main` at documentation HEAD `e898dc1537a7d51fff094cffa371af292e3f1c42`. The combined candidate source/build remains commit `9211a9f5871b9de30a613b0bf7d5118035858d86`; the newer HEAD is the previous handoff documentation commit.

After Python's earlier `PermissionError` on `127.0.0.1:8765`, a Node static server was tried once on the same loopback address and port. Node returned `listen EPERM: operation not permitted`. Chrome's supported CUA rejected a direct `file:` navigation because its browser URL policy permits only HTTP and HTTPS. No candidate browser tab was opened. Request blocking is not exposed by this CUA browser surface. No alternate route was attempted.

Read-only Webflow MCP confirmed the saved self-contained candidate and CDN candidate still exist in MWP Component Library, each with five collapse variants, 60 properties and the same default component-property structure. Both currently select Mobile landscape. The linked SmashBurger staging component is the older `SmashBurger CDN` definition, has eight instances, five variants and 60 properties, and also selects Mobile landscape. Earlier detailed element, binding and image-asset readback remains recorded above. These are older definitions; none is proof that the combined commit has been installed, rendered or released. No Webflow state was changed.

No Chrome width, short-viewport, scrolling, close/focus/Escape, overlap/reversal, reduced-motion, custom-animation, or blocked-script result was obtained. Chrome Preview was not used because the page was not showing the exact combined candidate. Acceptance remains pending.

## 16 October 2026 — Clean-install MCP access follow-up

In a later session starting from clean `main` at `41b47e0b77721ab083b36aa5bb2d0c35dc4c60bb`, Webflow MCP `list_sites` returned 16 accessible sites and omitted New Smashburger Test (`6ad10fe7ca9deaf9a5ea7498`). A read-only `get_all_components` request for its Home page (`6ad10fe9ca9deaf9a5ea74b9`) returned 404: “The site cannot be found.” The request was not repeated. This session therefore could not verify current component variants, properties, bindings or assets on that fixture.

CUA `getState` enumerated the Chrome extension browser and its open tabs. The documented controls expose no viewport emulation, network request blocking or CDP in this session. No new browser tab was opened, and no Chrome page or candidate behavior was tested.

The project record identifies New Smashburger Test as a native test navbar rather than an imported Library component. This site access result does not alter the earlier readback of the two saved Library candidates or the older linked Smashburger CDN component, and none of those is proof that the combined candidate is installed. No Webflow content changed. Acceptance remains pending.
