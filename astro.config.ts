import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.bmatt468.com',
  trailingSlash: 'ignore',
  output: 'static',

  integrations: [icon(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
