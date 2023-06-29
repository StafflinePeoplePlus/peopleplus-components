<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<ol
	class={twMerge(
		'flex items-center space-x-1 rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800 md:space-x-3',
		className
	)}
	{...$$restProps}
>
	<slot />
</ol>
