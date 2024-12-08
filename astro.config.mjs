// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://Pandinhaa11.github.io',
	base: 'SitedoPanda3.0',
	integrations: [mdx(), sitemap()],
});
