<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { classes } from './classes';

	let className = '';
	export { className as class };
	export let title: string;
	export let subtitle: string | undefined = undefined;
	export let primaryAction: string | undefined = undefined;
	export let primaryActionHref: string | undefined = undefined;
	export let secondaryAction: string | undefined = undefined;
	export let secondaryActionHref: string | undefined = undefined;
	export let image: string | undefined = undefined;
	/**
	 * Use tighter padding top and bottom
	 */
	export let tight = false;

	const dispatch = createEventDispatcher();
</script>

<section class="relative {className}">
	{#if image}
		<img
			data-testid="background-image"
			class="absolute inset-0 w-full h-full object-cover"
			src={image}
			alt=""
			aria-hidden="true"
		/>
	{/if}
	<div
		class={classes(
			'relative px-4 mx-auto max-w-screen-xl text-center z-10',
			tight ? 'py-16 lg:py-24' : 'py-24 lg:py-56',
			image ? 'bg-gray-900/75' : 'bg-gray-700'
		)}
	>
		<slot name="start" />

		<h1
			class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl"
		>
			{title}
		</h1>
		{#if subtitle}
			<p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
				{subtitle}
			</p>
		{/if}
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
			{#if primaryAction}
				<svelte:element
					this={primaryActionHref ? 'a' : 'button'}
					href={primaryActionHref}
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
					on:click={() => dispatch('primaryAction')}
				>
					{primaryAction}
				</svelte:element>
			{/if}
			{#if secondaryAction}
				<svelte:element
					this={secondaryActionHref ? 'a' : 'button'}
					href={secondaryActionHref}
					class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
					on:click={() => dispatch('secondaryAction')}
				>
					{secondaryAction}
				</svelte:element>
			{/if}
		</div>
		<slot />
	</div>
</section>
