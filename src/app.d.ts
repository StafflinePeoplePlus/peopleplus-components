declare namespace App {
	interface Platform {
		//env: {};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	interface Locals {
		colorTheme: import('$lib/types').ColorTheme;
	}
	interface Session {
		colorTheme: import('$lib/types').ColorTheme;
	}

	//interface Stuff {}
}
