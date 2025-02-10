<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLTextareaAttributes & { use?: UseActions };
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Events {
		input: Event & { currentTarget: HTMLTextAreaElement };
		change: Event & { currentTarget: HTMLTextAreaElement };
	}

	
	interface Props {
		class?: $$Props['class'];
		value?: $$Props['value'];
		use?: UseActions;
		[key: string]: any
	}

	let { class: className = undefined, value = $bindable(undefined), use = [], ...rest }: Props = $props();
</script>

<textarea
	{...rest}
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
	bind:value
	use:actions={use}
	oninput={bubble('input')}
	onchange={bubble('change')}
></textarea>
