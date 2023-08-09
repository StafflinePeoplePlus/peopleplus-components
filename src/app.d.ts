import type { ExecutionContext, CacheStorage } from '@cloudflare/workers-types/2022-11-30';

declare namespace App {
	interface Platform {
		env: unknown;
		context: ExecutionContext;
		caches: CacheStorage;
	}
}

export {};

declare module 'svelte/elements' {
	export interface HTMLAttributes<T extends EventTarget> extends AriaAttributes, DOMAttributes<T> {
		'data-testId'?: undefined | string;
	}
}
