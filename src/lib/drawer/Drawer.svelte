<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { fly } from 'svelte/transition';

	type $$Props = SvelteHTMLElements['div'] & { open?: boolean };

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let open = false;
</script>

{#if open}
	<div
		tabindex="-1"
		transition:fly={{ x: '100%', duration: 300 }}
		class={twMerge(
			'fixed bottom-0 right-0 top-0 z-50 h-full w-80 overflow-y-auto border bg-white p-4 pt-2 shadow-xl dark:border-gray-600 dark:bg-gray-800',
			className,
		)}
		{...$$restProps}
	>
		<div>
			<slot />
		</div>
	</div>
{/if}
