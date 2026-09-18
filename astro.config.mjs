import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://nerivahealth.com', // Replace with your final domain
  integrations: [sitemap()]
});
