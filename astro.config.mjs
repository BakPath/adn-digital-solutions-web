// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://BakPath.github.io',
  base: '/adn-digital-solutions-web',
  output: 'static',
  trailingSlash: 'always',

  vite: {
    plugins: [tailwindcss()],
  },
});
