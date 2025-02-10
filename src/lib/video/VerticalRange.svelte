<script lang="ts">
	interface Props {
		value?: number;
		min?: number;
		max?: number;
		label?: string | undefined;
	}

	let {
		value = $bindable(0),
		min = 0,
		max = 1,
		label = undefined
	}: Props = $props();

	let trackHeight = $state(1);
</script>

<div class="relative flex h-32 w-5 items-center justify-center">
	<div class="absolute inset-y-0 w-1 rounded-full bg-white/20" bind:clientHeight={trackHeight}></div>
	<div
		class="absolute bottom-0 w-1 rounded-full bg-primary-600"
		style:height="{(value / max) * trackHeight}px"
	></div>
	<input
		type="range"
		{min}
		{max}
		step="any"
		bind:value
		class="h-1 w-40 -rotate-90 appearance-none bg-transparent range-thumb:h-5 range-thumb:w-5 range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none range-thumb:bg-primary-600 range-thumb:shadow-md"
		aria-label={label}
	/>
</div>
