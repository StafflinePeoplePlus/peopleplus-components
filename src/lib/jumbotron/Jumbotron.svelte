<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<section
	class={twMerge(
		'relative z-0 max-w-screen-xl bg-gray-700 px-4 py-24 text-center lg:py-56',
		className
	)}
	{...$$restProps}
>
	<slot />
</section>
