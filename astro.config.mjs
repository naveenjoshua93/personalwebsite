// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Canonical host. Switch to https://technowarroom.com when the domain is attached.
export default defineConfig({
  site: 'https://personalwebsite.naveenjoshua93.workers.dev',
  integrations: [sitemap()],
});
