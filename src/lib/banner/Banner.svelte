<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { Button } from 'pp-svelte-components';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };

	let showBanner = true;
</script>

{#if showBanner}
	<section
			class={twMerge(
		'bg-white shadow-sm mx-auto max-w-screen-2xl md:flex justify-between items-center gap-4 p-2 sm:p-4',
		className
	)}
			{...$$restProps}
	>
		<slot />
		<Button variant="secondary" class="h-12 max-sm:w-full max-md:my-2" on:click={() => showBanner = false}>
			<span aria-hidden="true" class="max-sm:hidden">&times;</span>
			<span aria-hidden="true" class="sm:hidden">Dismiss</span>
			<span class="sr-only">Close banner</span>
		</Button>
	</section>
{/if}
