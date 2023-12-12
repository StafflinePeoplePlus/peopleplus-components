<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	export let placement:
		| 'top'
		| 'top-start'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end'
		| undefined = 'top';
	export let tooltipClass: string | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };

	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: {
			placement,
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true,
	});
</script>

<div class={twMerge('w-fit', className)} {...$trigger} use:trigger>
	<slot />
</div>

{#if $open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class={twMerge('z-10 rounded-lg shadow p-2 bg-white', tooltipClass)}
	>
		<div {...$arrow} use:arrow class="border-t border-l" />
		<slot name="tooltip" />
	</div>
{/if}
