<script lang="ts">
	import {
		CloudflareStreamPlayer,
		FullscreenButton,
		ScrubBar,
		VideoPlayer,
		VolumeControl
	} from '$lib';

	let playerElement: HTMLElement | undefined = undefined;
	let playing = false;
	let player: CloudflareStreamPlayer;
	let volume = 1;
	let duration: number | undefined = undefined;
	let currentTime = 0;
	let buffered: [number, number][] = [];
</script>

<VideoPlayer
	bind:element={playerElement}
	class="h-[400px] w-[600px]"
	{playing}
	on:play={() => player.play()}
	on:pause={() => player.pause()}
>
	<div slot="top">
		<h2 class="text-center text-lg">Big Buck Bunny</h2>
	</div>

	<CloudflareStreamPlayer
		bind:this={player}
		code="j8h7q0ly0igrpwgg"
		videoId="4920d2fd1fde191adfda65f3b7453282"
		preload
		controls={false}
		{volume}
		bind:playing
		bind:duration
		bind:currentTime
		bind:progress={buffered}
	/>

	<div slot="bottom" class="flex items-center gap-6">
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
