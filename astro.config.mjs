import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://filipciesielsk1.github.io',
  base: '/ExcelNaLuzie',
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
