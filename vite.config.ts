import { sveltekit } from '@sveltejs/kit/vite';
import type { Connect } from 'vite';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';
import { readFile } from 'fs/promises';
import { extname } from 'path';
import { getHighlighter } from 'shiki';

const configureServer = (server: { middlewares: Connect.Server }) => {
	server.middlewares.use((_req, res, next) => {
		res.setHeader('X-Content-Type-Options', 'nosniff');
		res.setHeader('X-Frame-Options', 'SAMEORIGIN');
		res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
		res.setHeader(
			'Permissions-Policy',
			'camera=(), display-capture=(), fullscreen=(self), geolocation=(), microphone=()',
		);
		next();
	});
};

export default defineConfig({
	plugins: [
		sveltekit(),
		{ name: 'headers', configureServer },
		...(process.env.VITE_COVERAGE
			? [
					istanbul({
						include: 'src/*',
						extension: ['.js', '.ts', '.svelte'],
						forceBuildInstrument: true,
					}),
				]
			: []),
		codeUsage(),
	],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html', 'json-summary'],
			reportsDirectory: './coverage/vitest',
		},
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom',
		globals: true,
		setupFiles: ['./vitest-setup.ts'],
	},
	build: {
		sourcemap: !!process.env.VITE_COVERAGE,
	},
	server: { cors: { origin: false } },
});

function codeUsage() {
	const usageQuery = '?usage';
	const usageVirtual = 'virtual:usage/';

	function fixIndentation(source: string): string {
		const leadingWhitespace = source.match(/^\s+/)?.[0];
		if (leadingWhitespace) {
			source = source.slice(leadingWhitespace.length).replaceAll(`\n${leadingWhitespace}`, '\n');
		}
		return source;
	}

	function extractUsage(source: string): string {
		if (!source.includes('<!-- START USAGE -->')) {
			return source;
		}

		const usage = fixIndentation(
			source
				.split('<!-- START USAGE -->\n')
				.filter((_part, i) => i % 2 === 1)
				.map((part) => part.split('<!-- END USAGE -->')[0])
				.join('\n'),
		);
		return usage;
	}

	return {
		name: 'import-code-usage',

		resolveId(id: string) {
			if (id.startsWith(usageVirtual)) {
				return `\0${id}`;
			}
		},
		async load(id: string) {
			if (id.startsWith('\0' + usageVirtual)) {
				const highlighter = await getHighlighter({
					themes: ['github-dark-dimmed'],
					langs: ['typescript'],
				});

				const imports = id.slice(('\0' + usageVirtual).length).split(',');
				const code = `import { ${imports.join(', ')} } from '@peopleplus/components';`;
				const highlighted = highlighter.codeToHtml(code, {
					theme: 'github-dark-dimmed',
					lang: 'typescript',
				});
				return `export const html = ${JSON.stringify(highlighted)};
						export const text = ${JSON.stringify(code)};`;
			}
		},
		async transform(src: string, id: string) {
			if (id.endsWith(usageQuery)) {
				const filePath = id.slice(0, id.length - usageQuery.length);
				const lang = extname(filePath).slice(1);
				const contents = await readFile(filePath, {
					encoding: 'utf8',
				});
				const highlighter = await getHighlighter({
					themes: ['github-dark-dimmed'],
					langs: ['typescript', 'svelte'],
				});

				const code = extractUsage(contents).replaceAll('$lib', '@peopleplus/components');
				const highlighted = highlighter.codeToHtml(code, {
					theme: 'github-dark-dimmed',
					lang: lang,
				});

				return {
					code: `export const html = ${JSON.stringify(highlighted)};
						   export const text = ${JSON.stringify(code)};`,
					map: null,
				};
			}
		},
	};
}
