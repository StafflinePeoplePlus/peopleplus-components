<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		use?: UseActions;
		class?: string;
		children?: import('svelte').Snippet;
	};

	let { class: className = undefined, use = [], children, ...rest }: Props = $props();
</script>

<div
	class={twMerge('text-xs font-medium text-red-700 dark:text-red-400', className)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</div>
