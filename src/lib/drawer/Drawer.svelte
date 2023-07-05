<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import Button from '$lib/Button.svelte';
	import { fly } from 'svelte/transition';

	export let open = false;

	function closeDrawer() {
		open = false;
	}

	type $$Props = SvelteHTMLElements['div'];

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

{#if open}
	<div
		tabindex="-1"
		transition:fly={{ x: '100%', duration: 300 }}
		class={twMerge(
			'fixed bottom-0 right-0 top-0 z-50 h-full w-80 overflow-y-auto border bg-white p-4 pt-2 shadow-xl dark:border-gray-600 dark:bg-gray-800',
			className
		)}
		{...$$restProps}
	>
		<div class="flex justify-end">
			<Button
				on:click={closeDrawer}
				variant="secondary"
				class="h-8 p-3 text-gray-500"
				data-testId="closeDrawer"
			>
				&times;
				<span class="sr-only">Close</span>
			</Button>
		</div>
		<div>
			<slot />
		</div>
	</div>
{/if}
