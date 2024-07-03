<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { clickOutside } from './clickOutside.js';
	import { fly } from 'svelte/transition';

	let className = '';
	export { className as class };
	export let overlayClass = '';
	export let open = false;
	export let disableClickOutside = false;
	export let onClose: (() => void) | null | undefined = undefined;

	function handleClickOutside(): void {
		if (!disableClickOutside) {
			if (onClose) {
				onClose();
			} else {
				open = false;
			}
		}
	}
</script>

{#if open}
	<div
		tabindex="-1"
		class={twMerge('fixed inset-0 z-40 flex justify-end overflow-y-auto', overlayClass)}
	>
		<div transition:fly={{ x: '100%', duration: 200 }}>
			{#if disableClickOutside}
				<div
					class={twMerge('bg-white p-4', className)}
					class:translate-x-100={open != null}
					{...$$restProps}
				>
					<slot />
				</div>
			{:else}
				<div
					class={twMerge('bg-white p-4', className)}
					{...$$restProps}
					use:clickOutside={handleClickOutside}
				>
					<slot />
				</div>
			{/if}
		</div>
	</div>
{/if}
