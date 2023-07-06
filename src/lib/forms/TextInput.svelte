<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = Omit<HTMLInputAttributes, 'type'> & { use?: UseActions };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let value: $$Props['value'] = undefined;
	export let use: UseActions = [];
</script>

<input
	{...$$restProps}
	type="text"
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
	bind:value
	use:actions={use}
	on:input
	on:change
/>
