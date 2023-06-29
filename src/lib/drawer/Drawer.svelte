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
	aria-labelledby="drawer-right-label"
	class={twMerge(
		'fixed bottom-0 right-0 top-0 z-40 h-full w-80 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800 shadow-xl',
		className
	)}
	{...$$restProps}
>
	<Button
			on:click={() => (open = false)}
			variant="secondary"
			class="right-0 absolute"
	>
		&times;
	</Button>

	<slot />
</div>
