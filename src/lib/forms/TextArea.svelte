<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLTextareaAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<textarea
	{...$$restProps}
	class={twMerge('w-full block focus:outline-none py-2.5 bg-transparent', className)}
/>
