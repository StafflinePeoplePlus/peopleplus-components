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
		transition:fly={{ x: '100%', duration: 200 }}
		class={twMerge(
			'fixed inset-0 z-50 overflow-y-auto transition-transform duration-300 flex justify-end',
			overlayClass,
		)}
	>
		<div
			class={twMerge('bg-white p-4 pb-20 shadow-lg', className)}
			{...$$restProps}
			use:clickOutside
			on:click_outside={handleClickOutside}
		>
			<slot />
		</div>
	</div>
{/if}
