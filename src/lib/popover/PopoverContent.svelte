<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { PopoverInstance } from './action';
	import PopoverArrow from './PopoverArrow.svelte';
	import { scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	let className: string | undefined = undefined;
	export { className as class };
	export let popover: PopoverInstance;
	export let arrow = true;
	const origin = {
		top: 'origin-top',
		bottom: 'origin-bottom',
		left: 'origin-left',
		right: 'origin-right'
	};
</script>

{#if $popover.expanded}
	<div
		use:popover.content
		class={twMerge(
			'rounded-lg border border-gray-200 bg-white p-2 text-gray-900 shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white',
			origin[$popover.staticSide],
			className
		)}
		in:scale={{ easing: backOut, start: 0.75, duration: 300 }}
		out:scale={{ easing: backIn, start: 0.75, duration: 300 }}
	>
		{#if arrow}
			<PopoverArrow {popover} />
		{/if}
		<slot />
	</div>
{/if}
