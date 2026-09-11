import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import remarkAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex(
		{ 
			extensions: ['.md', '.svx'],
			rehypePlugins: [
				rehypeSlug,
				[
					remarkAutolinkHeadings, 
					{ 
						behavior: 'append',
						properties: { ariaHidden: true, tabIndex: -1, className: ['heading-link'] },
						content: { type: 'text', value: '#' } 
					}
				]
			],
			remarkPlugins: [remarkGfm, remarkDirective]
		})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
