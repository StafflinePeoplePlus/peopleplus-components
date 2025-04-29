<script lang="ts">
	import {
		CloudflareStreamPlayer,
		FullscreenButton,
		ScrubBar,
		VideoPlayer,
		VolumeControl,
	} from '$lib';

	let playerElement: HTMLElement | undefined = $state(undefined);
	let playing = $state(false);
	let player: CloudflareStreamPlayer | undefined = $state();
	let volume = $state(1);
	let duration: number | undefined = $state(undefined);
	let currentTime = $state(0);
	let buffered: [number, number][] = $state([]);
</script>

<VideoPlayer
	bind:element={playerElement}
	class="-mx-6 h-[400px] w-screen sm:mx-0 sm:w-[600px] sm:max-w-full"
	{playing}
	on:play={() => {
		if (player) player.play();
	}}
	on:pause={() => {
		if (player) player.pause();
	}}
>
	{#snippet top()}
		<div>
			<h2 class="text-center text-lg">Big Buck Bunny</h2>
		</div>
	{/snippet}

	<CloudflareStreamPlayer
		bind:this={player}
		code="j8h7q0ly0igrpwgg"
		videoId="4920d2fd1fde191adfda65f3b7453282"
		poster="https://customer-j8h7q0ly0igrpwgg.cloudflarestream.com/4920d2fd1fde191adfda65f3b7453282/thumbnails/thumbnail.jpg?time=1s"
		preload
		controls={false}
		{volume}
		bind:playing
		bind:duration
		bind:currentTime
		bind:progress={buffered}
	/>

	{#snippet bottom()}
		<div class="flex items-center gap-3 sm:gap-6">
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
