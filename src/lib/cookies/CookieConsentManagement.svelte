<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
	import { createEventDispatcher } from 'svelte';
	import CookieConsentCategory from './CookieConsentCategory.svelte';
	import type { CookieCategory } from './types';

	const dispatch = createEventDispatcher<{
		save: Record<string, boolean | undefined>;
	}>();

	export let categories: CookieCategory[];
	export let consent: Record<string, boolean | undefined>;
	export let cookiePolicy: string | undefined = undefined;
</script>

<header class="mb-8">
	<Typography variant="heading" as="h1">Manage Cookies</Typography>
	<Typography variant="body-lg" class="mt-3">
		We use necessary cookies to make our site work. We'd also like to set analytics cookies that
		help us make improvements by measuring how you use the site. These will be set only if you
		accept.
	</Typography>
	{#if cookiePolicy}
		<Typography variant="body" class="mt-4">
			For more detailed information about the cookies we use, see our <a
				href={cookiePolicy}
				class="font-semibold text-primary-600 hover:underline">Cookie policy</a
			>.
		</Typography>
	{/if}
</header>
<div class="space-y-8">
	{#each categories as category}
		<CookieConsentCategory
			name={category.name}
			title={category.title}
			body={category.body}
			required={category.required}
			cookies={category.cookies}
			bind:checked={consent[category.name]}
			expanded
		/>
	{/each}
</div>
<div class="pt-8">
	<Button
		variant="primary"
		type="submit"
		on:click={() => dispatch('save', consent)}
		class="w-full sm:w-auto"
	>
		Save changes
	</Button>
</div>
