<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { createLabel } from '@melt-ui/svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLLabelAttributes & { use?: UseActions };

	
	interface Props {
		class?: $$Props['class'];
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, use = [], children, ...rest }: Props = $props();

	const {
		elements: { root },
	} = createLabel();
</script>

<label
	class={twMerge('inline-block text-sm font-medium text-gray-900 dark:text-white', className)}
	use:actions={use}
	{...rest}
	{...$root}
	use:root
>
	{@render children?.()}
</label>
