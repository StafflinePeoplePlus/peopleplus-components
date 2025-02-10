<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	
	interface Props {
		class?: string | undefined;
		use?: UseActions;
		children?: import('svelte').Snippet;
	}

	let { class: className = undefined, use = [], children }: Props = $props();
</script>

<div
	class={twMerge(
		'h-full w-full animate-pulse rounded-full bg-primary-400 px-8 py-2 text-center text-xs font-medium leading-none text-white dark:bg-primary-900 dark:text-primary-200',
		className,
	)}
	use:actions={use}
>
	{@render children?.()}
</div>
