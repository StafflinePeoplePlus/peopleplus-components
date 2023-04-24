import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		coverage: {
			provider: 'istanbul',
			reporter: ['text', 'json', 'html', 'json-summary'],
			reportsDirectory: './coverage/vitest'
		},
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
