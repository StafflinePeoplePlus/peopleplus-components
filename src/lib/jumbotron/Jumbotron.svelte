<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section
	class={twMerge(
		'relative z-0 h-full space-y-8 bg-gray-700 p-16 text-center text-white lg:p-48',
		className
	)}
	{...$$restProps}
>
	<slot />
</section>
