import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// import cloudflare from "@astrojs/cloudflare";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.alfonsoduarte.dev/',
  integrations: [mdx(), sitemap(), tailwind()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});