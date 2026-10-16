import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { assertLibraryVerificationLoader } from './library-verification.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = path => readFile(resolve(root, path), 'utf8');
export function assertNoLegacyClasses(text, label) {
  // Class selectors, runtime selector strings and actual HTML class attributes.
  // Attribute names/values (including motion presets and variant markers) survive.
  assert.doesNotMatch(text, /\.mwp-[a-z0-9_-]+/i, `${label}: legacy class selector`);
  for (const [, classes] of text.matchAll(/\bclass\s*=\s*["']([^"']*)["']/gi)) {
    assert.ok(!classes.split(/\s+/).some(token => token.startsWith('mwp-')), `${label}: legacy class token`);
  }
}
export function assertContracts(text, tokens, label) {
  for (const token of tokens) assert.ok(text.includes(token), `${label}: missing compatibility hook ${token}`);
}
export async function checkNamespace() {
  const contracts = JSON.parse(await read('compatibility/runtime-contracts.json'));
  const baseline = JSON.parse(await read('compatibility/v0.2.6-baseline.json'));
  for (const [path, expected] of Object.entries(baseline.sha256)) {
    const bytes = await readFile(resolve(root, path));
    assert.equal(createHash('sha256').update(bytes).digest('hex'), expected, `${path}: immutable baseline changed`);
  }
  for (const [path, expected] of Object.entries(contracts.sourceTokens)) {
    const text = await read(path);
    assertNoLegacyClasses(text, path);
    assert.deepEqual([...new Set(text.match(new RegExp(contracts.pattern, 'g')))].sort(), expected, `${path}: compatibility contracts changed`);
  }
  const cssHooks = contracts.sourceTokens['src/navbar-light.css'];
  const jsHooks = contracts.sourceTokens['src/navbar-light.js'];
  for (const name of ['navbar-light.css', 'navbar-light.min.css', 'navbar-light.js', 'navbar-light.min.js']) {
    const path = `candidate/dist/${name}`;
    const text = await read(path);
    assertNoLegacyClasses(text, path);
    assertContracts(text, name.endsWith('.css') ? cssHooks : jsHooks, path);
    if (name.endsWith('.css')) assert.match(text, /\.sb-nav-submenu-list/);
    assert.match(text, /SmashBurger v0\.3\.0-rc\.1/);
  }
  const embed = await read('candidate/webflow/navbar-light-embed.html');
  assertNoLegacyClasses(embed, 'self-contained Embed');
  assertContracts(embed, [...cssHooks, ...jsHooks], 'self-contained Embed');
  const libraryEmbed = await read('candidate/webflow/library/navbar-light-embed.html');
  assertNoLegacyClasses(libraryEmbed, 'unshared Library candidate Embed');
  assertContracts(libraryEmbed, [...cssHooks, ...jsHooks], 'unshared Library candidate Embed');
  assert.equal(libraryEmbed.match(/<script>([\s\S]*)<\/script>/)?.[1], embed.match(/<script>([\s\S]*)<\/script>/)?.[1], 'Library candidate JavaScript must match the source candidate');
  assert.ok(libraryEmbed.length <= 50000, 'Library candidate exceeds Webflow Embed limit');
  const libraryCanvas = await read('candidate/webflow/library/navbar-light-canvas-embed.html');
  assertNoLegacyClasses(libraryCanvas, 'unshared Library Canvas helper');
  assertContracts(libraryCanvas, contracts.sourceTokens['src/navbar-light-canvas.css'], 'unshared Library Canvas helper');
  const libraryCdn = await read('candidate/webflow/library/navbar-light-cdn-candidate-loader.html');
  assertNoLegacyClasses(libraryCdn, 'unshared Library CDN verification loader');
  assertLibraryVerificationLoader(libraryCdn);
  assert.match(libraryCdn, /@ddb83c79934914ef0f03f3f012ee2743154153f7\/candidate\/dist\//);
  assert.doesNotMatch(libraryCdn, /--mwp-nav-css-ready/);
  for (const path of ['candidate/webflow/navbar-light-canvas-embed.html', 'candidate/demo/navbar-light.browser.js']) {
    const text = await read(path);
    assertNoLegacyClasses(text, path);
    assertContracts(text, contracts.sourceTokens[path.includes('canvas') ? 'src/navbar-light-canvas.css' : 'src/navbar-light.js'], path);
  }
  const demo = await read('demo/index.html');
  assertNoLegacyClasses(demo, 'reference demo');
  const dom = new JSDOM(demo);
  assert.ok(dom.window.document.querySelector('.sb-nav[data-mwp-navbar]'));
  assert.ok(dom.window.document.querySelector('.sb-nav-panel[data-mwp-panel]'));
  dom.window.close();
  for (const name of await readdir(resolve(root, 'webflow/fixtures'))) {
    if (/\.(html|css)$/.test(name)) assertNoLegacyClasses(await read(`webflow/fixtures/${name}`), name);
  }
  const loader = await read('candidate/webflow/navbar-light-cdn-loader.html');
  assertNoLegacyClasses(loader, 'candidate loader');
  assertContracts(loader, ['data-mwp-navbar-light-cdn', 'data-mwp-navbar-light-version', 'mwp-navbar-light:cdn-error', 'mwpStatus'], 'candidate loader');
  assert.match(loader, /UNRELEASED CANDIDATE/);
  assert.match(loader, /Smashburger-Webflow-Navbar@v0\.3\.0-rc\.1\/dist/);
  console.log(`Namespace and compatibility checks passed; ${Object.keys(baseline.sha256).length} historical files are byte-identical.`);
}
if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await checkNamespace();
