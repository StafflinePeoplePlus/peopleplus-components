<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	export let placement = 'top';
	export let tooltipClass = '';
	export { className as class };
	let className: string | undefined = undefined;

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
		class={twMerge('z-10 rounded-lg bg-white shadow p-2', tooltipClass)}
	>
		<div {...$arrow} use:arrow class="border-t border-l" />
		<slot name="tooltip" />
	</div>
{/if}
