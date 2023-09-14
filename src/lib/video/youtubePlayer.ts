/// <reference types="youtube" />

import { BROWSER } from 'esm-env';
import { onMount } from 'svelte';
import { get, readonly, writable } from 'svelte/store';

declare global {
	interface Window {
		onYouTubeIframeAPIReady?: () => void;
	}
}

const sdkScriptLocation = 'https://www.youtube.com/iframe_api';
export function useYouTubeIFrameAPI() {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const yt = writable(BROWSER ? window.YT : undefined);

	onMount(() => {
		const existingSdk = get(yt);
		if (existingSdk) {
			return;
		}

		const existingScript = document.querySelector<HTMLScriptElement>(
			`script[src='${sdkScriptLocation}']`,
		);
		const script = existingScript ?? document.createElement('script');
		if (!existingScript) {
			script.src = sdkScriptLocation;
			document.head.appendChild(script);
		}

		window.onYouTubeIframeAPIReady = () => yt.set(window.YT);
	});

	return readonly(yt);
}
