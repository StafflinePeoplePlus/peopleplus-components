<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { fly } from 'svelte/transition';
	import { clickOutside } from './clickOutside.js';
	let className = '';
	export { className as class };
	export let overlayClass = '';
	export let open = false;

	function handleClickOutside() {
		open = false;
	}
</script>

{#if open}
	<div
		tabindex="-1"
		transition:fly={{ x: '100%', duration: 300 }}
		class={twMerge('fixed bottom-0 right-0 top-0 z-50 h-full', overlayClass)}
	>
		<div
			class={twMerge(
				'h-full p-4 pt-2 overflow-y-auto bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800 border w-80',
				className,
			)}
			{...$$restProps}
			use:clickOutside
			on:click_outside={handleClickOutside}
		>
			<slot />
		</div>
	</div>
{/if}
