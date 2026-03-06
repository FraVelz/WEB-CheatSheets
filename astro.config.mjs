// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const SITE = 'https://web-cheatsheets.vercel.app';

// https://astro.build/config
export default defineConfig({
	site: SITE,
	integrations: [
		starlight({
			title: 'Web CheatSheets',
			description: 'Notas personales de desarrollo web: Node, Tailwind, Git, TypeScript y más.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Español', lang: 'es' },
			},
			// Tema claro/oscuro: Starlight incluye ambos por defecto con selector en la barra
			customCss: ['./src/styles/custom.css'],
			// SEO: Open Graph y meta
			head: [
				{ tag: 'meta', attrs: { name: 'description', content: 'Notas personales de desarrollo web: Node, Tailwind, Git, TypeScript y más.' } },
				{ tag: 'meta', attrs: { property: 'og:type', content: 'website' } },
				{ tag: 'meta', attrs: { property: 'og:image', content: `${SITE}/screenshot.png` } },
				{ tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
				{ tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
				{ tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
				{ tag: 'meta', attrs: { name: 'twitter:image', content: `${SITE}/screenshot.png` } },
			],
			sidebar: [
				{ label: 'Inicio', link: '/' },
				{
					label: 'Chuletas',
					items: [
						{
							label: 'Node',
							items: [
								{ slug: 'cheatsheets/node/package-managers-npm-pnpm-yarn' },
								{ slug: 'cheatsheets/node/package-json-type-module-and-version' },
								{ slug: 'cheatsheets/node/pnpm-create-projects-astro-react-next' },
							],
						},
						{ slug: 'cheatsheets/css/tailwindcss-setup-with-pnpm' },
						{ slug: 'cheatsheets/git/conventional-commits' },
						{ slug: 'cheatsheets/typescript/tsconfig-node-next' },
					],
				},
				{
					label: 'Guías',
					items: [
						{ slug: 'guides/web-dev-notes-fravelz' },
						{ slug: 'guides/estructura-proyecto-web' },
						{ slug: 'guides/vanilla-tailwind-typescript-standard-npm' },
						{ slug: 'guides/vanilla-tailwind-typescript-standard-pnpm' },
					],
				},
				{
					label: 'Borradores',
					collapsed: true,
					items: [
						{ slug: 'drafts/tailwindcss' },
						{ slug: 'drafts/vanilla' },
					],
				},
			],
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com' },
			],
			credits: true,
		}),
	],
});
