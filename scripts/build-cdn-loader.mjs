import { renderCdnLoader } from './cdn-loader.mjs';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { projectRoot, outputRoot } from './build-paths.mjs';

const packageMetadata = JSON.parse(await readFile(resolve(projectRoot, 'package.json'), 'utf8'));
const version = packageMetadata.version;
const tag = `v${version}`;
const baseUrl = `https://cdn.jsdelivr.net/gh/madewithpixels/Smashburger-Webflow-Navbar@${tag}/dist`;
const css = await readFile(resolve(outputRoot, 'dist/navbar-light.min.css'));
const javascript = await readFile(resolve(outputRoot, 'dist/navbar-light.min.js'));
const loader = renderCdnLoader({ version, baseUrl, css, javascript });

await writeFile(resolve(outputRoot, 'webflow/navbar-light-cdn-loader.html'), loader);
