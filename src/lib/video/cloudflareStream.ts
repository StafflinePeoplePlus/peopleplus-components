import { BROWSER } from 'esm-env';
import { onMount } from 'svelte';
import { get, readonly, writable } from 'svelte/store';

const sdkScriptLocation = 'https://embed.cloudflarestream.com/embed/sdk.latest.js';
export function useCloudflareStream() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const streamSdk = writable(BROWSER ? (window as any).Stream : undefined);

	onMount(() => {
		const existingSdk = get(streamSdk);
		if (existingSdk) {
			return;
		}

		const existingScript = document.querySelector<HTMLScriptElement>(
			`script[src='${sdkScriptLocation}']`,
		);
		const script = existingScript ?? document.createElement('script');
		script.addEventListener('load', () => {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			streamSdk.set((window as any).Stream);
		});
		if (!existingScript) {
			script.src = sdkScriptLocation;
			document.head.appendChild(script);
		}
	});

	return readonly(streamSdk);
}
