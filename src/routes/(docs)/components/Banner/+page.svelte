<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/banner/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Banner';
</script>

<PageHeader
	title="Banner"
	subtitle="Page wide banners for marketing call to actions, incident alerts, etc."
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Banner" src="/usage/banner" code={usage} />
	</div>
</div>
