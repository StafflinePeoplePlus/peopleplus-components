<script lang="ts">
	import Swiper, { Navigation } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import { onMount } from 'svelte';
	import { BROWSER } from 'esm-env';

	let className = '';
	export { className as class };
	/**
	 * Page to link out to when JavaScript is disabled and the user clicks the next button
	 */
	export let viewMoreHref: string | undefined = undefined;
	type Item = $$Generic;
	export let items: Item[];
	export let itemClass = '';

	let carouselEl: HTMLElement | undefined = undefined;
	let navButtonNext: HTMLElement | undefined = undefined;
	let navButtonPrev: HTMLElement | undefined = undefined;

	onMount(() => {
		if (!carouselEl) {
			return;
		}

		const instance = new Swiper(carouselEl, {
			modules: [Navigation],
			slidesPerView: 'auto',

			navigation: {
				nextEl: navButtonNext,
				prevEl: navButtonPrev
			}
		});
		return () => {
			instance.destroy();
		};
	});
</script>

<div bind:this={carouselEl} class="relative swiper select-none {className}">
	<ul class="swiper-wrapper">
		{#each items as item}
			<li class="swiper-slide {itemClass}">
				<slot {item} />
			</li>
		{/each}
	</ul>

	{#if BROWSER}
		<button bind:this={navButtonPrev} class="swiper-button-prev !text-gray-300 drop-shadow">
			<span class="sr-only">Previous</span>
		</button>
		<button bind:this={navButtonNext} class="swiper-button-next !text-gray-300 drop-shadow">
			<span class="sr-only">Next</span>
		</button>
	{:else if viewMoreHref != null}
		<a href={viewMoreHref} class="view-more swiper-button-next !text-gray-300 drop-shadow">
			<span class="sr-only">View More</span>
		</a>
	{/if}
</div>

<style>
	.view-more {
		/* When the user has javascript disabled (or it has yet to load), the view more button will
		be shown to allow the user to still see all items in the carousel, albeit in a different
		view. We delay the visibility of this for a second so that javascript users don't see an
		arrow appear briefly then dissapear if there are not enough carousel items to require an
		arrow  */
		opacity: 0;
		animation: fadeIn 150ms 1000ms forwards;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
