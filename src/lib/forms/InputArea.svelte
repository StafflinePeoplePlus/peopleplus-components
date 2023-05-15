<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';

	type $$Props = HTMLAttributes<HTMLDivElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	{...$$restProps}
	class={twMerge(
		'flex items-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg transition focus-within:ring-1 focus-within:ring-primary-400 focus-within:border-primary-400 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-within:ring-primary-400 dark:focus-within:border-primary-400 overflow-clip gap-x-2.5',
		className
	)}
>
	<slot name="start" />
	<slot />
	<slot name="end" />
</div>

<style>
	div > :global(:first-child) {
		@apply pl-2.5;
	}
	div > :global(:last-child) {
		@apply pr-2.5;
	}
</style>
