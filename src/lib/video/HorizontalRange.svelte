<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const dispatchEvent = createEventDispatcher();

	let className = '';
	export { className as class };
	export let max = 1;
	export let value = 0;
	export let highlightRanges: [number, number][] = [];
	export let disabled = false;

	let scrubbing = false;
	export let scrubValue = 0;
	let trackWidth = 0;

	$: if (!scrubbing) {
		scrubValue = value;
	}
</script>

<div class={twMerge('relative flex items-center', className)}>
	<div class="absolute inset-x-0 h-1 rounded-full bg-white/20" bind:clientWidth={trackWidth} />
	{#each highlightRanges as [start, end]}
		<div
			class="absolute left-0 h-1 rounded-full bg-white/50"
			style:left="{(start / max) * trackWidth}px"
			style:width="{((end - start) / max) * trackWidth}px"
		/>
	{/each}
	<div
		class="absolute left-0 h-1 rounded-full bg-primary-600"
		style:width="{(scrubValue / max) * trackWidth}px"
	/>
	<input
		type="range"
		class="z-10 w-full appearance-none bg-transparent range-thumb:h-5 range-thumb:w-5 range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none range-thumb:bg-primary-600 range-thumb:shadow-md range-thumb:disabled:bg-gray-400"
		step="any"
		min="0"
		{max}
		{disabled}
		bind:value={scrubValue}
		on:input={() => {
			scrubbing = true;
		}}
		on:change={() => {
			scrubbing = false;
			value = scrubValue;
			dispatchEvent('change', scrubValue);
		}}
	/>
</div>
