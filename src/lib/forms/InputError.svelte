<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLSpanElement> & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let use: UseActions = [];
</script>

<div
	class={twMerge('font-semibold text-red-700 dark:text-red-400', className)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</div>
