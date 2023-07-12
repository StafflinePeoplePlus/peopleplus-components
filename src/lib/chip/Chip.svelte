<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['div'] & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let use: UseActions = [];
</script>

<div
	class={twMerge(
		'inline-flex rounded border border-primary-400 bg-primary-100 px-1 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-700 dark:text-primary-100',
		className,
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</div>
