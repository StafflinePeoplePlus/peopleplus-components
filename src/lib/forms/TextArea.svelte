<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLTextareaAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let value: $$Props['value'] = undefined;
</script>

<textarea
	{...$$restProps}
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
	bind:value
	on:input
	on:change
/>
