<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = Omit<HTMLInputAttributes, 'type'> & {
		use?: UseActions;
		class?: string;
		children?: import('svelte').Snippet;
	};
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events {
		input: Event & { currentTarget: HTMLInputElement };
		change: Event & { currentTarget: HTMLInputElement };
	}

	let {
		class: className = undefined,
		value = $bindable(undefined),
		use = [],
		...rest
	}: Props = $props();
</script>

<input
	{...rest}
	type="text"
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
	bind:value
	use:actions={use}
	oninput={bubble('input')}
	onchange={bubble('change')}
/>
