<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { Button, actions, type UseActions } from '$lib';
	import { createEventDispatcher } from 'svelte';

	type $$Props = SvelteHTMLElements['section'] & { dismissable?: boolean; use?: UseActions };

	const dispatch = createEventDispatcher<{ dismiss: never }>();

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let dismissable = false;
	export let use: UseActions = [];
</script>

<section
	class={twMerge(
		'mx-auto max-w-screen-2xl items-center justify-between gap-4 bg-white p-2 shadow-sm sm:p-4 md:flex',
		className,
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
	{#if dismissable}
		<Button
			variant="secondary"
			class="h-12 max-md:my-2 max-md:w-full"
			on:click={() => dispatch('dismiss')}
		>
			<span aria-hidden="true" class="max-md:hidden">&times;</span>
			<span aria-hidden="true" class="md:hidden">Dismiss</span>
			<span class="sr-only">Close banner</span>
		</Button>
	{/if}
</section>
