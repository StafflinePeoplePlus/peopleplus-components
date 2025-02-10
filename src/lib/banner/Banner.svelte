<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { Button, actions, type UseActions } from '$lib';
	import { createEventDispatcher } from 'svelte';

	type $$Props = SvelteHTMLElements['section'] & { dismissable?: boolean; use?: UseActions };

	const dispatch = createEventDispatcher<{ dismiss: void }>();

	
	interface Props {
		class?: $$Props['class'];
		dismissable?: boolean;
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		class: className = undefined,
		dismissable = false,
		use = [],
		children,
		...rest
	}: Props = $props();
</script>

<section
	class={twMerge(
		'mx-auto max-w-screen-2xl items-center justify-between gap-4 bg-white p-2 shadow-sm dark:bg-gray-800 sm:p-4 md:flex',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
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
