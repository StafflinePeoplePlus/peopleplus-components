<script lang="ts">
	import { YouTubePlayer, FullscreenButton, ScrubBar, VideoPlayer, VolumeControl } from '$lib';

	let playerElement: HTMLElement | undefined = $state(undefined);
	let playing = $state(false);
	let player: YouTubePlayer = $state();
	let volume = $state(0.5);
	let duration: number | undefined = $state(undefined);
	let currentTime = $state(0);
	let buffered: [number, number][] = $state([]);
</script>

<VideoPlayer
	bind:element={playerElement}
	class="-mx-6 h-[400px] w-screen sm:mx-0 sm:w-[600px] sm:max-w-full"
	{playing}
	on:play={() => player.play()}
	on:pause={() => player.pause()}
>
	{#snippet top()}
		<div >
			<h2 class="text-center text-lg">Never Gonna Give You Up</h2>
		</div>
	{/snippet}

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

	{#snippet bottom()}
		<div  class="flex items-center gap-3 sm:gap-6">
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
	{/snippet}
</VideoPlayer>
