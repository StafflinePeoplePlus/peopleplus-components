<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div
	class={twMerge(
		'mr-2 inline-flex rounded border border-primary-400 bg-primary-100 px-1 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-700 dark:text-primary-100',
		className
	)}
	{...$$restProps}
>
	<slot />
</div>
