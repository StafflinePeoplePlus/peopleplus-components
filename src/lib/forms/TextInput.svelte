<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = Omit<HTMLInputAttributes, 'type'>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<input
	{...$$restProps}
	type="text"
	class={twMerge('w-full block focus:outline-none py-2.5 bg-transparent', className)}
/>
