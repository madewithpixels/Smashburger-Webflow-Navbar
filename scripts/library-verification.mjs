import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';
import { integrity, renderCdnLoader } from './cdn-loader.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
export const verificationCommit = 'ddb83c79934914ef0f03f3f012ee2743154153f7';
const baseUrl = `https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@${verificationCommit}/candidate/dist`;
const assets = [
  { kind: 'css', selector: 'link', attribute: 'href', name: 'navbar-light.min.css' },
  { kind: 'javascript', selector: 'script', attribute: 'src', name: 'navbar-light.min.js' }
];

export function readPinnedArtifact(path) {
  try {
    // Read raw blob bytes, never today's working tree. Disable partial-clone
    // lazy fetching and replacement objects so this remains exact and offline.
    return execFileSync('git', ['--no-pager', 'show', `${verificationCommit}:${path}`], {
      cwd: root, encoding: 'buffer', stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, GIT_NO_LAZY_FETCH: '1', GIT_NO_REPLACE_OBJECTS: '1' }
    });
  } catch (cause) {
    throw new Error(`Library verification artifact unavailable in local Git objects: ${verificationCommit}:${path}. No network or current-source fallback is allowed.`, { cause });
  }
}

export function createLibraryVerificationLoader(version) {
  const bytes = Object.fromEntries(assets.map(asset => [asset.kind,
    readPinnedArtifact(`candidate/dist/${asset.name}`)]));
  return renderCdnLoader({ version, baseUrl, ...bytes,
    notice: 'UNRELEASED LIBRARY VERIFICATION ONLY: exact existing commit pin; no release tag. Predates the overlapping-overlay scroll-lock fix.' });
}

export function assertLibraryVerificationLoader(loader) {
  // Parsing does not load or execute external resources.
  const dom = new JSDOM(loader);
  try {
    assert.equal(dom.window.document.querySelectorAll('[data-mwp-navbar-light-cdn]').length, assets.length);
    for (const asset of assets) {
      const nodes = dom.window.document.querySelectorAll(`${asset.selector}[data-mwp-navbar-light-cdn="${asset.kind}"]`);
      assert.equal(nodes.length, 1, `Library verification ${asset.kind}: expected one asset`);
      const node = nodes[0];
      assert.equal(node.getAttribute(asset.attribute), `${baseUrl}/${asset.name}`, `Library verification ${asset.kind}: wrong pin`);
      assert.equal(node.getAttribute('integrity'), integrity(readPinnedArtifact(`candidate/dist/${asset.name}`)),
        `Library verification ${asset.kind}: integrity does not match pinned Git bytes`);
      assert.equal(node.getAttribute('crossorigin'), 'anonymous');
    }
  } finally {
    dom.window.close();
  }
}
