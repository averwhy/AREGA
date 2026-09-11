import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import remarkAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from 'remark-gfm';
import remarkDirective from 'remark-directive';

const githubAlertTypes = new Set(['NOTE', 'TIP', 'IMPORTANT', 'WARNING', 'CAUTION']);

function rehypeGithubAlerts() {
	return (tree) => {
		const visit = (node) => {
			if (node.type === 'element' && node.tagName === 'blockquote') {
				const paragraph = node.children?.find((child) => child.type === 'element' && child.tagName === 'p');
				const marker = paragraph
					? paragraph.children?.find((child) => child.type === 'text')
					: undefined;
				const match = marker?.type === 'text'
					? marker.value.trimStart().match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i)
					: undefined;

				if (match && githubAlertTypes.has(match[1].toUpperCase())) {
					const alertType = match[1].toLowerCase();
					const label = match[1][0] + match[1].slice(1).toLowerCase();
					marker.value = marker.value.trimStart().slice(match[0].length).replace(/^\n/, '');
					node.properties ??= {};
					node.properties.dataGithubAlert = alertType;
					paragraph.children.unshift({
						type: 'element',
						tagName: 'strong',
						properties: {},
						children: [{ type: 'text', value: label }]
					});
				}
			}

			for (const child of node.children ?? []) visit(child);
		};

		visit(tree);
	};
}

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
				],
				rehypeGithubAlerts
			],
			remarkPlugins: [remarkGfm, remarkDirective]
		})],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.svx', '.md']
};

export default config;
