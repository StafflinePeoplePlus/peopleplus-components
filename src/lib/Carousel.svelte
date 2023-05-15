<script lang="ts">
	import { BROWSER } from 'esm-env';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	type Item = $$Generic;
	export let items: Item[];
	export let itemClass = '';

	let dragging = false;
	let x = 0;
	let index = 0;
	$: translation = BROWSER ? `translateX(-${x}px)` : undefined;

	// Cached values calculated on drag start
	let scrollWidth = 0;
	let clientWidth = 0;
	let paddingRight = 0;
	let paddingLeft = 0;

	function clamp(value: number, min: number, max: number): number {
		return Math.min(Math.max(value, min), max);
	}

	function clampContainer(value: number): number {
		return clamp(value, 0, scrollWidth - clientWidth);
	}

	function updateItemIndex(update: (index: number) => number) {
		const itemBoundsX = scrollWidth - paddingLeft - paddingRight;
		const itemWidth = itemBoundsX / items.length;
		const currentIndex = Math.round(x / itemWidth);
		index = clamp(update(currentIndex), 0, items.length - 1);
		x = clampContainer(index * itemWidth);
	}

	function stopDragging() {
		if (!dragging) {
			return;
		}

		dragging = false;
		updateItemIndex((index) => index);
	}
</script>

<svelte:window
	on:pointermove={(evt) => {
		if (!dragging) {
			return;
		}

		x = clampContainer(x - evt.movementX);
	}}
	on:pointerup={stopDragging}
	on:pointercancel={stopDragging}
/>

<ul
	class={twMerge(
		'flex select-none overflow-hidden relative touch-pan-y touch-pinch-zoom',
		className
	)}
	on:pointerdown={(evt) => {
		if (evt.button != 0) {
			return;
		}

		evt.preventDefault();
		dragging = true;

		scrollWidth = evt.currentTarget.scrollWidth;
		clientWidth = evt.currentTarget.clientWidth;
		paddingRight = parseFloat(getComputedStyle(evt.currentTarget).paddingRight);
		paddingLeft = parseFloat(getComputedStyle(evt.currentTarget).paddingLeft);
	}}
>
	{#each items as item}
		<li
			class={twMerge('flex-shrink-0', !dragging && 'transition duration-300', itemClass)}
			style:transform={translation}
		>
			<slot {item} />
		</li>
	{/each}

	<div class="absolute inset-0 pointer-events-none flex items-center justify-between">
		<button
			type="button"
			class="pointer-events-auto text-gray-300 drop-shadow disabled:opacity-50"
			on:click={() => updateItemIndex((index) => index - 1)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-12 h-12"
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
			on:click={() => updateItemIndex((index) => index + 1)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="currentColor"
				class="w-12 h-12"
			>
				<path
					fill-rule="evenodd"
					d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</div>
</ul>
