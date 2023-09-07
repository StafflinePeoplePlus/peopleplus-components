<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { PopoverInstance } from './action';
	import { scale } from 'svelte/transition';
	import { backIn, backOut } from 'svelte/easing';

	let className: string | undefined = undefined;
	export { className as class };
	export let popover: Omit<PopoverInstance, 'button'>;
	export let arrow = true;

	const { expanded, content, arrow: arrowEl } = popover;
</script>

{#if $expanded}
	<div
		class={twMerge(
			'rounded-lg border border-gray-200 bg-white p-2 text-gray-900 shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white',
			className,
		)}
		in:scale={{ easing: backOut, start: 0.75, duration: 300 }}
		out:scale={{ easing: backIn, start: 0.75, duration: 300 }}
		use:content
		{...$content}
	>
		{#if arrow}
			<div
				{...$arrowEl}
				use:arrowEl
				class="border-l border-t border-gray-200 dark:border-gray-600"
			/>
		{/if}
		<slot />
	</div>
{/if}
