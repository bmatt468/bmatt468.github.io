import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://bmatt468.com",
  trailingSlash: "ignore",
  output: "static",

  integrations: [],

  vite: {
    plugins: [
      tailwindcss(),
    ]
  }
});
