import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://bestapi.github.io',
  integrations: [tailwind()],
  compressHTML: true,
});