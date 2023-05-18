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
				'default-src': ['self'],
				'object-src': ['none'],
				'base-uri': ['none']
			}
		},
		adapter: adapter()
	}
};

export default config;
