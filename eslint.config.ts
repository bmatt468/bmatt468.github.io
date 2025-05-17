import eslintPluginAstro from 'eslint-plugin-astro';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  // ...eslintPluginAstro.configs['jsx-a11y-recommended'],
  {
    ignores: ['.archive/**'],
    rules: {
      'no-restricted-imports': [
        'warn',
        {
          patterns: [
            {
              regex: '^[\.\/]+components\/.*',
              message: 'Please use @components/* instead.',
            },
            {
              regex: '^[\.\/]+icons\/.*',
              message: 'Please use @icons/* instead.',
            },
            {
              regex: '^[\.\/]+layouts\/.*',
              message: 'Please use @layouts/* instead.',
            },
            {
              regex: '^[\.\/]+pages\/.*',
              message: 'Please use @pages/* instead.',
            },
            {
              regex: '^[\.\/]+styles\/.*',
              message: 'Please use @styles/* instead.',
            },
            // { group: ['../components/*'], message: 'Please use @components/* instead.' },
            {
              group: ['*/src/icons/*'],
              message: 'Please use @icons/* instead.',
            },
            {
              group: ['*/src/layouts/*'],
              message: 'Please use @layouts/* instead.',
            },
            {
              group: ['*/src/pages/*'],
              message: 'Please use @pages/* instead.',
            },
            {
              group: ['*/src/styles/*'],
              message: 'Please use @styles/* instead.',
            },
          ],
        },
      ],
    },
  },
]);
