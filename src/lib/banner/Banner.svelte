<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { Button, Typography } from 'pp-svelte-components';

	type $$Props = SvelteHTMLElements['section'];

	let className: $$Props['class'] = undefined;
	export { className as class };

	let showBanner = true;
</script>

{#if showBanner}
	<section
			class={twMerge(
		'mx-auto mb-16 mt-6 max-w-screen-2xl items-center gap-4 bg-amber-50 p-2 sm:p-4 lg:flex',
		className
	)}
			{...$$restProps}
	>
		<slot />
	</section>


	<div>
		<div class="relative h-28 rounded-lg bg-cover bg-center sm:h-40 lg:h-20 lg:w-64">
			<img
					src="/jumbotron.jpg" alt=""
					class="absolute inset-0 h-full w-full rounded-lg object-cover object-center"
			/>
		</div>

		<div class="space-y-1">
			<Typography variant="sub-heading">'The Lyrics, The Music & The Money'</Typography>
			<Typography variant="body">
				Introducing our latest course! Unravel the complex world of music industry economics and
				understand the artistry behind creating impactful lyrics.
			</Typography>
		</div>

		<div class="flex gap-4 max-lg:mt-2 lg:w-1/2 xl:w-1/4">
			<Button href="/courses" class="w-full">View Course</Button>
			<Button variant="secondary" class="h-12" on:click={() => showBanner = false}>
			<span aria-hidden="true">&times;</span>
				<span class="sr-only">Close banner</span>
			</Button>
		</div>
	</div>
{/if}
