<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		class?: string;
		startClass?: string;
		middleClass?: string;
		endClass?: string;
		bottomClass?: string;
		topClass?: string;
		use?: UseActions;
		start?: import('svelte').Snippet;
		middle?: import('svelte').Snippet;
		end?: import('svelte').Snippet;
		bottom?: import('svelte').Snippet;
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		[key: string]: any;
	}

	let {
		class: className = '',
		startClass = '',
		middleClass = '',
		endClass = '',
		bottomClass = '',
		topClass = '',
		use = [],
		start,
		middle,
		end,
		bottom,
		...rest
	}: Props = $props();
</script>

<footer
	class={twMerge('bg-white p-2 text-sm dark:bg-gray-800 sm:p-10', className)}
	use:actions={use}
	{...rest}
>
	<div class={twMerge('flex-row md:flex', topClass)}>
		<div class={twMerge('p-4 md:basis-1/2', startClass)}>
			{@render start?.()}
		</div>
		<div class={twMerge('p-4 md:basis-1/3', middleClass)}>
			{@render middle?.()}
		</div>
		<div class={twMerge('p-4 md:basis-1/4', endClass)}>
			{@render end?.()}
		</div>
	</div>

	<div class={twMerge('mt-4 border-t border-gray-100 pt-5 dark:border-gray-700', bottomClass)}>
		{@render bottom?.()}
	</div>
</footer>
