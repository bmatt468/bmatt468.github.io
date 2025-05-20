import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';

import tsConfigJson from './tsconfig.json';

const restrictedImportPatterns = ((): Array<object> => {
  let restrictedImportPatterns: Array<object> = [];
  const paths: { [index: string]: string[] } =
    tsConfigJson.compilerOptions.paths;

  for (const pathsKey in paths) {
    const pathsValue = paths[pathsKey][0];
    const pathIdentifier = pathsValue.replace('src/', '').replace('/*', '');

    const regex = '^[\.\/]+{TOKEN}\/.*'.replace('{TOKEN}', pathIdentifier);
    const message = 'Please use {TOKEN} instead.'.replace('{TOKEN}', pathsKey);

    restrictedImportPatterns.push({
      regex,
      message,
    });
  }

  return restrictedImportPatterns;
})();

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  // ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: ['.archive/**'],
    rules: {
      'no-restricted-imports': [
        'warn',
        {
          patterns: restrictedImportPatterns,
        },
      ],
    },
  },
]);
