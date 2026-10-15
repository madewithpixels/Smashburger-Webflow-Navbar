import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Lite review examples keep one native link tree and remain candidate-only', () => {
  const examples = read('candidate/lite/review-examples.html');
  const workbench = read('candidate/lite/workbench-references.html');
  const guide = read('webflow/smashburger-lite-safe-editing.md');

  assert.match(examples, /Unreleased local review material/);
  assert.match(examples, /not a native Webflow component, a clonable or installation instructions/);
  assert.equal((examples.match(/data-mwp-navbar/g) || []).length, 2);
  for (const hook of ['data-mwp-menu', 'data-mwp-trigger', 'data-mwp-panel', 'data-mwp-item']) {
    assert.ok(examples.includes(hook), `example retains ${hook}`);
  }
  assert.ok(examples.includes('class="sb-nav-inner"'));
  assert.ok(examples.includes('class="sb-nav-panel"'));
  assert.ok(examples.includes('../demo/navbar-light.browser.js'));
  assert.equal((workbench.match(/data-mwp-navbar/g) || []).length, 2);
  assert.ok(workbench.includes('data-mwp-menu open'));
  assert.ok(workbench.includes('Backdrop reference'));
  assert.ok(!workbench.includes('<script'));
  assert.ok(!examples.includes('0.3.0-rc.1/dist/navbar-light.min.js'));
  assert.ok(guide.includes('unreleased review material'));
  assert.ok(guide.includes('not an installation instruction'));
});
