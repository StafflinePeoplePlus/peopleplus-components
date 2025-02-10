<script lang="ts">
	import type { FloatingPlacement } from '$lib/floating';
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';


	interface Props {
		placement?: FloatingPlacement | undefined;
		tooltipClass?: string | undefined;
		openDelay?: number;
		closeDelay?: number;
		closeOnPointerDown?: boolean;
		allowHoverableContent?: boolean;
		class?: string | undefined;
		children?: import('svelte').Snippet;
		tooltip?: import('svelte').Snippet;
	}

	let {
		placement = 'top',
		tooltipClass = undefined,
		openDelay = 300,
		closeDelay = 0,
		closeOnPointerDown = true,
		allowHoverableContent = false,
		class: className = undefined,
		children,
		tooltip
	}: Props = $props();
	

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
	{@render children?.()}
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
		<div {...$arrow} use:arrow class="border-l border-t border-gray-200 dark:border-gray-600"></div>
		{@render tooltip?.()}
	</div>
{/if}
