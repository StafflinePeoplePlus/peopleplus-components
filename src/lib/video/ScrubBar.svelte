<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import HorizontalRange from './HorizontalRange.svelte';
	import { twMerge } from 'tailwind-merge';

	const dispatchEvent = createEventDispatcher();

	let className: string | undefined = undefined;
	export { className as class };
	export let duration: number | undefined = undefined;
	export let currentTime: number;
	export let buffered: [number, number][] = [];

	let scrubTime = 0;

	function formatSeconds(secs: number) {
		const minutes = Math.floor(secs / 60);
		const seconds = Math.round(secs % 60)
			.toString()
			.padStart(2, '0');
		return `${minutes}:${seconds}`;
	}
</script>

<div class={twMerge('flex items-center gap-3 sm:gap-6', className)}>
	<HorizontalRange
		class="grow"
		max={duration}
		value={currentTime}
		highlightRanges={buffered}
		disabled={duration === undefined}
		label="Seek video"
		bind:scrubValue={scrubTime}
		on:change={(evt) => {
			dispatchEvent('seek', evt.detail);
		}}
	/>
	{#if duration}
		<div class="font-mono">
			{formatSeconds(scrubTime)}
			<span class="hidden sm:inline"> / {formatSeconds(duration)}</span>
		</div>
	{/if}
</div>
