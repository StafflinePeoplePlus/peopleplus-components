<script lang="ts">
	import Button from '$lib/Button.svelte';
	import Typography from '$lib/Typography.svelte';
	import { createEventDispatcher } from 'svelte';
	import CookieConsentCategory from './CookieConsentCategory.svelte';
	import type { CookieCategory } from './types';
	import { defaultCookieStrings } from './i18n';

	const dispatch = createEventDispatcher<{
		save: Record<string, boolean | undefined>;
	}>();

	export let categories: CookieCategory[];
	export let consent: Record<string, boolean | undefined>;
	export let strings = defaultCookieStrings;
</script>

<header class="mb-8">
	<Typography variant="heading" as="h1">{strings.manageCookies}</Typography>
	<Typography variant="body-lg" class="mt-3">
		{strings.cookiesDescription}
	</Typography>
	<slot />
</header>
<div class="space-y-8">
	{#each categories as category}
		<CookieConsentCategory
			{strings}
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
		{strings.saveChanges}
	</Button>
</div>
