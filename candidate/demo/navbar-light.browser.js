const ROOT_SELECTOR = '[data-mwp-navbar]';

const COLLAPSE_QUERIES = {
  tablet: '(max-width: 991px)',
  'mobile-landscape': '(max-width: 767px)',
  'mobile-portrait': '(max-width: 479px)'
};

const TRUE_VALUES = new Set(['', '1', 'true', 'yes', 'on']);
const CSS_READY_PROPERTY = '--mwp-nav-css-ready';
const scrollLocks = new WeakMap();

function acquireScrollLock(document) {
  let lock = scrollLocks.get(document);
  if (!lock) {
    const root = document.documentElement;
    const scrollbar = document.defaultView.innerWidth - root.clientWidth;
    lock = {
      count: 0,
      overflow: root.style.overflow,
      paddingRight: root.style.paddingRight
    };
    scrollLocks.set(document, lock);
    root.dataset.mwpScrollLocked = 'true';
    root.style.overflow = 'hidden';
    if (scrollbar > 0) root.style.paddingRight = `${scrollbar}px`;
  }
  lock.count += 1;
}

function releaseScrollLock(document) {
  const lock = scrollLocks.get(document);
  if (!lock) return;
  lock.count -= 1;
  if (lock.count > 0) return;

  const root = document.documentElement;
  root.style.overflow = lock.overflow;
  root.style.paddingRight = lock.paddingRight;
  delete root.dataset.mwpScrollLocked;
  scrollLocks.delete(document);
}

function navbarStylesAvailable(root) {
  const view = root?.ownerDocument?.defaultView;
  if (!view?.getComputedStyle) return true;
  return view.getComputedStyle(root).getPropertyValue(CSS_READY_PROPERTY).trim() === '1';
}

function booleanAttribute(element, name, fallback) {
  if (!element.hasAttribute(name)) return fallback;
  return TRUE_VALUES.has(String(element.getAttribute(name)).trim().toLowerCase());
}

function validCss(property, value) {
  return Boolean(value && globalThis.CSS?.supports?.(property, value));
}

function milliseconds(value, fallback = 0) {
  const input = String(value || '').trim();
  if (!input) return fallback;
  if (input.endsWith('ms')) return Number.parseFloat(input) || fallback;
  if (input.endsWith('s')) return (Number.parseFloat(input) || 0) * 1000;
  return Number.parseFloat(input) || fallback;
}

function ensureId(element, prefix) {
  if (element.id) return element.id;
  const random = globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
  element.id = `${prefix}-${random}`;
  return element.id;
}

// Restore owned fields; preserve content and unrelated edits.
function snapshotEnhancement(navbar) {
  const { root, menu, trigger, panel, backdrop, items, submenus } = navbar;
  const data = [
    [root, ['layout', 'motion', 'align', 'iconLines', 'mwpReady', 'mwpCollapsed', 'state']],
    [menu, ['state']], [panel, ['state']], [backdrop, ['state']]
  ].flatMap(([element, names]) => element ? names.map(name => [element.dataset, name, element.dataset[name]]) : []);
  const attributes = [
    [root, ['data-focus-first', 'data-close-on-outside', 'data-close-on-link', 'data-scroll-lock']],
    [menu, ['open']],
    [trigger, ['aria-controls', 'aria-haspopup', 'aria-expanded']],
    [panel, ['id', 'aria-hidden', 'inert']],
    ...submenus.map(submenu => [submenu, ['open']])
  ].flatMap(([element, names]) => element ? names.map(name => [element, name, element.getAttribute(name)]) : []);
  const styles = [
    [root, ['--mwp-nav-duration-open', '--mwp-nav-duration-close', '--mwp-nav-distance',
      '--mwp-nav-ease', '--mwp-nav-panel-width', '--mwp-nav-stagger', '--mwp-nav-icon-duration',
      '--mwp-nav-submenu-icon-duration', '--mwp-nav-submenu-icon-ease',
      '--mwp-nav-submenu-icon-rotation', '--mwp-nav-icon-auto-shift']],
    ...items.map(item => [item, ['--mwp-item-index']])
  ].map(([element, names]) => [element, element.hasAttribute('style'), names.map(name =>
    [name, element.style.getPropertyValue(name), element.style.getPropertyPriority(name)])]);
  const inert = panel.inert;
  const ownInert = Object.hasOwn(panel, 'inert');
  const handles = [[root, 'mwpNavbarLight'], [menu, 'mwpNav']]
    .map(([element, name]) => [element, name, Object.getOwnPropertyDescriptor(element, name)]);

  return () => {
    // inert reflects an attribute in browsers; DOM test hosts may use an expando.
    if (ownInert || inert !== undefined) panel.inert = inert;
    else delete panel.inert;
    for (const [dataset, name, value] of data) {
      if (value === undefined) delete dataset[name];
      else dataset[name] = value;
    }
    for (const [element, name, value] of attributes) {
      if (value === null) element.removeAttribute(name);
      else element.setAttribute(name, value);
    }
    for (const [element, hadStyle, properties] of styles) {
      for (const [name, value, priority] of properties) {
        if (value) element.style.setProperty(name, value, priority);
        else element.style.removeProperty(name);
      }
      if (!hadStyle && !element.style.cssText) element.removeAttribute('style');
    }
    for (const [element, name, descriptor] of handles) {
      if (descriptor) Object.defineProperty(element, name, descriptor);
      else delete element[name];
    }
  };
}

class NavbarLight {
  constructor(root) {
    this.root = root;
    this.menu = root.querySelector('[data-mwp-menu], [data-mwp-css-nav]');
    this.trigger = this.menu?.querySelector('[data-mwp-trigger], summary');
    this.icon = this.trigger?.querySelector('[data-mwp-icon]');
    this.panel = root.querySelector('[data-mwp-panel], .sb-nav-panel');
    this.backdrop = root.querySelector('[data-mwp-backdrop]');
    this.items = [...root.querySelectorAll('[data-mwp-item]')];
    this.submenus = [...root.querySelectorAll('[data-mwp-submenu]')];
    this.mediaQuery = null;
    this.stateTimer = null;
    this.lockSnapshot = null;
    this.focusOnOpened = false;
    this.destroyed = false;
    this.onDocumentClick = this.onDocumentClick.bind(this);
    this.onBackdropClick = this.onBackdropClick.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
    this.onPanelClick = this.onPanelClick.bind(this);
    this.onToggle = this.onToggle.bind(this);
    this.onBreakpointChange = this.onBreakpointChange.bind(this);
    this.syncIconGeometry = this.syncIconGeometry.bind(this);

    if (!this.menu || !this.trigger || !this.panel || !navbarStylesAvailable(this.root)) return;
    this.restoreEnhancement = snapshotEnhancement(this);
    this.configure();
    this.bind();
    this.onBreakpointChange(true);
  }

  configure() {
    const config = new Map(
      [...this.root.querySelectorAll('[data-mwp-config-value]')]
        .map((element) => [element.dataset.mwpConfigValue, element.textContent.trim()])
    );
    const value = (key, fallback = '') => config.get(key) || fallback;
    const cleanPreset = (input, prefix) => String(input || '').trim().replace(prefix, '');

    this.root.dataset.layout = cleanPreset(this.menu.dataset.mwpLayout || this.root.dataset.layout || value('layout', 'dropdown'), 'mwp-layout-');
    this.root.dataset.motion = cleanPreset(this.menu.dataset.mwpMotion || this.root.dataset.motion || value('motion', 'dropdown'), 'mwp-motion-');
    this.root.dataset.align = this.menu.dataset.mwpAlign || this.root.dataset.align || value('alignment', 'right');
    this.root.dataset.iconLines = this.menu.dataset.mwpIconLines || this.root.dataset.iconLines || value('iconLines', '3');
    this.root.setAttribute('data-focus-first', this.menu.dataset.focusFirst || this.root.getAttribute('data-focus-first') || value('focusFirst', 'false'));
    this.root.setAttribute('data-close-on-outside', this.menu.dataset.closeOnOutside || this.root.getAttribute('data-close-on-outside') || value('closeOutside', 'true'));
    this.root.setAttribute('data-close-on-link', this.menu.dataset.closeOnLink || this.root.getAttribute('data-close-on-link') || value('closeLink', 'true'));
    this.root.setAttribute('data-scroll-lock', this.menu.dataset.scrollLock || this.root.getAttribute('data-scroll-lock') || value('scrollLock', 'auto'));

    const panelId = ensureId(this.panel, 'mwp-navbar-panel');
    this.trigger.setAttribute('aria-controls', panelId);
    this.trigger.setAttribute('aria-haspopup', 'true');

    const rootStyle = this.root.style;
    const duration = this.menu.dataset.mwpDuration || this.root.dataset.duration;
    const openDuration = this.menu.dataset.mwpOpenDuration || this.root.dataset.openDuration || duration;
    const closeDuration = this.menu.dataset.mwpCloseDuration || this.root.dataset.closeDuration || value('closeDuration') || duration;
    const distance = this.menu.dataset.mwpDistance || this.root.dataset.distance;
    const easing = this.menu.dataset.mwpEase || this.menu.dataset.mwpEasing || this.root.dataset.easing;
    const panelWidth = this.menu.dataset.mwpPanelWidth || this.root.dataset.panelWidth || value('panelWidth');
    const stagger = this.menu.dataset.mwpStagger || this.root.dataset.stagger || value('stagger');
    const iconDuration = this.menu.dataset.mwpIconDuration || this.root.dataset.iconDuration || value('iconDuration');
    const submenuIconDuration = this.root.dataset.submenuIconDuration || value('submenuIconDuration');
    const submenuIconEasing = this.root.dataset.submenuIconEasing || value('submenuIconEasing');
    const submenuIconRotation = this.root.dataset.submenuIconRotation || value('submenuIconRotation');

    if (validCss('transition-duration', openDuration)) rootStyle.setProperty('--mwp-nav-duration-open', openDuration);
    if (validCss('transition-duration', closeDuration)) rootStyle.setProperty('--mwp-nav-duration-close', closeDuration);
    if (validCss('transform', `translateY(${distance})`)) rootStyle.setProperty('--mwp-nav-distance', distance);
    if (validCss('transition-timing-function', easing)) rootStyle.setProperty('--mwp-nav-ease', easing);
    if (validCss('width', panelWidth)) rootStyle.setProperty('--mwp-nav-panel-width', panelWidth);
    if (validCss('transition-delay', stagger)) rootStyle.setProperty('--mwp-nav-stagger', stagger);
    if (validCss('transition-duration', iconDuration)) rootStyle.setProperty('--mwp-nav-icon-duration', iconDuration);
    if (validCss('transition-duration', submenuIconDuration)) rootStyle.setProperty('--mwp-nav-submenu-icon-duration', submenuIconDuration);
    if (validCss('transition-timing-function', submenuIconEasing)) rootStyle.setProperty('--mwp-nav-submenu-icon-ease', submenuIconEasing);
    if (validCss('transform', `rotate(${submenuIconRotation})`)) rootStyle.setProperty('--mwp-nav-submenu-icon-rotation', submenuIconRotation);

    this.items.forEach((item, index) => item.style.setProperty('--mwp-item-index', index));
    this.syncIconGeometry();

    const collapse = this.collapsePreset();
    this.root.dataset.mwpReady = 'true';
    if (COLLAPSE_QUERIES[collapse]) {
      this.mediaQuery = globalThis.matchMedia(COLLAPSE_QUERIES[collapse]);
      this.mediaQuery.addEventListener?.('change', this.onBreakpointChange);
    }

    this.root.mwpNavbarLight = this.publicApi();
    this.menu.mwpNav = this.root.mwpNavbarLight;
  }

  bind() {
    this.menu.addEventListener('toggle', this.onToggle);
    this.backdrop?.addEventListener('click', this.onBackdropClick);
    document.addEventListener('click', this.onDocumentClick);
    document.addEventListener('keydown', this.onKeydown);
    this.panel.addEventListener('click', this.onPanelClick);

    if (!this.mediaQuery) window.addEventListener('resize', this.onBreakpointChange, { passive: true });
    if (this.icon && typeof ResizeObserver !== 'undefined') {
      this.iconObserver = new ResizeObserver(this.syncIconGeometry);
      this.iconObserver.observe(this.icon);
    }
  }

  syncIconGeometry() {
    const firstLine = this.icon?.querySelector('[data-mwp-line]');
    if (!firstLine) return;
    const lineHeight = Number.parseFloat(getComputedStyle(firstLine).height);
    const gap = Number.parseFloat(getComputedStyle(this.icon).rowGap) || 0;
    if (Number.isFinite(lineHeight) && lineHeight > 0) {
      this.root.style.setProperty('--mwp-nav-icon-auto-shift', `${lineHeight + gap}px`);
    }
  }

  collapsePreset() {
    if (this.root.dataset.collapse) return this.root.dataset.collapse;
    for (const attribute of this.root.attributes) {
      if (/^data-wf--.+--variant$/.test(attribute.name) &&
        (attribute.value === 'always' || attribute.value === 'never' || COLLAPSE_QUERIES[attribute.value])) {
        return attribute.value;
      }
    }
    return '';
  }

  publicApi() {
    const navbar = this;
    return Object.freeze({
      open: (options) => this.open(options),
      close: (options) => this.close(options),
      toggle: (options) => this.toggle(options),
      destroy: () => this.destroy(),
      get state() { return navbar.root.dataset.state; }
    });
  }

  isCollapsed() {
    const collapse = this.collapsePreset();
    if (collapse === 'always') return true;
    if (collapse === 'never') return false;
    if (this.mediaQuery) return this.mediaQuery.matches;
    // Webflow collapse variants control the <details> wrapper. Its summary can
    // still report `display: list-item` while the wrapper itself is hidden.
    return getComputedStyle(this.menu).display !== 'none';
  }

  usesScrollLock() {
    const requested = this.root.getAttribute('data-scroll-lock');
    if (requested && requested !== 'auto') return TRUE_VALUES.has(requested.trim().toLowerCase());
    return ['left', 'right', 'overlay'].includes(this.root.dataset.layout);
  }

  onBreakpointChange(initial = false) {
    const isInitial = initial === true;
    const collapsed = this.isCollapsed();
    const previous = this.root.dataset.mwpCollapsed === 'true';
    this.root.dataset.mwpCollapsed = String(collapsed);

    if (collapsed) {
      if (isInitial || !previous) {
        this.clearStateTimer();
        this.focusOnOpened = false;
        if (!isInitial && this.panel.contains(this.root.ownerDocument.activeElement)) {
          this.trigger.focus();
        }
        this.menu.open = false;
        this.setState('closed', false);
      } else {
        this.syncNative(false);
      }
    } else {
      // A collapsed animation must not overwrite the new expanded state later.
      this.clearStateTimer();
      this.focusOnOpened = false;
      this.unlockScroll();
      this.menu.open = true;
      this.setState('expanded', false);
      this.submenus.forEach((submenu) => { submenu.open = false; });
    }
  }

  onToggle() {
    if (!this.isCollapsed()) {
      if (!this.menu.open) this.menu.open = true;
      this.setState('expanded', false);
      return;
    }
    this.syncNative(true);
  }

  onDocumentClick(event) {
    if (!this.menu.open || !booleanAttribute(this.root, 'data-close-on-outside', true)) return;
    if (!this.root.contains(event.target)) this.close();
  }

  onBackdropClick() {
    this.close({ focusTrigger: true });
  }

  onPanelClick(event) {
    const link = event.target.closest('a');
    if (link && booleanAttribute(this.root, 'data-close-on-link', true)) this.close();
  }

  onKeydown(event) {
    if (event.key !== 'Escape' || event.defaultPrevented) return;

    const activeElement = this.root.ownerDocument.activeElement;
    const focusedNavbar = activeElement?.closest(ROOT_SELECTOR);
    // Leave the key to the navbar being used, regardless of listener order.
    // Retain page-level Escape when focus is outside every navbar.
    if (focusedNavbar && focusedNavbar !== this.root) return;

    const openSubmenu = this.submenus.find((submenu) => submenu.open && submenu.contains(activeElement));
    if (openSubmenu) {
      event.preventDefault();
      openSubmenu.open = false;
      openSubmenu.querySelector('summary')?.focus();
      return;
    }

    if (this.menu.open && this.isCollapsed()) {
      event.preventDefault();
      this.close({ focusTrigger: true });
    }
  }

  syncNative(notify) {
    if (this.menu.open) this.transitionToOpen(notify);
    else this.transitionToClosed(notify);
  }

  transitionToOpen(notify = true) {
    this.syncIconGeometry();
    this.clearStateTimer();
    this.setState('opening', notify);
    if (this.usesScrollLock()) this.lockScroll();

    const duration = this.motionDuration('open');
    this.stateTimer = window.setTimeout(() => {
      // Native toggle notification is queued separately from the attribute
      // change. A reversal can win before that notification clears this timer.
      if (!this.menu.open) return;
      this.setState('open', true);
      // An opened listener can close the menu synchronously.
      if (this.menu.open && this.root.dataset.state === 'open' &&
          (this.focusOnOpened || booleanAttribute(this.root, 'data-focus-first', false))) {
        this.panel.querySelector('a[href], button:not([disabled]), summary, [tabindex]:not([tabindex="-1"])')?.focus();
      }
      this.focusOnOpened = false;
    }, duration);
  }

  transitionToClosed(notify = true) {
    this.clearStateTimer();
    this.focusOnOpened = false;
    this.restoreTriggerFocus();
    this.setState('closing', notify);
    const duration = this.motionDuration('close');
    this.stateTimer = window.setTimeout(() => {
      if (this.menu.open) return;
      this.setState('closed', true);
      this.unlockScroll();
      this.submenus.forEach((submenu) => { submenu.open = false; });
    }, duration);
  }

  setState(state, notify) {
    const open = ['opening', 'open'].includes(state);
    this.root.dataset.state = state;
    this.menu.dataset.state = state;
    this.panel.dataset.state = state;
    if (this.backdrop) this.backdrop.dataset.state = state;
    this.trigger.setAttribute('aria-expanded', String(open));
    this.panel.setAttribute('aria-hidden', String(!open && state !== 'expanded'));
    this.panel.inert = !open && state !== 'expanded';
    if (notify) this.emit(state);
  }

  emit(state) {
    const eventNames = { opening: 'open', open: 'opened', closing: 'close', closed: 'closed' };
    const eventName = eventNames[state];
    if (!eventName) return;
    const detail = { navbar: this, root: this.root, menu: this.menu, trigger: this.trigger, panel: this.panel, state };
    const CustomEventConstructor = this.root.ownerDocument?.defaultView?.CustomEvent || globalThis.CustomEvent;
    if (CustomEventConstructor) {
      this.root.dispatchEvent(new CustomEventConstructor(`mwp-nav:${eventName}`, { bubbles: true, detail }));
    }
  }

  motionDuration(direction) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 0;
    if (this.root.dataset.motion === 'none') return 0;
    const property = direction === 'open' ? '--mwp-nav-duration-open' : '--mwp-nav-duration-close';
    return milliseconds(getComputedStyle(this.root).getPropertyValue(property), 0);
  }

  open({ focusFirst = false } = {}) {
    if (!this.isCollapsed() || this.menu.open) return;
    this.focusOnOpened = focusFirst;
    this.menu.open = true;
  }

  restoreTriggerFocus(force = false) {
    if (force || this.panel.contains(this.root.ownerDocument.activeElement)) this.trigger.focus();
  }

  close({ focusTrigger = false } = {}) {
    if (!this.isCollapsed() || !this.menu.open) return;
    // Also discard focus when close/reopen changes coalesce into one native
    // opening notification, so transitionToClosed never runs.
    this.focusOnOpened = false;
    // Move panel focus before native CSS or enhanced inertness hides it.
    this.restoreTriggerFocus(focusTrigger);
    this.menu.open = false;
  }

  toggle(options) {
    if (this.menu.open) this.close(options);
    else this.open(options);
  }

  lockScroll() {
    if (this.lockSnapshot) return;
    this.lockSnapshot = true;
    acquireScrollLock(this.root.ownerDocument);
  }

  unlockScroll() {
    if (!this.lockSnapshot) return;
    this.lockSnapshot = null;
    releaseScrollLock(this.root.ownerDocument);
  }

  clearStateTimer() {
    if (this.stateTimer) window.clearTimeout(this.stateTimer);
    this.stateTimer = null;
  }

  destroy() {
    if (this.destroyed) return;
    this.destroyed = true;
    this.clearStateTimer();
    this.unlockScroll();
    if (!this.restoreEnhancement) return;
    this.menu.removeEventListener('toggle', this.onToggle);
    this.backdrop?.removeEventListener('click', this.onBackdropClick);
    document.removeEventListener('click', this.onDocumentClick);
    document.removeEventListener('keydown', this.onKeydown);
    this.panel.removeEventListener('click', this.onPanelClick);
    window.removeEventListener('resize', this.onBreakpointChange);
    this.mediaQuery?.removeEventListener?.('change', this.onBreakpointChange);
    this.iconObserver?.disconnect();
    this.focusOnOpened = false;
    this.restoreEnhancement();
  }
}

function initNavbarLight(root = document) {
  return [...root.querySelectorAll(ROOT_SELECTOR)]
    .filter((element) => !element.mwpNavbarLight && navbarStylesAvailable(element))
    .map((element) => new NavbarLight(element));
}

if (typeof document !== 'undefined' && globalThis.MWP_NAVBAR_LIGHT_AUTO_INIT !== false) {
  const start = () => initNavbarLight();
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
}


globalThis.NavbarLight = NavbarLight;
globalThis.initNavbarLight = initNavbarLight;
