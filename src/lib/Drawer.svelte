<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	export let absolute = false;
	export let open = false;

	type $$Props = SvelteHTMLElements['div'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class="bottom-0 right-0 top-0 z-40 {absolute ? 'absolute' : 'fixed'}" {...$$restProps}>
	<div
		id="drawer-right-example"
		class={twMerge(
		'h-full w-80 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800',
		className
	)}
		class:translate-x-full={!open}
		tabindex="-1"
		aria-labelledby="drawer-right-label"
	>
		<h5
			id="drawer-right-label"
			class="mb-4 inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400"
		>
			Right drawer
		</h5>
		<button
			type="button"
			aria-controls="drawer-right-example"
			class="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
			on:click={() => (open = false)}
		>
			x
			<span class="sr-only">Close menu</span>
		</button>

		<slot />
	</div>
</div>
