<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/avatar/+page.svelte?usage';
	import * as usageSizes from '../../../usage/avatar/sizes/+page.svelte?usage';
	import * as usageFallback from '../../../usage/avatar/fallback/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Avatar';
</script>

<PageHeader title="Avatar" subtitle="Avatar of varying sizes with fallback on error" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Avatar" src="/usage/avatar" code={usage} />
		<UsageSection title="All Sizes" src="/usage/avatar/sizes" code={usageSizes} />
		<UsageSection title="Fallback" src="/usage/avatar/fallback" code={usageFallback} />
	</div>
</div>
