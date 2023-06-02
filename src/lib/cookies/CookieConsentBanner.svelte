<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
	import { createEventDispatcher } from 'svelte';
	import { slide, fade } from 'svelte/transition';
	import type { CookieCategory } from './types';
	import CookieConsentCategory from './CookieConsentCategory.svelte';
	import { twMerge } from 'tailwind-merge';

	const dispatch = createEventDispatcher();

	let className: string | undefined = undefined;
	export { className as class };
	export let categories: CookieCategory[];
	export let cookiePolicy: string | undefined = undefined;

	let expanded = false;
</script>

<section
	class={twMerge(
		'absolute inset-x-0 bottom-0 max-h-[calc(100%-2rem)] overflow-auto border-t border-gray-300 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800',
		className
	)}
	transition:fade|local
>
	<div class="flex flex-col gap-4 md:flex-row md:items-center">
		<div class="grow">
			<Typography variant="sub-heading" as="h2">Cookie consent</Typography>
			<Typography variant="body" class="mt-3 max-w-prose">
				We use necessary cookies to make our site work. We'd also like to set analytics cookies that
				help us make improvements by measuring how you use the site. These will be set only if you
				accept.
			</Typography>
		</div>
		<div
			class={twMerge('grid grid-cols-2 gap-4 md:flex md:flex-col md:gap-2', expanded && 'hidden')}
		>
			<Button variant="secondary" type="button" class="md:w-56" on:click={() => dispatch('accept')}>
				<span>Accept all <span class="hidden md:inline">cookies</span></span>
			</Button>
			<Button
				class="md:w-56"
				type="button"
				on:click={() => (expanded = !expanded)}
				aria-expanded={expanded ? 'true' : 'false'}
				aria-controls="consent-content"
			>
				<span>
					{#if expanded}
						Cancel
					{:else}
						Customise <span class="hidden md:inline">cookies</span>
					{/if}
				</span>
			</Button>
		</div>
	</div>
	{#if expanded}
		<div transition:slide|local class="max-w-prose" id="consent-content">
			{#if cookiePolicy}
				<Typography variant="body" class="mt-4">
					For more detailed information about the cookies we use, see our <a
						href={cookiePolicy}
						class="font-semibold text-primary-500 hover:underline">Cookie policy</a
					>.
				</Typography>
			{/if}

			<div class="divide-y dark:divide-gray-700">
				<div class="mb-8">
					<div class="mt-4 grid grid-cols-2 gap-4">
						<Button variant="secondary" type="button" on:click={() => dispatch('accept')}>
							<span>Accept all <span class="hidden md:inline">cookies</span></span>
						</Button>
						<Button variant="secondary" type="button" on:click={() => dispatch('reject')}>
							<span>Reject all <span class="hidden md:inline">cookies</span></span>
						</Button>
					</div>
				</div>

				{#each categories as category}
					<CookieConsentCategory
						class="py-6 last:pb-0"
						name={category.name}
						title={category.title}
						body={category.body}
						required={category.required}
						cookies={category.cookies}
					/>
				{/each}

				<div class="grid grid-cols-2 gap-4 pt-8 md:block">
					<Button
						variant="primary"
						type="button"
						on:click={() => {
							expanded = false;
							dispatch('save');
						}}
					>
						Save and close
					</Button>
					<Button
						class="md:hidden"
						variant="secondary"
						type="button"
						on:click={() => {
							expanded = false;
						}}
					>
						Cancel
					</Button>
				</div>
			</div>
		</div>
	{/if}
</section>
