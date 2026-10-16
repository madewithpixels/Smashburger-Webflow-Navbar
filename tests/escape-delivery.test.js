import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, event, change } from '../scripts/runtime-test-fixture.mjs';

const applicable = deliveries.filter(delivery => delivery === 'source' || process.env.SMASHBURGER_CANDIDATE);
const settle = f => new Promise(resolve => f.dom.window.setTimeout(resolve, 20));
const parts = root => ({ root,
  menu: root.querySelector('[data-mwp-menu]'),
  trigger: root.querySelector('[data-mwp-trigger]'),
  panel: root.querySelector('[data-mwp-panel]'),
  link: root.querySelector('[data-mwp-panel] > a'),
  submenu: root.querySelector('[data-mwp-submenu]')
});
const escape = (f, target, cancelable = true) => {
  const event = new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable });
  target.dispatchEvent(event);
  return event;
};

function assertOpen(nav) {
  assert.equal(nav.menu.open, true);
  assert.equal(nav.root.dataset.state, 'open');
  assert.equal(nav.trigger.getAttribute('aria-expanded'), 'true');
  assert.equal(nav.panel.getAttribute('aria-hidden'), 'false');
  assert.equal(nav.panel.inert, false);
}

for (const delivery of applicable) {
  for (const reverse of [false, true]) for (const focused of [0, 1]) {
    for (const dispatch of ['focused element', 'document']) {
      for (const scenario of ['submenu then outer', 'outer from trigger', 'consumed submenu', 'consumed outer']) {
        test(`${delivery}: ${scenario}, focus navbar ${focused + 1}, ${reverse ? 'reverse' : 'forward'} init, ${dispatch}`, async () => {
          const f = runtimeFixture(delivery);
          try {
            const document = f.dom.window.document;
            const clone = f.root.cloneNode(true);
            f.root.after(clone);
            const navs = [parts(f.root), parts(clone)];
            for (const nav of reverse ? [...navs].reverse() : navs) {
              nav.instance = new f.dom.window.NavbarLight(nav.root);
              await change({ root: nav.root }, () => nav.instance.open(), 'opened');
              nav.submenu.open = true;
              nav.events = [];
              for (const name of ['close', 'closed']) {
                nav.root.addEventListener(`mwp-nav:${name}`, () => nav.events.push(name));
              }
            }
            const current = navs[focused];
            const other = navs[1 - focused];
            const nested = current.submenu.querySelector('a');
            const summary = current.submenu.querySelector('summary');
            const consumed = scenario.startsWith('consumed');
            const inSubmenu = scenario.endsWith('submenu') || scenario === 'submenu then outer';
            (inSubmenu ? nested : current.trigger).focus();
            const initialFocus = document.activeElement;
            const focusEvents = [];
            document.addEventListener('focusin', e => focusEvents.push(e.target));
            if (consumed) {
              // A prior widget can consume the key at the target or on document.
              // Capture runs before either navbar's document bubble listener.
              document.addEventListener('keydown', e => e.preventDefault(), { capture: true, once: true });
            }
            const target = () => dispatch === 'document' ? document : document.activeElement;
            let closed;
            if (scenario === 'outer from trigger') {
              closed = event(current.root, 'mwp-nav:closed');
              closed.catch(() => {});
            }
            const key = escape(f, target());
            assert.equal(key.defaultPrevented, true);
            if (consumed) {
              await settle(f);
              for (const nav of navs) { assertOpen(nav); assert.equal(nav.submenu.open, true); assert.deepEqual(nav.events, []); }
              assert.equal(document.activeElement, initialFocus);
              assert.deepEqual(focusEvents, []);
            } else {
              if (scenario === 'submenu then outer') {
                await settle(f);
                assertOpen(current);
                assert.equal(current.submenu.open, false);
                assert.equal(document.activeElement, summary);
                assert.deepEqual(current.events, []);
                assertOpen(other);
                assert.equal(other.submenu.open, true);
                assert.deepEqual(other.events, []);
                assert.deepEqual(focusEvents, [summary]);
                closed = event(current.root, 'mwp-nav:closed');
                closed.catch(() => {});
                const second = escape(f, target());
                assert.equal(second.defaultPrevented, true);
              }
              await closed;
              await settle(f);
              assert.equal(current.menu.open, false);
              assert.equal(current.root.dataset.state, 'closed');
              assert.equal(current.panel.getAttribute('aria-hidden'), 'true');
              assert.equal(current.panel.inert, true);
              assert.equal(current.trigger.getAttribute('aria-expanded'), 'false');
              assert.equal(document.activeElement, current.trigger);
              assert.deepEqual(current.events, ['close', 'closed'], 'one outer close per key');
              assertOpen(other);
              assert.equal(other.submenu.open, true);
              assert.deepEqual(other.events, [], 'the other navbar never starts closing');
              assert.equal(focusEvents.includes(other.trigger), false, 'focus never visits the other trigger');
            }
          } finally { f.close(); }
        });
      }
    }
  }

  for (const scenario of ['submenu then outer', 'outer link non-cancelable', 'outside focus', 'consumed outside']) {
    test(`${delivery}: single-navbar ${scenario}`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const document = f.dom.window.document;
        const nav = parts(f.root);
        const navbar = f.create();
        await change(f, () => navbar.open(), 'opened');
        if (scenario === 'submenu then outer') {
          nav.submenu.open = true;
          nav.submenu.querySelector('a').focus();
          assert.equal(escape(f, document.activeElement).defaultPrevented, true);
          await settle(f);
          assertOpen(nav);
          assert.equal(nav.submenu.open, false);
          assert.equal(document.activeElement, nav.submenu.querySelector('summary'));
        } else if (scenario === 'outer link non-cancelable') nav.link.focus();
        else document.querySelector('#outside').focus();
        const consumed = scenario === 'consumed outside';
        const key = new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: scenario !== 'outer link non-cancelable' });
        if (consumed) key.preventDefault();
        const closed = consumed ? null : event(nav.root, 'mwp-nav:closed');
        closed?.catch(() => {});
        document.activeElement.dispatchEvent(key);
        if (closed) await closed;
        await settle(f);
        if (consumed) {
          assertOpen(nav);
          assert.equal(document.activeElement, document.querySelector('#outside'));
        } else {
          assert.equal(nav.menu.open, false);
          assert.equal(nav.root.dataset.state, 'closed');
          assert.equal(document.activeElement, nav.trigger);
        }
      } finally { f.close(); }
    });
  }
}
