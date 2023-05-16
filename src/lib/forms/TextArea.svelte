<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLTextareaAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<textarea
	{...$$restProps}
	class={twMerge('block w-full bg-transparent py-2.5 focus:outline-none', className)}
/>
