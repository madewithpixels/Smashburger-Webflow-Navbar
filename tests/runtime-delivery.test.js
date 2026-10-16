import assert from 'node:assert/strict';
import test from 'node:test';
import { deliveries, runtimeFixture, event, change } from '../scripts/runtime-test-fixture.mjs';

// Advance only the enhancement's window timers. Native Details toggle delivery
// remains asynchronous in jsdom; change() waits for those real notifications.
function timedMotionFixture(delivery, motion) {
  const f = runtimeFixture(delivery);
  f.root.dataset.motion = motion;
  f.root.style.setProperty('--mwp-nav-duration-open', '280ms');
  f.root.style.setProperty('--mwp-nav-duration-close', '220ms');
  const navbar = f.create();
  const { menu, trigger, panel, backdrop } = navbar;
  const document = f.dom.window.document;
  const api = f.root.mwpNavbarLight;
  let now = 0, nextId = 1;
  const timers = new Map();
  f.dom.window.setTimeout = (callback, delay) => {
    const id = nextId++;
    timers.set(id, { at: now + Number(delay), callback });
    return id;
  };
  f.dom.window.clearTimeout = id => timers.delete(id);
  function advance(ms) {
    const end = now + ms;
    for (;;) {
      const next = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
      if (!next || next[1].at > end) break;
      const [id, task] = next;
      timers.delete(id);
      now = task.at;
      task.callback();
    }
    now = end;
  }
  const events = [], bubbled = [];
  for (const name of ['open', 'opened', 'close', 'closed']) {
    f.root.addEventListener(`mwp-nav:${name}`, e => events.push({
      name, at: now, event: e,
      state: [f.root, menu, panel, backdrop].map(node => node.dataset.state),
      nativeOpen: menu.open, expanded: trigger.getAttribute('aria-expanded'),
      hidden: panel.getAttribute('aria-hidden'), inert: panel.inert
    }), { capture: true });
    document.addEventListener(`mwp-nav:${name}`, e => bubbled.push(e));
  }
  const focus = [];
  document.addEventListener('focusin', e => focus.push(e.target));
  function state(expected) {
    const open = ['opening', 'open'].includes(expected);
    assert.equal(menu.open, open);
    for (const node of [f.root, menu, panel, backdrop]) assert.equal(node.dataset.state, expected);
    assert.equal(api.state, expected);
    assert.equal(trigger.getAttribute('aria-expanded'), String(open));
    assert.equal(panel.getAttribute('aria-hidden'), String(!open));
    assert.equal(panel.inert, !open);
    assert.equal(trigger.getAttribute('aria-controls'), panel.id);
  }
  function sequence(expected) {
    assert.deepEqual(events.map(e => e.name), expected);
    assert.deepEqual(bubbled, events.map(e => e.event), 'Every lifecycle event reaches the owner document once');
    for (const { name, event: e, state: states, nativeOpen, expanded, hidden, inert } of events) {
      const state = { open: 'opening', opened: 'open', close: 'closing', closed: 'closed' }[name];
      const open = name === 'open' || name === 'opened';
      assert.equal(e.bubbles, true);
      assert.equal(e.target, f.root);
      assert.deepEqual(Object.keys(e.detail).sort(), ['navbar', 'root', 'menu', 'trigger', 'panel', 'state'].sort());
      for (const [key, value] of Object.entries({ navbar, root: f.root, menu, trigger, panel, state })) {
        assert.equal(e.detail[key], value, `${name} payload ${key}`);
      }
      assert.deepEqual(states, Array(4).fill(state));
      assert.equal(nativeOpen, open);
      assert.equal(expanded, String(open));
      assert.equal(hidden, String(!open));
      assert.equal(inert, !open);
    }
  }
  return { ...f, navbar, api, menu, panel, trigger, document, events, focus,
    outside: document.querySelector('#outside'), first: panel.querySelector('a'),
    advance, state, sequence };
}

// These are candidate-contract checks. Ordinary npm test retains its existing
// historical-release checks below, while still exercising maintained source here.
const motionDeliveries = deliveries.filter(delivery => delivery === 'source' || process.env.SMASHBURGER_CANDIDATE);
for (const delivery of motionDeliveries) for (const motion of ['dropdown', 'custom']) {
  test(`${delivery} ${motion}: timed public open/close calls are idempotent`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.trigger.focus();
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      f.state('opening');
      f.advance(100);
      f.api.open(); f.api.open({ focusFirst: false });
      f.advance(179);
      f.state('opening'); f.sequence(['open']);
      assert.equal(f.document.activeElement, f.trigger);
      f.advance(1);
      f.state('open'); f.sequence(['open', 'opened']);
      assert.equal(f.document.activeElement, f.first);
      f.api.open();
      await change(f, () => f.api.close({ focusTrigger: true }), 'close');
      f.state('closing');
      f.advance(100);
      f.api.close(); f.api.close({ focusTrigger: true });
      f.advance(119);
      f.state('closing'); f.sequence(['open', 'opened', 'close']);
      f.advance(1);
      f.state('closed');
      f.api.close(); f.advance(1000);
      f.sequence(['open', 'opened', 'close', 'closed']);
      assert.deepEqual(f.events.map(e => e.at), [0, 280, 280, 500]);
      assert.deepEqual(f.focus, [f.trigger, f.first, f.trigger]);
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: closing cancels opening completion and queued focus`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.trigger.focus();
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      f.advance(40);
      await change(f, () => f.api.close({ focusTrigger: true }), 'close');
      f.state('closing');
      f.outside.focus();
      f.advance(219); f.sequence(['open', 'close']); f.state('closing');
      f.advance(1); f.state('closed');
      f.advance(1000); // Past the cancelled opening deadline as well.
      f.sequence(['open', 'close', 'closed']);
      assert.deepEqual(f.events.map(e => e.at), [0, 40, 260]);
      assert.deepEqual(f.focus, [f.trigger, f.outside]);
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: reopening cancels closing completion and defers fresh focus`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.trigger.focus();
      await change(f, () => f.api.open(), 'open');
      f.advance(280);
      await change(f, () => f.api.close({ focusTrigger: true }), 'close');
      f.advance(40);
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      f.state('opening');
      f.advance(180); // The superseded close would complete here.
      f.state('opening'); f.sequence(['open', 'opened', 'close', 'open']);
      assert.equal(f.document.activeElement, f.trigger);
      f.advance(99); f.state('opening');
      f.advance(1); f.state('open');
      assert.equal(f.document.activeElement, f.first);
      f.advance(1000);
      f.sequence(['open', 'opened', 'close', 'open', 'opened']);
      assert.deepEqual(f.events.map(e => e.at), [0, 280, 280, 320, 600]);
      assert.deepEqual(f.focus, [f.trigger, f.first]);
    } finally { f.close(); }
  });

  for (const closeWith of ['public', 'native']) {
    test(`${delivery} ${motion}: ${closeWith} cancellation discards focus before native reopening`, async () => {
      const f = timedMotionFixture(delivery, motion);
      try {
        f.outside.focus();
        await change(f, () => f.api.open({ focusFirst: true }), 'open');
        f.advance(40);
        await change(f, () => {
          if (closeWith === 'public') f.api.close();
          else f.menu.open = false;
        }, 'close');
        f.advance(40);
        await change(f, () => { f.menu.open = true; }, 'open');
        f.advance(180); // Old close deadline.
        f.state('opening');
        f.advance(20); // Old opening deadline.
        f.state('opening');
        f.sequence(['open', 'close', 'open']);
        f.advance(80); f.state('open');
        f.advance(1000);
        f.sequence(['open', 'close', 'open', 'opened']);
        assert.deepEqual(f.events.map(e => e.at), [0, 40, 80, 360]);
        assert.deepEqual(f.focus, [f.outside], 'Cancelled focusFirst must not survive into a later native opening');
      } finally { f.close(); }
    });
  }

  test(`${delivery} ${motion}: repeated public toggles settle only the final transition`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.outside.focus();
      // Native Details coalesces same-turn attribute changes to the final state.
      await change(f, () => {
        f.api.open(); f.api.open(); f.api.close(); f.api.close(); f.api.toggle();
      }, 'open');
      f.advance(40);
      await change(f, () => f.api.toggle({ focusTrigger: true }), 'close');
      f.advance(40);
      await change(f, () => f.api.toggle({ focusFirst: true }), 'open');
      f.advance(40);
      await change(f, () => {
        f.api.toggle(); f.api.open(); f.api.toggle(); f.api.close(); f.api.close();
      }, 'close');
      f.advance(219); f.state('closing');
      f.sequence(['open', 'close', 'open', 'close']);
      f.advance(1); f.state('closed');
      f.advance(1000);
      f.sequence(['open', 'close', 'open', 'close', 'closed']);
      assert.deepEqual(f.events.map(e => e.at), [0, 40, 80, 120, 340]);
      assert.deepEqual(f.focus, [f.outside, f.trigger]);
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: an opened listener can close without later focus theft`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.outside.focus();
      f.root.addEventListener('mwp-nav:opened', () => f.api.close({ focusTrigger: true }), { once: true });
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      await change(f, () => f.advance(280), 'close');
      f.state('closing');
      f.advance(220); f.state('closed');
      f.advance(1000);
      f.sequence(['open', 'opened', 'close', 'closed']);
      assert.deepEqual(f.focus, [f.outside, f.trigger], 'Closing in a lifecycle listener must cancel opening focus');
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: closure at the opening deadline prevents stale completion before toggle delivery`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.outside.focus();
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      f.advance(279);
      await change(f, () => {
        f.api.close();
        f.advance(1); // Native toggle has not been delivered yet.
        f.sequence(['open']);
        assert.deepEqual(f.focus, [f.outside]);
      }, 'close');
      f.advance(220); f.state('closed');
      f.advance(1000); f.sequence(['open', 'close', 'closed']);
      assert.deepEqual(f.focus, [f.outside]);
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: reopening at the closing deadline prevents stale completion before toggle delivery`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      await change(f, () => f.api.open(), 'open');
      f.advance(280);
      await change(f, () => f.api.close(), 'close');
      f.advance(219);
      await change(f, () => {
        f.api.open();
        f.advance(1);
        f.sequence(['open', 'opened', 'close']);
      }, 'open');
      f.advance(280); f.state('open');
      f.advance(1000); f.sequence(['open', 'opened', 'close', 'open', 'opened']);
      assert.deepEqual(f.focus, []);
    } finally { f.close(); }
  });

  test(`${delivery} ${motion}: same-turn close and native reopen discard cancelled focus`, async () => {
    const f = timedMotionFixture(delivery, motion);
    try {
      f.outside.focus();
      await change(f, () => f.api.open({ focusFirst: true }), 'open');
      f.advance(40);
      await change(f, () => { f.api.close(); f.menu.open = true; }, 'open');
      f.advance(280); f.state('open');
      f.advance(1000); f.sequence(['open', 'open', 'opened']);
      assert.deepEqual(f.focus, [f.outside]);
    } finally { f.close(); }
  });
}

for (const delivery of deliveries) {
  test(`${delivery}: missing component CSS leaves native navigation accessible`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 stylesheet-failure defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, () => {
    const f = runtimeFixture(delivery, { includeCss: false });
    try {
      const panel = f.root.querySelector('[data-mwp-panel]');
      const menu = f.root.querySelector('[data-mwp-menu]');
      assert.equal(f.dom.window.initNavbarLight().length, 0);
      const navbar = f.create();
      assert.equal(f.root.hasAttribute('data-mwp-ready'), false);
      assert.equal(panel.getAttribute('aria-hidden'), null);
      assert.equal(panel.hasAttribute('inert'), false);
      assert.equal(panel.querySelector('a').tabIndex, 0);
      menu.open = true;
      assert.equal(menu.open, true);
      assert.equal(panel.querySelector('a').textContent, 'First');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: collapse boundaries and open resize preserve accessible state`, async () => {
    const f = runtimeFixture(delivery);
    try {
      const thresholds = { never: -Infinity, tablet: 991, 'mobile-landscape': 767, 'mobile-portrait': 479, always: Infinity };
      for (const [collapse, threshold] of Object.entries(thresholds)) {
        f.root.dataset.collapse = collapse;
        for (const width of [320, 393, 478, 479, 480, 766, 767, 768, 990, 991, 992, 1280, 2060]) {
          f.resize(width);
          const navbar = f.create();
          const panel = f.root.querySelector('[data-mwp-panel]');
          assert.equal(f.root.dataset.mwpCollapsed, String(width <= threshold), `${collapse} at ${width}`);
          assert.equal(panel.inert, width <= threshold);
          assert.equal(panel.getAttribute('aria-hidden'), String(width <= threshold));
          navbar.destroy();
        }
      }
      f.root.dataset.collapse = 'tablet'; f.resize(820);
      const navbar = f.create();
      await change(f, () => navbar.open(), 'opened');
      f.resize(1280);
      assert.equal(f.root.dataset.state, 'expanded');
      f.resize(393);
      assert.equal(f.root.querySelector('[data-mwp-menu]').open, false);
      assert.equal(f.root.querySelector('[data-mwp-panel]').inert, true);
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: all 35 layout/motion combinations open and Escape-close`, async () => {
    const f = runtimeFixture(delivery);
    try {
      for (const layout of ['dropdown', 'full-width', 'left', 'right', 'overlay']) {
        for (const motion of ['dropdown', 'left', 'right', 'up', 'fade', 'none', 'custom']) {
          f.root.dataset.layout = layout; f.root.dataset.motion = motion;
          f.root.style.setProperty('--mwp-nav-duration-open', '1ms');
          f.root.style.setProperty('--mwp-nav-duration-close', '1ms');
          const navbar = f.create();
          await change(f, () => navbar.open({ focusFirst: true }), 'opened');
          assert.equal(f.root.querySelector('[data-mwp-trigger]').getAttribute('aria-expanded'), 'true');
          assert.equal(f.root.querySelector('[data-mwp-panel]').inert, false);
          assert.equal(f.dom.window.document.activeElement.textContent, 'First');
          assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked === 'true', ['left', 'right', 'overlay'].includes(layout));
          await change(f, () => f.dom.window.document.dispatchEvent(new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true })), 'closed');
          assert.equal(f.root.dataset.state, 'closed');
          assert.equal(f.root.querySelector('[data-mwp-panel]').inert, true);
          assert.equal(f.root.querySelector('[data-mwp-panel]').getAttribute('aria-hidden'), 'true');
          assert.equal(f.dom.window.document.activeElement, f.root.querySelector('[data-mwp-trigger]'));
          assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked, undefined);
          navbar.destroy();
        }
      }
    } finally { f.close(); }
  });

  test(`${delivery}: nested Escape, close controls, disabled closing and repeat initialisation`, async () => {
    const f = runtimeFixture(delivery);
    try {
      const navbar = f.create();
      assert.equal(f.dom.window.initNavbarLight().length, 0);
      await change(f, () => navbar.open(), 'opened');
      const submenu = f.root.querySelector('[data-mwp-submenu]'); submenu.open = true;
      submenu.querySelector('a').focus();
      const escape = () => f.dom.window.document.dispatchEvent(new f.dom.window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true, cancelable: true }));
      escape();
      assert.equal(submenu.open, false); assert.equal(f.root.dataset.state, 'open');
      assert.equal(f.dom.window.document.activeElement, submenu.querySelector('summary'));
      await change(f, escape, 'closed');
      for (const selector of ['[data-mwp-backdrop]', '[data-mwp-panel] > a', '#outside']) {
        await change(f, () => navbar.open(), 'opened');
        await change(f, () => f.dom.window.document.querySelector(selector).click(), 'closed');
      }
      f.root.dataset.closeOnOutside = 'false'; f.root.dataset.closeOnLink = 'false';
      await change(f, () => navbar.open(), 'opened');
      f.dom.window.document.querySelector('#outside').click(); f.root.querySelector('a').click();
      assert.equal(f.root.querySelector('[data-mwp-menu]').open, true);
      navbar.destroy(); navbar.destroy();
      assert.equal(f.root.mwpNavbarLight, undefined);
      assert.equal(f.dom.window.document.documentElement.dataset.mwpScrollLocked, undefined);
      assert.equal(f.dom.window.initNavbarLight().length, 1);
    } finally { f.close(); }
  });

  test(`${delivery}: multiple overlay navbars keep page scrolling locked until all close`, {
    // Confirmed in all three immutable v0.2.6 deliveries; source and candidate
    // builds must still pass these exact assertions.
    todo: delivery !== 'source' && !process.env.SMASHBURGER_CANDIDATE && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 overlapping-menu scroll-lock defect; immutable artifacts retained. Candidate assertions remain mandatory.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.layout = 'overlay';
      f.root.dataset.motion = 'none';
      const secondRoot = f.root.cloneNode(true);
      secondRoot.querySelector('[data-mwp-panel]').removeAttribute('id');
      f.root.after(secondRoot);
      const first = f.create();
      const second = new f.dom.window.NavbarLight(secondRoot);
      const html = f.dom.window.document.documentElement;

      await change(f, () => first.open(), 'opened');
      const secondOpened = event(secondRoot, 'mwp-nav:opened');
      second.open();
      await secondOpened;
      assert.equal(html.dataset.mwpScrollLocked, 'true');
      assert.equal(html.style.overflow, 'hidden');

      await change(f, () => first.close(), 'closed');
      assert.equal(html.dataset.mwpScrollLocked, 'true');
      assert.equal(html.style.overflow, 'hidden');

      const secondClosed = event(secondRoot, 'mwp-nav:closed');
      second.close();
      await secondClosed;
      assert.equal(html.dataset.mwpScrollLocked, undefined);
      assert.equal(html.style.overflow, '');
      first.destroy(); second.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: both icon modes calculate odd/even custom geometry`, () => {
    const f = runtimeFixture(delivery);
    try {
      for (const mode of ['2', '3']) for (const height of [1, 2, 3, 4]) for (const gap of [5, 7, 9]) {
        f.root.dataset.iconLines = mode;
        f.root.querySelector('[data-mwp-icon]').style.rowGap = `${gap}px`;
        f.root.querySelectorAll('[data-mwp-line]').forEach(line => { line.style.height = `${height}px`; });
        const navbar = f.create();
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-icon-auto-shift'), `${height + gap}px`);
        navbar.destroy();
      }
    } finally { f.close(); }
  });

  test(`${delivery}: reduced motion removes waits in every motion mode`, () => {
    const f = runtimeFixture(delivery, { reducedMotion: true });
    try {
      for (const motion of ['dropdown', 'left', 'right', 'up', 'fade', 'none', 'custom']) {
        f.root.dataset.motion = motion;
        f.root.style.setProperty('--mwp-nav-duration-open', '280ms');
        f.root.style.setProperty('--mwp-nav-duration-close', '220ms');
        const navbar = f.create();
        assert.equal(navbar.motionDuration('open'), 0); assert.equal(navbar.motionDuration('close'), 0);
        navbar.destroy();
      }
    } finally { f.close(); }
  });

  test(`${delivery}: expanding during an opening transition cancels the collapsed timer`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '40ms');
      const navbar = f.create();
      const opening = event(f.root, 'mwp-nav:open'); navbar.open(); await opening;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.equal(f.root.dataset.state, 'expanded');
      assert.equal(f.root.querySelector('[data-mwp-trigger]').getAttribute('aria-expanded'), 'false');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: breakpoint expansion cancels queued first-link focus`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '40ms');
      const navbar = f.create();
      const opening = event(f.root, 'mwp-nav:open');
      navbar.open({ focusFirst: true }); await opening;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.notEqual(f.dom.window.document.activeElement, f.root.querySelector('[data-mwp-panel] a'));
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: collapsing to mobile restores focus before hiding desktop links`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 focus-on-hidden-panel defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.resize(1280);
      const navbar = f.create();
      const trigger = f.root.querySelector('[data-mwp-trigger]');
      const panel = f.root.querySelector('[data-mwp-panel]');
      panel.querySelector('a').focus();
      f.resize(800);
      assert.equal(f.dom.window.document.activeElement, trigger);
      assert.equal(panel.getAttribute('aria-hidden'), 'true');
      assert.equal(panel.inert, true);
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: expanding during a closing transition cancels hiding and preserves scroll styles`, {
    todo: delivery !== 'source' && !process.env.SMASHBURGER_FRESH_BUILD
      ? 'Known v0.2.6 defect; immutable artifacts retained. Source fix needs a new release.' : false
  }, async () => {
    const f = runtimeFixture(delivery);
    try {
      f.root.dataset.collapse = 'tablet'; f.root.dataset.layout = 'overlay'; f.root.dataset.motion = 'fade';
      f.root.style.setProperty('--mwp-nav-duration-open', '1ms');
      f.root.style.setProperty('--mwp-nav-duration-close', '40ms');
      const html = f.dom.window.document.documentElement;
      html.style.overflow = 'clip'; html.style.paddingRight = '13px';
      const navbar = f.create();
      await change(f, () => navbar.open(), 'opened');
      const closing = event(f.root, 'mwp-nav:close'); navbar.close(); await closing;
      f.resize(1280);
      await new Promise(resolve => setTimeout(resolve, 80));
      assert.equal(f.root.dataset.state, 'expanded');
      assert.equal(f.root.querySelector('[data-mwp-panel]').inert, false);
      assert.equal(f.root.querySelector('[data-mwp-panel]').getAttribute('aria-hidden'), 'false');
      assert.equal(html.style.overflow, 'clip'); assert.equal(html.style.paddingRight, '13px');
      navbar.destroy();
    } finally { f.close(); }
  });

  test(`${delivery}: CSS-only Always fallback reveals native sibling links without enhancement`, () => {
    const f = runtimeFixture(delivery, { javascript: false });
    try {
      const panel = f.root.querySelector('[data-mwp-panel]');
      const menu = f.root.querySelector('[data-mwp-menu]');
      const visible = () => f.dom.window.getComputedStyle(panel).visibility;
      assert.equal(f.root.mwpNavbarLight, undefined);
      assert.equal(f.root.hasAttribute('data-mwp-ready'), false);
      assert.equal(visible(), 'hidden');
      menu.open = true;
      assert.equal(visible(), 'visible');
      assert.equal(panel.querySelector('a').textContent, 'First');
      menu.open = false;
      assert.equal(visible(), 'hidden');
      assert.equal(f.root.querySelector('[data-mwp-trigger]').hasAttribute('aria-expanded'), false);
    } finally { f.close(); }
  });
}

test('maintained source icon geometry centres two- and three-line opens across simulated pixel ratios', () => {
  const f = runtimeFixture('source');
  try {
    const css = f.dom.window.document.querySelector('style').textContent.replace(/\s+/g, ' ');
    assert.ok(css.includes('[data-mwp-menu][open] [data-mwp-line]:nth-child(1) { transform: translateY(var(--mwp-nav-icon-shift, var(--mwp-nav-icon-auto-shift, 0.4375rem))) rotate(45deg); }'));
    assert.ok(css.includes('[data-mwp-menu][open] [data-mwp-line]:nth-child(3) { transform: translateY(calc(var(--mwp-nav-icon-shift, var(--mwp-nav-icon-auto-shift, 0.4375rem)) * -1)) rotate(-45deg); }'));
    assert.ok(css.includes('[data-mwp-navbar][data-icon-lines="2"] [data-mwp-menu][open] [data-mwp-line]:nth-child(1) { transform: translateY(calc(var(--mwp-nav-icon-shift, var(--mwp-nav-icon-auto-shift, 0.4375rem)) * 0.5)) rotate(45deg); }'));
    assert.ok(css.includes('[data-mwp-navbar][data-icon-lines="2"] [data-mwp-menu][open] [data-mwp-line]:nth-child(3) { transform: translateY(calc(var(--mwp-nav-icon-shift, var(--mwp-nav-icon-auto-shift, 0.4375rem)) * -0.5)) rotate(-45deg); }'));
    const physicalPixel = (cssPixels, ratio) => Math.round(cssPixels * ratio);
    for (const mode of ['2', '3']) for (const height of [1, 2, 3, 4])
      for (const gap of [5, 7, 9]) for (const ratio of [1, 1.25, 1.5, 2, 3]) {
        f.root.dataset.iconLines = mode;
        const icon = f.root.querySelector('[data-mwp-icon]');
        icon.style.rowGap = `${gap}px`;
        f.root.querySelectorAll('[data-mwp-line]').forEach(line => { line.style.height = `${height}px`; });
        const navbar = f.create();

        const step = height + gap;
        const expectedShift = mode === '2' ? step / 2 : step;
        assert.equal(f.root.style.getPropertyValue('--mwp-nav-icon-auto-shift'), `${step}px`,
          `${mode} lines, ${height}px bars, ${gap}px gap, ${ratio}x`);

        // The middle row disappears in two-line mode, leaving one row gap;
        // three-line mode spans two. Apply the source CSS translation rule,
        // then map both centres onto the simulated physical-pixel grid.
        const rowIntervals = mode === '2' ? 1 : 2;
        const firstCentre = height / 2 + expectedShift;
        const lastCentre = height / 2 + rowIntervals * step - expectedShift;
        assert.equal(physicalPixel(firstCentre, ratio), physicalPixel(lastCentre, ratio),
          `${mode} lines, ${height}px bars, ${gap}px gap, ${ratio}x`);
        navbar.destroy();
      }
  } finally { f.close(); }
});
