<script lang="ts">
	import { onMount } from 'svelte';
	import { createPopper } from '@popperjs/core';
	import { twMerge } from 'tailwind-merge';
	import type { SvelteHTMLElements } from 'svelte/elements';

	type $$Props = SvelteHTMLElements['div'];

	let className: $$Props['class'] = undefined;
	export { className as class };

	let tooltipVisible = false;
	export let title = '';

	export let bgColor = 'bg-gray-800';

	let referenceElement;
	let popperElement;

	onMount(() => {
		createPopper(referenceElement, popperElement, {
			placement: 'top',
			modifiers: [
				{
					name: 'arrow',
					options: {
						element: '.tooltip-arrow'
					}
				}
			]
		});
	});
</script>

<div class="relative">
	<div
		bind:this={referenceElement}
		on:mouseover={() => (tooltipVisible = true)}
		on:mouseout={() => (tooltipVisible = false)}
	>
		<slot />
	</div>

	{#if tooltipVisible}
		<div
			class={twMerge(`fixed z-50 m-1 rounded p-2 text-sm text-white ${bgColor}`, className)}
			{...$$restProps}
			bind:this={popperElement}
		>
			{title}
		</div>
		<div class={`absolute ml-3 h-3 w-3 rotate-45 transform ${bgColor}`} />
	{/if}
</div>
