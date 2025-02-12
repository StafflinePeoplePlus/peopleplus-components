<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes } from 'svelte/elements';
	import { actions, type UseActions } from '$lib/actions';

	type Props = HTMLAttributes<HTMLDivElement> & {
		use?: UseActions;
		class?: string;
		start?: import('svelte').Snippet;
		children?: import('svelte').Snippet;
		end?: import('svelte').Snippet;
	};

	let { class: className = undefined, use = [], start, children, end, ...rest }: Props = $props();
</script>

<div
	class={twMerge(
		'flex w-full items-center gap-x-2.5 overflow-clip rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 transition focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:border-primary-400 dark:focus-within:ring-primary-400',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render start?.()}
	{@render children?.()}
	{@render end?.()}
</div>

<style lang="postcss">
	div > :global(:first-child) {
		@apply pl-2.5;
	}
	div > :global(:last-child) {
		@apply pr-2.5;
	}
</style>
