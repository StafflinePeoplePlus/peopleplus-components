<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section
	class={twMerge(
		'w-full rounded-xl border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800',
		className
	)}
	{...$$restProps}
>
	<slot />
</section>
