<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type $$Props = HTMLAttributes<HTMLSpanElement>;

	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<div class={twMerge('font-semibold text-red-700 dark:text-red-400', className)}>
	<slot />
</div>
