<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLTextareaAttributes & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let value: $$Props['value'] = undefined;
	export let use: UseActions = [];
</script>

<textarea
	{...$$restProps}
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
	bind:value
	use:actions={use}
	on:input
	on:change
/>
