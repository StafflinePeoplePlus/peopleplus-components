<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section
	class={twMerge(
		'mr-2 inline-flex items-center rounded bg-primary-100 px-2 py-1 text-sm font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-200',
		className
	)}
	{...$$restProps}
>
	<slot />
</section>
