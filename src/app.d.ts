declare namespace App {
	interface Locals {}

	interface Platform {
		env: {};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	interface Session {}

	interface Stuff {}
}
