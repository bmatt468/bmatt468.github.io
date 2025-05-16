import eslintPluginAstro from 'eslint-plugin-astro';
// import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  // ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    // ignores: ['.archive/**'],
    // plugins: {
    //   'no-relative-import-paths': noRelativeImportPaths,
    // },
    // rules: {
    //   "no-relative-import-paths/no-relative-import-paths": [
    //     "warn",
    //     { "allowSameFolder": true, "rootDir": "src", "prefix": "@" }
    //   ]
    // }
  },
]);
