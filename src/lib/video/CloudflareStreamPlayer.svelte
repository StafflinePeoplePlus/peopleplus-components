<script lang="ts">
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useCloudflareStream } from './cloudflareStream';

	const dispatchEvent = createEventDispatcher();

	let className = '';
	export { className as class };
	export let code: string;
	export let videoId: string;
	export let autoplay = false;
	export let preload = false;
	export let loop = false;
	export let muted = false;
	export let controls = true;
	export let primaryColor: string | undefined = undefined;
	export let poster: string | undefined = undefined;
	export let playing = false;
	export let volume = 1;
	export let duration: number | undefined = undefined;
	export let currentTime = 0;
	export let progress: [number, number][] = [];

	let url: URL;
	$: {
		url = new URL(`https://customer-${code}.cloudflarestream.com/${videoId}/iframe`);
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
	}

	let videoElement: HTMLIFrameElement | undefined = undefined;
	const Stream = useCloudflareStream();
	$: player = videoElement && $Stream ? $Stream(videoElement) : null;

	$: if (player) {
		player.volume = volume;
	}
	$: if (player && player.currentTime !== currentTime) {
		player.currentTime = currentTime;
	}

	$: if (player) {
		player.addEventListener('play', onPlay);
		player.addEventListener('pause', onPause);
		player.addEventListener('ended', onEnded);
		player.addEventListener('timeupdate', onTimeUpdate);
		player.addEventListener('durationchange', onDurationChange);
		player.addEventListener('progress', onProgress);
	}
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
</script>

<iframe
	bind:this={videoElement}
	class={twMerge('h-full w-full bg-black', className)}
	src={url.toString()}
	allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
	title="Video Player"
/>
