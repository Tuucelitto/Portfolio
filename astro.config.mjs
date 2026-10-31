import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Vercel exposes the production domain at build time; absolute URLs for
// canonical and Open Graph tags are built from it.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export default defineConfig({
  site: productionHost ? `https://${productionHost}` : 'http://localhost:4321',
  i18n: {
    locales: ['en', 'tr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
