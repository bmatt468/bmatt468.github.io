import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://www.bmatt468.com',

  integrations: [
    tailwind(),
    icon({
      include: {
        mdi: ['*'],
        fa_brands: ['*'],
      },
    }),
  ],
});
