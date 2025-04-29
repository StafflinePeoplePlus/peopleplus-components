<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { Snippet } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['section'] & {
		use?: UseActions;
		class?: string;
		children?: Snippet;
	};

	let { class: className = undefined, use = [], children, ...rest }: Props = $props();
</script>

<section
	class={twMerge(
		'w-full rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</section>
