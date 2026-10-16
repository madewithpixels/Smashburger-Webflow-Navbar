import { mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
// Never overwrite the committed v0.2.6 distribution or installed loader.
// Verification supplies a disposable directory; deliberate builds keep the default.
export const outputRoot = process.env.SMASHBURGER_BUILD_OUTPUT_ROOT
  ? resolve(process.env.SMASHBURGER_BUILD_OUTPUT_ROOT)
  : resolve(projectRoot, 'candidate');
for (const directory of ['dist', 'webflow', 'demo']) {
  mkdirSync(resolve(outputRoot, directory), { recursive: true });
}
