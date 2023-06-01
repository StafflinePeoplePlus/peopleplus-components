<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLLabelAttributes;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<label
	{...$$restProps}
	class={twMerge('inline-block text-sm font-medium text-gray-900 dark:text-white', className)}
>
	<slot />
</label>
