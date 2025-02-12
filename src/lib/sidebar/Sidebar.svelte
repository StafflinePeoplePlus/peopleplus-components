<script lang="ts">
	import { actions, type UseActions } from '../actions';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		class?: string | undefined;
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let { class: className = undefined, use = [], children, ...rest }: Props = $props();
</script>

<aside
	class={twMerge(
		'z-10 flex h-full w-72 max-w-[100vw] shrink-0 flex-col overflow-y-auto bg-white p-4 shadow-lg dark:bg-gray-800 dark:text-white md:shadow',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</aside>
