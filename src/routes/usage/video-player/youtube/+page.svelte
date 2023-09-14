<script lang="ts">
	import { YouTubePlayer, FullscreenButton, ScrubBar, VideoPlayer, VolumeControl } from '$lib';

	let playerElement: HTMLElement | undefined = undefined;
	let playing = false;
	let player: YouTubePlayer;
	let volume = 1;
	let duration: number | undefined = undefined;
	let currentTime = 0;
	let buffered: [number, number][] = [];
</script>

<VideoPlayer
	bind:element={playerElement}
	class="-mx-6 h-[400px] w-screen sm:mx-0 sm:w-[600px] sm:max-w-full"
	{playing}
	on:play={() => player.play()}
	on:pause={() => player.pause()}
>
	<div slot="top">
		<h2 class="text-center text-lg">Never Gonna Give You Up</h2>
	</div>

	<YouTubePlayer
		bind:this={player}
		videoId="dQw4w9WgXcQ"
		controls={false}
		{volume}
		bind:playing
		bind:duration
		bind:currentTime
		bind:progress={buffered}
	/>

	<div slot="bottom" class="flex items-center gap-3 sm:gap-6">
		<ScrubBar
			class="grow"
			{currentTime}
			{duration}
			{buffered}
			on:seek={(evt) => (currentTime = evt.detail)}
		/>
		<VolumeControl bind:volume />
		<FullscreenButton element={playerElement} />
	</div>
</VideoPlayer>
