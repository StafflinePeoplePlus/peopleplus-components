<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = SvelteHTMLElements['section'] & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let use: UseActions = [];
</script>

<section
	class={twMerge(
		'relative z-0 h-full space-y-8 bg-gray-700 p-16 text-center text-white lg:p-48',
		className
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</section>
