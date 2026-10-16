import { createHash } from 'node:crypto';

export const integrity = bytes => `sha384-${createHash('sha384').update(bytes).digest('base64')}`;

export function renderCdnLoader({ version, baseUrl, css, javascript,
  notice = 'UNRELEASED CANDIDATE: tag and CDN URLs are not published. Do not install in Webflow.' }) {
  const tag = `v${version}`;
  return `<!-- ${notice} -->
<!-- SmashBurger CDN loader: exact version ${version} (${tag}) -->
<link
  rel="stylesheet"
  href="${baseUrl}/navbar-light.min.css"
  integrity="${integrity(css)}"
  crossorigin="anonymous"
  data-mwp-navbar-light-cdn="css"
  data-mwp-navbar-light-version="${version}"
  onload="this.dataset.mwpStatus='loaded'"
  onerror="this.dataset.mwpStatus='error';window.dispatchEvent(new CustomEvent('mwp-navbar-light:cdn-error',{detail:{asset:'css',version:'${version}'}}));console.error('SmashBurger ${version}: CDN CSS failed to load; native navigation content remains available.')">
<script
  defer
  src="${baseUrl}/navbar-light.min.js"
  integrity="${integrity(javascript)}"
  crossorigin="anonymous"
  data-mwp-navbar-light-cdn="javascript"
  data-mwp-navbar-light-version="${version}"
  onload="this.dataset.mwpStatus='loaded'"
  onerror="this.dataset.mwpStatus='error';window.dispatchEvent(new CustomEvent('mwp-navbar-light:cdn-error',{detail:{asset:'javascript',version:'${version}'}}));console.error('SmashBurger ${version}: CDN JavaScript failed to load; native details behavior remains available.')"></script>
`;
}
