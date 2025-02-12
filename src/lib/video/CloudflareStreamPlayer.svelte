<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher, onDestroy } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useCloudflareStream } from './cloudflareStream';

	const dispatchEvent = createEventDispatcher();

	interface Props {
		class?: string;
		code: string;
		videoId: string;
		autoplay?: boolean;
		preload?: boolean;
		loop?: boolean;
		muted?: boolean;
		controls?: boolean;
		primaryColor?: string | undefined;
		poster?: string | undefined;
		playing?: boolean;
		volume?: number;
		duration?: number | undefined;
		currentTime?: number;
		progress?: [number, number][];
		sdkSrc?: string | undefined;
	}

	let {
		class: className = '',
		code,
		videoId,
		autoplay = false,
		preload = false,
		loop = false,
		muted = false,
		controls = true,
		primaryColor = undefined,
		poster = undefined,
		playing = $bindable(false),
		volume = 1,
		duration = $bindable(undefined),
		currentTime = $bindable(0),
		progress = $bindable([]),
		sdkSrc = undefined,
	}: Props = $props();

	let url: URL = $state(new URL(`https://customer-${code}.cloudflarestream.com/${videoId}/iframe`));

	let videoElement: HTMLIFrameElement | undefined = $state(undefined);
	const Stream = useCloudflareStream(sdkSrc);

	onDestroy(() => {
		if (player) {
			player.removeEventListener('play', onPlay);
			player.removeEventListener('pause', onPause);
			player.removeEventListener('ended', onEnded);
			player.removeEventListener('timeupdate', onTimeUpdate);
			player.removeEventListener('durationchange', onDurationChange);
			player.removeEventListener('progress', onProgress);
		}
	});

	function onPlay() {
		dispatchEvent('play');
		playing = true;
	}
	function onPause() {
		dispatchEvent('pause');
		playing = false;
	}
	function onEnded() {
		dispatchEvent('ended');
	}
	function onTimeUpdate() {
		if (!player) return;
		currentTime = player.currentTime;
		dispatchEvent('timeupdate', currentTime);
	}
	function onDurationChange() {
		if (!player) return;
		duration = player.duration;
		dispatchEvent('durationchange', duration);
	}
	function onProgress() {
		if (!player) return;

		const ranges = player.buffered;
		const buffered: [number, number][] = [];
		for (let i = 0; i < ranges.length; i++) {
			buffered.push([ranges.start(i), ranges.end(i)]);
		}
		progress = buffered;
		dispatchEvent('progress', progress);
	}

	export function play() {
		if (!player) {
			return;
		}

		player.play();
	}
	export function pause() {
		if (!player) {
			return;
		}

		player.pause();
	}
	run(() => {
		if (autoplay) {
			url.searchParams.set('autoplay', 'true');
		}
		if (preload) {
			url.searchParams.set('preload', 'true');
		}
		if (loop) {
			url.searchParams.set('loop', 'true');
		}
		if (muted) {
			url.searchParams.set('muted', 'true');
		}
		url.searchParams.set('controls', controls.toString());
		if (primaryColor) {
			url.searchParams.set('primaryColor', primaryColor);
		}
		if (poster) {
			url.searchParams.set('poster', poster);
		}
	});
	let player = $derived(videoElement && $Stream ? $Stream(videoElement) : null);
	run(() => {
		if (player) {
			player.volume = volume;
		}
	});
	run(() => {
		if (player && player.currentTime !== currentTime) {
			player.currentTime = currentTime;
		}
	});
	run(() => {
		if (player) {
			player.addEventListener('play', onPlay);
			player.addEventListener('pause', onPause);
			player.addEventListener('ended', onEnded);
			player.addEventListener('timeupdate', onTimeUpdate);
			player.addEventListener('durationchange', onDurationChange);
			player.addEventListener('progress', onProgress);
		}
	});
</script>

<iframe
	bind:this={videoElement}
	class={twMerge('h-full w-full bg-black', className)}
	src={url.toString()}
	allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
	title="Video Player"
></iframe>
