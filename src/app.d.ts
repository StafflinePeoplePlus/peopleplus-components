declare namespace App {
	interface Platform {
		//env: {};
		context: {
			waitUntil(promise: Promise<any>): void;
		};
		caches: CacheStorage & { default: Cache };
	}

	//interface Stuff {}
}
