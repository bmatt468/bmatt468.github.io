import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.bmatt468.com',
  trailingSlash: 'ignore',
  output: 'static',

  env: {
    schema: {
      APP_ENV: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
    },
  },

  integrations: [
    icon({
      include: {
        mdi: [
          'about',
          'blog',
          'code-block-tags',
          'code-braces-box',
          'contact',
          'external-link',
          'github',
          'language-python',
          'linkedin',
          'loading',
          'roadmap',
          'tailwind',
          'work',
        ],
        'qlementine-icons': ['resume-16'],
        'skill-icons': [
          'alpinejs-dark',
          'alpinejs-light',
          'angular-dark',
          'angular-light',
          'ansible',
          'astro',
          'aws-dark',
          'aws-light',
          'bash-dark',
          'bash-light',
          'cloudflare-dark',
          'cloudflare-light',
          'cs',
          'docker',
          'dotnet',
          'dynamodb-dark',
          'dynamodb-light',
          'github-dark',
          'github-light',
          'githubactions-dark',
          'githubactions-light',
          'golang',
          'javascript',
          'jenkins-dark',
          'jenkins-light',
          'laravel-dark',
          'laravel-light',
          'latex-dark',
          'latex-light',
          'less-dark',
          'less-light',
          'mysql-dark',
          'mysql-light',
          'notion-dark',
          'notion-light',
          'php-dark',
          'php-light',
          'phpstorm-dark',
          'phpstorm-light',
          'powershell-dark',
          'powershell-light',
          'python-dark',
          'python-light',
          'pytorch-dark',
          'pytorch-light',
          'r-dark',
          'r-light',
          'react-dark',
          'react-light',
          'redis-dark',
          'redis-light',
          'sass',
          'tailwindcss-dark',
          'tailwindcss-light',
          'terraform-dark',
          'terraform-light',
          'typescript',
          'vuejs-dark',
          'vuejs-light',
          'wordpress',
        ],
      },
      svgoOptions: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                cleanupIds: false,
              },
            },
          },
        ],
      },
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
