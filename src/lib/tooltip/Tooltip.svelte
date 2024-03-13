<script lang="ts">
	import type { FloatingPlacement } from '$lib/floating';
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	export let placement: FloatingPlacement | undefined = 'top';
	export let tooltipClass: string | undefined = undefined;
	export let openDelay: number = 300;
	export let closeDelay: number = 0;
	export let closeOnPointerDown: boolean = true;
	export let allowHoverableContent: boolean = false;

	let className: string | undefined = undefined;
	export { className as class };

	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: {
			placement,
		},
		openDelay,
		closeDelay,
		closeOnPointerDown,
		disableHoverableContent: !allowHoverableContent,
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
		class={twMerge(
			'z-50 rounded-lg border border-gray-200 bg-white p-2 text-black shadow dark:border-gray-600 dark:bg-gray-700 dark:text-white',
			tooltipClass,
		)}
	>
		<div {...$arrow} use:arrow class="border-l border-t border-gray-200 dark:border-gray-600" />
		<slot name="tooltip" />
	</div>
{/if}
