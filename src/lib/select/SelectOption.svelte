<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { actions, type UseActions } from '$lib/actions';
	import { CheckIcon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	interface Props {
		class?: string | null | undefined;
		checkClass?: string | null | undefined;
		selected?: boolean;
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any;
	}

	let {
		class: className = undefined,
		checkClass = undefined,
		selected = false,
		use = [],
		children,
		...rest
	}: Props = $props();
</script>

<button
	class={twMerge(
		'flex w-full items-center gap-1.5 px-2.5 py-1.5 hover:bg-primary-100 hover:text-primary-800 data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:hover:bg-gray-600 dark:hover:text-white dark:data-[highlighted]:bg-gray-600 dark:data-[highlighted]:text-white',
		className,
	)}
	aria-selected={selected ? 'true' : 'false'}
	role="option"
	{...rest}
	use:actions={use}
	onclick={bubble('click')}
	type="button"
>
	<CheckIcon size={16} class={twMerge('shrink-0', !selected && 'opacity-0', checkClass)} />

	{@render children?.()}
</button>
