<script lang="ts">
	export let value = 0;
	export let min = 0;
	export let max = 1;

	let trackHeight = 1;
</script>

<div class="relative flex h-32 w-5 items-center justify-center">
	<div class="absolute inset-y-0 w-1 rounded-full bg-white/20" bind:clientHeight={trackHeight} />
	<div
		class="absolute bottom-0 w-1 rounded-full bg-primary-600"
		style:height="{(value / max) * trackHeight}px"
	/>
	<input
		type="range"
		{min}
		{max}
		step="any"
		bind:value
		class="h-1 w-40 -rotate-90 appearance-none bg-transparent [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-primary-600 [&::-webkit-slider-thumb]:shadow-md"
	/>
</div>
