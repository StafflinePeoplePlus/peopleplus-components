<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import {Button} from "$lib/index";
	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: {
			placement: 'top',
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true,
	});

	let className = "";
	export { className as class };
	export let tooltipClass = '';
</script>

<button type="button" {...$trigger} use:trigger class={className} 	{...$$restProps}>
	<slot />
</button>

{#if $open}
	<div
		{...$content}
		use:content
		transition:fade={{ duration: 100 }}
		class={twMerge(
			'z-10 rounded-lg bg-white shadow',tooltipClass)}
	>
		<div {...$arrow} use:arrow class="border-l" />
		<slot name="tooltip" />
	</div>
{/if}
