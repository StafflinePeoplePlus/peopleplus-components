<script lang="ts">
	import { onMount } from 'svelte';
	import { BROWSER } from 'esm-env';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	type Item = $$Generic;
	export let items: Item[];
	export let itemClass = '';

	let containerEl: HTMLElement | undefined = undefined;
	let dragging = false;
	let mounted = false;
	let x = 0;
	let maxX = 0;
	let itemWidth = 0;
	let totalVisisble = 0;
	let visibleRange: [number, number] = [0, items.length - 1];
	$: translation = BROWSER ? `translateX(-${x}px)` : undefined;

	function updateCachedValues(el: HTMLElement) {
		const scrollWidth = el.scrollWidth;
		const clientWidth = el.clientWidth;
		const paddingRight = parseFloat(getComputedStyle(el).paddingRight);
		const paddingLeft = parseFloat(getComputedStyle(el).paddingLeft);
		const itemBoundsX = scrollWidth - paddingLeft - paddingRight;
		maxX = scrollWidth - clientWidth;
		itemWidth = itemBoundsX / items.length;
		totalVisisble = Math.max(Math.floor((clientWidth - paddingLeft) / itemWidth), 1);
	}

	onMount(() => {
		if (!containerEl) {
			return;
		}
		updateCachedValues(containerEl);

		// If the user scrolled before the script loaded, restore their position
		if (containerEl.scrollLeft != 0) {
			x = containerEl.scrollLeft;
			containerEl.scrollLeft = 0;
			updateItemIndex((index) => index);
		}

		visibleRange = [0, totalVisisble - 1];

		setTimeout(() => {
			mounted = true;
		}, 0);
	});

	function clamp(value: number, min: number, max: number): number {
		return Math.min(Math.max(value, min), max);
	}

	function updateItemIndex(update: (index: number) => number) {
		const currentIndex = Math.round(x / itemWidth);
		const index = clamp(update(currentIndex), 0, items.length - 1);
		x = clamp(index * itemWidth, 0, maxX);

		const newIndex = Math.round(x / itemWidth);
		if (newIndex != visibleRange[0]) {
			visibleRange = [newIndex, newIndex + totalVisisble - 1];
		}
	}

	function stopDragging() {
		if (!dragging) {
			return;
		}

		dragging = false;
		updateItemIndex((index) => index);
	}

	function isInRange(range: [number, number], value: number): boolean {
		return value >= range[0] && value <= range[1];
	}
</script>

<svelte:window
	on:pointermove={(evt) => {
		if (!dragging) {
			return;
		}

		x = clamp(x - evt.movementX, 0, maxX);
	}}
	on:pointerup={stopDragging}
	on:pointercancel={stopDragging}
/>

<ul
	bind:this={containerEl}
	class={twMerge(
		'flex select-none relative touch-pan-y touch-pinch-zoom',
		BROWSER ? 'overflow-x-hidden' : 'overflow-x-auto',
		className
	)}
	on:pointerdown={(evt) => {
		if (evt.button != 0) {
			return;
		}

		evt.preventDefault();
		dragging = true;
		updateCachedValues(evt.currentTarget);
	}}
>
	{#each items as item, index}
		<li
			class={twMerge('flex-shrink-0', !dragging && mounted && 'transition duration-300', itemClass)}
			style:transform={translation}
			aria-hidden={isInRange(visibleRange, index) ? 'false' : 'true'}
			aria-label="Item {index + 1}"
		>
			<slot {item} {dragging} />
		</li>
	{/each}

	{#if BROWSER}
		<div class="absolute inset-0 pointer-events-none flex items-center justify-between">
			<button
				type="button"
				class="pointer-events-auto text-gray-300 drop-shadow disabled:opacity-50"
				disabled={visibleRange[0] === 0}
				on:click={() => updateItemIndex((index) => index - 1)}
			>
				<span class="sr-only">Previous Item</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-12 h-12"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<button
				type="button"
				class="pointer-events-auto text-gray-300 drop-shadow"
				disabled={visibleRange[1] === items.length - 1}
				on:click={() => updateItemIndex((index) => index + 1)}
			>
				<span class="sr-only">Next Item</span>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="currentColor"
					class="w-12 h-12"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		</div>

		<div class="sr-only" aria-live="polite" aria-atomic="true">
			{#if visibleRange[0] === visibleRange[1]}
				Item {visibleRange[0] + 1} of {items.length}
			{:else}
				Items {visibleRange[0] + 1} to {visibleRange[1] + 1} of {items.length}
			{/if}
		</div>
	{/if}
</ul>
