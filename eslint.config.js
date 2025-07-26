import tseslint from 'typescript-eslint';

import { baseConfig } from './rules/base.js';
import { importsConfig } from './rules/imports.js';
import { reactConfig } from './rules/react.js';
import { typescriptConfig } from './rules/typescript.js';
import { vueConfig } from './rules/vue.js';

export default tseslint.config(
  baseConfig,
  typescriptConfig,
  importsConfig,
  reactConfig,
  vueConfig,
);
