/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
  singleAttributePerLine: true,

  plugins: [
    'prettier-plugin-astro',
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss', // REMINDER: Must be last
  ],

  importOrder: [
    '<TYPES>^astro',
    '<TYPES>^@astro',
    '<TYPES>^(node:)',
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '^astro/',
    '^astro',
    '@astro',
    '',
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
    '',
    '^[.]',
  ],

  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',

  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
};

export default config;
