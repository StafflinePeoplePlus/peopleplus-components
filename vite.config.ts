import { sveltekit } from '@sveltejs/kit/vite';
import type { Connect } from 'vite';
import { defineConfig } from 'vitest/config';
import istanbul from 'vite-plugin-istanbul';

const configureServer = (server: { middlewares: Connect.Server }) => {
	server.middlewares.use((_req, res, next) => {
		res.setHeader('X-Content-Type-Options', 'nosniff');
		res.setHeader('X-Frame-Options', 'DENY');
		res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
		res.setHeader(
			'Permissions-Policy',
			'camera=(), display-capture=(), fullscreen=(), geolocation=(), microphone=()'
		);
		next();
	});
};

export default defineConfig({
	plugins: [
		sveltekit(),
		{ name: 'headers', configureServer, configurePreviewServer: configureServer },
		...(process.env.VITE_COVERAGE
			? [
					istanbul({
						include: 'src/*',
						extension: ['.js', '.ts', '.svelte'],
						forceBuildInstrument: true
					})
			  ]
			: [])
	],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html', 'json-summary'],
			reportsDirectory: './coverage/vitest'
		},
		include: ['src/**/*.{test,spec}.{js,ts}'],
		environment: 'jsdom'
	},
	build: {
		sourcemap: !!process.env.VITE_COVERAGE
	},
	server: { cors: { origin: false } },
	preview: { cors: { origin: false }, host: process.env.CI ? '0.0.0.0' : undefined }
});
