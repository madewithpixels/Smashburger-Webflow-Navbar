import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, event, change } from '../scripts/runtime-test-fixture.mjs';

const applicable = deliveries.filter(delivery => delivery === 'source' || process.env.SMASHBURGER_CANDIDATE);
const tick = f => new Promise(resolve => f.dom.window.setTimeout(resolve, 20));
const cases = [
  { name: 'public close', action: f => f.api.close() },
  { name: 'public close with explicit false', action: f => f.api.close({ focusTrigger: false }) },
  { name: 'public toggle', action: f => f.api.toggle() },
  { name: 'native closure', native: true, action: f => { f.menu.open = false; } },
  { name: 'link close', action: f => f.link.click() },
  { name: 'nested link descendant close', nested: true, action: f => f.span.click() },
  { name: 'outside close with focus still inside', action: f => f.outside.click() },
  { name: 'public close preserves outside focus', outside: true, action: f => f.api.close() },
  { name: 'native closure preserves outside focus', native: true, outside: true, action: f => { f.menu.open = false; } },
  { name: 'link close preserves outside focus', outside: true, action: f => f.span.click() },
  { name: 'outside close preserves clicked control focus', outside: true, action: f => f.outside.click() },
  { name: 'explicit trigger focus remains supported', outside: true, force: true, action: f => f.api.close({ focusTrigger: true }) },
  { name: 'focus moved outside during closing stays there', moveDuringClose: true, action: f => f.api.close() }
];

// Record focus synchronously BEFORE each runtime write that can hide the panel.
// MutationObserver runs too late to prove ordering. jsdom does not enforce inert.
function watchClosing(f) {
  const records = [];
  const record = kind => records.push({ kind, active: f.dom.window.document.activeElement });
  for (const element of [f.root, f.menu, f.panel, f.root.querySelector('[data-mwp-backdrop]')]) {
    const dataset = element.dataset;
    Object.defineProperty(element, 'dataset', { configurable: true, value: new Proxy(dataset, {
      set(target, name, value) {
        if (name === 'state' && ['closing', 'closed'].includes(value)) record(`state:${value}`);
        return Reflect.set(target, name, value);
      }
    }) });
  }
  const setAttribute = f.panel.setAttribute.bind(f.panel);
  f.panel.setAttribute = (name, value) => {
    if (name === 'aria-hidden' && value === 'true') record('aria-hidden');
    return setAttribute(name, value);
  };
  let inert = f.panel.inert;
  Object.defineProperty(f.panel, 'inert', { configurable: true, get: () => inert, set(value) {
    if (value) record('inert');
    inert = value;
  } });
  const open = Object.getOwnPropertyDescriptor(f.dom.window.HTMLDetailsElement.prototype, 'open');
  Object.defineProperty(f.menu, 'open', { configurable: true, get: () => open.get.call(f.menu), set(value) {
    if (!value) record('native-close');
    open.set.call(f.menu, value);
  } });
  return records;
}

for (const delivery of applicable) {
  for (const duration of [0, 45]) for (const scenario of cases) {
    test(`${delivery}: ${scenario.name}, close duration ${duration}ms`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const document = f.dom.window.document;
        f.menu = f.root.querySelector('[data-mwp-menu]');
        f.trigger = f.root.querySelector('[data-mwp-trigger]');
        f.panel = f.root.querySelector('[data-mwp-panel]');
        f.link = f.panel.querySelector('a');
        f.outside = document.querySelector('#outside');
        const submenu = f.root.querySelector('[data-mwp-submenu]');
        const nested = submenu.querySelector('a');
        f.span = document.createElement('span');
        f.span.textContent = 'Nested label';
        nested.append(f.span);
        f.root.dataset.motion = 'fade';
        f.menu.dataset.mwpOpenDuration = '0ms';
        f.menu.dataset.mwpCloseDuration = `${duration}ms`;
        f.menu.dataset.closeOnLink = 'true';
        f.menu.dataset.closeOnOutside = 'true';
        const navbar = f.create();
        f.api = f.root.mwpNavbarLight;
        await change(f, () => f.api.open(), 'opened');
        submenu.open = true;
        (scenario.outside ? f.outside : scenario.nested ? nested : f.link).focus();
        const expected = scenario.outside && !scenario.force ? f.outside : f.trigger;
        const records = watchClosing(f);
        const focusStates = [];
        f.trigger.addEventListener('focus', () => focusStates.push({
          hidden: f.panel.getAttribute('aria-hidden'), inert: f.panel.inert, open: f.menu.open,
          state: f.root.dataset.state
        }));
        const scheduled = [];
        const setTimeout = f.dom.window.setTimeout.bind(f.dom.window);
        f.dom.window.setTimeout = (callback, delay, ...args) => {
          scheduled.push(delay);
          return setTimeout(callback, delay, ...args);
        };
        const closed = event(f.root, 'mwp-nav:closed');
        closed.catch(() => {}); // A failed ordering assertion closes the fixture early.
        const closing = event(f.root, 'mwp-nav:close');
        scenario.action(f);
        await closing;
        assert.equal(f.root.dataset.state, 'closing');
        assert.equal(document.activeElement, expected, 'focus is safe when close is announced');
        assert.equal(f.panel.getAttribute('aria-hidden'), 'true');
        assert.equal(f.panel.inert, true);
        assert.equal(f.menu.open, false);
        assert.equal(scheduled[0], duration, 'configured closing wait is retained');
        assert.equal(navbar.motionDuration('open'), 0, 'separate opening duration is retained');
        assert.equal(navbar.motionDuration('close'), duration);
        const closingRecordsLength = records.length;
        if (scenario.moveDuringClose) f.outside.focus();
        await closed;
        const finalFocus = scenario.moveDuringClose ? f.outside : expected;
        assert.equal(document.activeElement, finalFocus, 'final focus remains safe');
        assert.equal(f.root.dataset.state, 'closed');
        assert.equal(submenu.open, false);
        for (const kind of ['state:closing', 'state:closed', 'aria-hidden', 'inert', 'native-close']) {
          assert.ok(records.some(record => record.kind === kind), `observed ${kind}`);
        }
        for (const [index, record] of records.entries()) {
          // External native closure precedes our toggle handler; runtime hiding
          // still has to evacuate focus before its first state/ARIA/inert write.
          if (scenario.native && record.kind === 'native-close') continue;
          const wanted = index >= closingRecordsLength ? finalFocus : expected;
          assert.equal(record.active, wanted, `focus before ${record.kind}`);
        }
        if (expected === f.trigger) {
          assert.deepEqual(focusStates, [{ hidden: 'false', inert: false, open: !scenario.native, state: 'open' }],
            'trigger receives focus before runtime hiding, and before enhanced native closure');
        } else assert.deepEqual(focusStates, [], 'outside focus is never taken');
      } finally { f.close(); }
    });
  }

  for (const duration of [0, 45]) for (const option of ['closeOnLink', 'closeOnOutside']) {
    test(`${delivery}: disabled ${option} preserves focus and open state, duration ${duration}ms`, async () => {
      const f = runtimeFixture(delivery);
      try {
        const menu = f.root.querySelector('[data-mwp-menu]');
        const panel = f.root.querySelector('[data-mwp-panel]');
        const submenu = f.root.querySelector('[data-mwp-submenu]');
        const nested = submenu.querySelector('a');
        const span = f.dom.window.document.createElement('span');
        nested.append(span);
        f.root.dataset.motion = 'fade';
        menu.dataset.mwpOpenDuration = '0ms';
        menu.dataset.mwpCloseDuration = `${duration}ms`;
        menu.dataset[option] = 'false';
        const navbar = f.create();
        await change(f, () => navbar.open(), 'opened');
        submenu.open = true;
        nested.focus();
        const events = [];
        for (const name of ['close', 'closed']) f.root.addEventListener(`mwp-nav:${name}`, () => events.push(name));
        if (option === 'closeOnLink') span.click();
        else f.dom.window.document.querySelector('#outside').click();
        await tick(f);
        assert.equal(menu.open, true);
        assert.equal(f.root.dataset.state, 'open');
        assert.equal(panel.getAttribute('aria-hidden'), 'false');
        assert.equal(panel.inert, false);
        assert.equal(f.dom.window.document.activeElement, nested);
        assert.deepEqual(events, []);
        assert.equal(f.root.getAttribute(option === 'closeOnLink' ? 'data-close-on-link' : 'data-close-on-outside'), 'false');
      } finally { f.close(); }
    });
  }
}
