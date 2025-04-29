<script lang="ts">
	import { run } from 'svelte/legacy';

	import { createEventDispatcher } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	const dispatchEvent = createEventDispatcher();

	let scrubbing = $state(false);
	interface Props {
		class?: string;
		max?: number;
		value?: number;
		highlightRanges?: [number, number][];
		disabled?: boolean;
		label?: string | undefined;
		scrubValue?: number;
	}

	let {
		class: className = '',
		max = 1,
		value = $bindable(0),
		highlightRanges = [],
		disabled = false,
		label = undefined,
		scrubValue = $bindable(0),
	}: Props = $props();
	let trackWidth = $state(0);

	run(() => {
		if (!scrubbing) {
			scrubValue = value;
		}
	});
</script>

<div class={twMerge('relative flex items-center', className)}>
	<div class="absolute inset-x-0 h-1 rounded-full bg-white/20" bind:clientWidth={trackWidth}></div>
	{#each highlightRanges as [start, end]}
		<div
			class="absolute left-0 h-1 rounded-full bg-white/50"
			style:left="{(start / max) * trackWidth}px"
			style:width="{((end - start) / max) * trackWidth}px"
		></div>
	{/each}
	<div
		class="absolute left-0 h-1 rounded-full bg-primary-600"
		style:width="{(scrubValue / max) * trackWidth}px"
	></div>
	<input
		type="range"
		class="z-10 w-full appearance-none bg-transparent range-thumb:h-5 range-thumb:w-5 range-thumb:appearance-none range-thumb:rounded-full range-thumb:border-none range-thumb:bg-primary-600 range-thumb:shadow-md range-thumb:disabled:bg-gray-400"
		step="any"
		min="0"
		{max}
		{disabled}
		aria-label={label}
		bind:value={scrubValue}
		oninput={() => {
			scrubbing = true;
		}}
		onchange={() => {
			scrubbing = false;
			value = scrubValue;
			dispatchEvent('change', scrubValue);
		}}
	/>
</div>
