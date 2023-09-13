<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useYouTubeIFrameAPI } from './youtubePlayer';

	const dispatchEvent = createEventDispatcher();

	let className = '';
	export { className as class };
	export let videoId: string;
	export let autoplay = false;
	export let loop = false;
	export let muted = false;
	export let controls = true;
	export let playing = false;
	export let volume = 1;
	export let duration: number | undefined = undefined;
	export let currentTime = 0;
	export let progress: [number, number][] = [];

	let videoElement: HTMLElement | undefined = undefined;
	const YouTubePlayer = useYouTubeIFrameAPI();

	$: player =
		videoElement && $YouTubePlayer
			? new $YouTubePlayer.Player(videoElement, {
					videoId,
					playerVars: {
						autoplay: autoplay ? 1 : 0,
						playsinline: 1,
						showinfo: controls ? 1 : 0,
						modestbranding: controls ? 0 : 1,
						controls: controls ? 1 : 0,
						disablekb: controls ? 0 : 1,
						loop: loop ? 1 : 0,
						mute: muted ? 1 : 0,
						rel: controls ? 1 : 0,
						fs: controls ? 1 : 0,
					},
					events: {
						onReady() {
							onDurationChange();
						},
						onStateChange(evt) {
							switch (evt.data) {
								case window.YT.PlayerState.UNSTARTED:
									break;
								case window.YT.PlayerState.ENDED:
									onEnded();
									break;
								case window.YT.PlayerState.PLAYING:
									onPlay();
									break;
								case window.YT.PlayerState.PAUSED:
									onPause();
									break;
								case window.YT.PlayerState.BUFFERING:
									break;
								case window.YT.PlayerState.CUED:
									break;
							}
						},
					},
			  })
			: null;

	$: if (player?.setVolume) {
		player.setVolume(volume * 100);
	}

	let playerTime = currentTime;
	$: if (player && playerTime !== currentTime) {
		player.seekTo(currentTime, true);
	}

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
		playing = false;
	}
	function onTimeUpdate() {
		if (!player) return;
		playerTime = currentTime = player.getCurrentTime();
		dispatchEvent('timeupdate', currentTime);
	}
	function onDurationChange() {
		if (!player) return;
		duration = player.getDuration();
		dispatchEvent('durationchange', duration);
	}
	function onProgress() {
		if (!player) return;

		progress = [[0, player.getVideoLoadedFraction() * player.getDuration()]];
		dispatchEvent('progress', progress);
	}

	export function play() {
		if (!player) {
			return;
		}

		player.playVideo();
	}
	export function pause() {
		if (!player) {
			return;
		}

		player.pauseVideo();
	}

	onMount(() => {
		const intervalId = setInterval(() => {
			onTimeUpdate();
			onProgress();
		}, 1000);
		return () => {
			clearInterval(intervalId);
			player?.destroy();
		};
	});
</script>

<div bind:this={videoElement} class={twMerge('h-full w-full bg-black', className)} />
