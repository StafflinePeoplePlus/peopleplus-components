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
	<div class={twMerge('md:flex flex-row', topClass)}>
		<div class={twMerge('md:basis-1/2 p-4', startClass)}>
			{@render start?.()}
		</div>
		<div class={twMerge('md:basis-1/3 p-4', middleClass)}>
			{@render middle?.()}
		</div>
		<div class={twMerge('md:basis-1/4 p-4', endClass)}>
			{@render end?.()}
		</div>
	</div>

	<div class={twMerge('mt-4 border-t border-gray-100 pt-5 dark:border-gray-700', bottomClass)}>
		{@render bottom?.()}
	</div>
</footer>
