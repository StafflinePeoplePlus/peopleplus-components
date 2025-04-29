<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { Button, actions, type UseActions } from '$lib';

	type Props = SvelteHTMLElements['section'] & {
		dismissable?: boolean;
		use?: UseActions;
		class?: string;
		children?: import('svelte').Snippet;
		onDismiss?: () => void;
	};

	let {
		class: className = undefined,
		dismissable = false,
		use = [],
		children,
		onDismiss,
		...rest
	}: Props = $props();
</script>

<section
	class={twMerge(
		'mx-auto max-w-(--breakpoint-2xl) items-center justify-between gap-4 bg-white p-2 shadow-xs dark:bg-gray-800 sm:p-4 md:flex',
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
			onclick={() => {
				if (onDismiss) onDismiss();
			}}
		>
			<span aria-hidden="true" class="max-md:hidden">&times;</span>
			<span aria-hidden="true" class="md:hidden">Dismiss</span>
			<span class="sr-only">Close banner</span>
		</Button>
	{/if}
</section>
