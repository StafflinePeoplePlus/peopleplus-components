<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher, onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { useYouTubeIFrameAPI } from './youtubePlayer';

	const dispatchEvent = createEventDispatcher();

	
	interface Props {
		class?: string;
		videoId: string;
		autoplay?: boolean;
		loop?: boolean;
		muted?: boolean;
		controls?: boolean;
		playing?: boolean;
		volume?: number;
		duration?: number | undefined;
		currentTime?: number;
		progress?: [number, number][];
	}

	let {
		class: className = '',
		videoId,
		autoplay = false,
		loop = false,
		muted = false,
		controls = true,
		playing = $bindable(false),
		volume = 1,
		duration = $bindable(undefined),
		currentTime = $bindable(0),
		progress = $bindable([])
	}: Props = $props();

	let videoElement: HTMLElement | undefined = $state(undefined);
	const YouTubePlayer = useYouTubeIFrameAPI();



	let playerTime = $state(currentTime);

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
		if (!player || typeof player.getCurrentTime !== 'function') return;
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
	let player =
		$derived(videoElement && $YouTubePlayer
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
							player?.setVolume(volume * 100);
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
			: null);
	run(() => {
		if (player?.setVolume) {
			player.setVolume(volume * 100);
		}
	});
	run(() => {
		if (player && playerTime !== currentTime) {
			player.seekTo(currentTime, true);
		}
	});
</script>

<div bind:this={videoElement} class={twMerge('h-full w-full bg-black', className)}></div>
