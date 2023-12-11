<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: {
			placement: 'bottom-start',
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true,
	});

	let className = '';
	export { className as class };
	export let tooltipClass = '';
</script>

<div {...$trigger} class={twMerge('w-fit', className)} use:trigger {...$$restProps}>
	<slot />
</div>

{#if $open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class={twMerge('z-10 rounded-lg bg-white p-2 border', tooltipClass)}
	>
		<div {...$arrow} use:arrow class="border-l border-t" />
		<slot name="tooltip" />
	</div>
{/if}
