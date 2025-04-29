<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['ol'] & {
		use?: UseActions;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let { class: className = undefined, use = [], children, ...rest }: Props = $props();
</script>

<ol
	class={twMerge(
		'flex items-center gap-x-1 rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800 md:gap-x-3',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</ol>
