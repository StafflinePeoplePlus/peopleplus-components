<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { createLabel } from '@melt-ui/svelte';
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLLabelAttributes & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let use: UseActions = [];

	const {
		elements: { root },
	} = createLabel();
</script>

<label
	class={twMerge('inline-block text-sm font-medium text-gray-900 dark:text-white', className)}
	use:actions={use}
	{...$$restProps}
	{...$root}
	use:root
>
	<slot />
</label>
