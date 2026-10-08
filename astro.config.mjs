import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const configuredOrigin = process.env.EXCELNALUZIE_SITE_ORIGIN || 'https://excelnaluzie.pl';
const site = configuredOrigin.replace(/^http:\/\/excelnaluzie\.pl$/i, 'https://excelnaluzie.pl');
const rawBase = process.env.EXCELNALUZIE_BASE_PATH ?? '/';
const base = rawBase && rawBase !== '/'
  ? `${rawBase.replace(/\/+$/, '')}/`
  : '/';

export default defineConfig({
  site,
  base,
  output: 'static',
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(new URL(page).pathname)
    })
  ],
  build: { format: 'directory' }
});
