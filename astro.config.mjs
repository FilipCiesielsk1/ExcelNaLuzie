import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.EXCELNALUZIE_SITE_ORIGIN || 'https://filipciesielsk1.github.io';
const rawBase = process.env.EXCELNALUZIE_BASE_PATH ?? '/ExcelNaLuzie';
const base = rawBase && rawBase !== '/'
  ? `${rawBase.replace(/\/+$/, '')}/`
  : '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [sitemap()],
  build: { format: 'directory' }
});
