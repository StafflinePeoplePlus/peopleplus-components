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
		'w-full rounded-xl border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800',
		className
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</section>
