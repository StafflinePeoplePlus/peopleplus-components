<script lang="ts">
	import type {SvelteHTMLElements} from 'svelte/elements';
	import {twMerge} from 'tailwind-merge';
	import Button from '$lib/Button.svelte';

	export let open = false;

	type $$Props = SvelteHTMLElements['div'];

	let className: $$Props['class'] = undefined;
	export {className as class};
</script>

<div
		class:translate-x-full={!open}
		tabindex="-1"
		class={twMerge(
		'fixed bottom-0 right-0 top-0 z-50 h-full w-80 overflow-y-auto bg-white p-4 pt-2 transition-transform dark:bg-gray-800 shadow-xl border',
		className
	)}
		{...$$restProps}
>
	<div class="flex justify-end">
		<Button
				on:click={() => (open = false)}
				variant="secondary"
				class="p-3 h-8 text-gray-500"
		>
			&times;
		</Button>
	</div>
	<div>
		<slot />
	</div>
</div>

