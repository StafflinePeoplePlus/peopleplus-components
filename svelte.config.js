import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		csp: {
			mode: 'auto',
			directives: {
				// Not able to be strict-dynamic due to https://github.com/sveltejs/kit/issues/3558
				'script-src': ['self', 'https://embed.cloudflarestream.com/embed/sdk.latest.js'],
				'style-src': [
					'self',
					// bind:clientWidth/Height requires this - https://github.com/sveltejs/svelte/issues/8607
					'unsafe-inline'
				]
			}
		},
		adapter: adapter()
	}
};

export default config;
