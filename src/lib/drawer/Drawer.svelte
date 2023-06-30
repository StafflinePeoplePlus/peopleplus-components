<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import Button from '$lib/Button.svelte';

	export let open = false;

	let drawerOpen: boolean;

	function toggleDrawer() {
		open = !open;
	}

	$: {
		drawerOpen = open;
	}

	type $$Props = SvelteHTMLElements['div'];

	let className: $$Props['class'] = undefined;
	export { className as class };

	function closeDrawer() {
		open = false;
	}
</script>

<div
		class:translate-x-full={!open}
		tabindex="-1"
		class={twMerge(
			'fixed bottom-0 right-0 top-0 z-50 h-full w-80 overflow-y-auto border bg-white p-4 pt-2 shadow-xl transition-transform dark:bg-gray-800',
			className
		)}
		{...$$restProps}
>
	<div class="flex justify-end">
		<Button on:click={closeDrawer} variant="secondary" class="h-8 p-3 text-gray-500">
			&times;
			<span class="sr-only">Close</span>
		</Button>
	</div>
	<div>
		<slot />
	</div>
</div>
