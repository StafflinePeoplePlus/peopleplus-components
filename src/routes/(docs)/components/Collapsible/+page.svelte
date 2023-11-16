<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as collapsible from '../../../usage/collapsible/+page.svelte?usage';
	import * as customCollapsible from '../../../usage/collapsible/custom/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Collapsible';
</script>

<PageHeader
	title="Collapsible"
	subtitle="An interactive component which expands/collapses a panel"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Collapsible" src="/usage/collapsible" code={collapsible} />
		<UsageSection
			title="Custom Collapsible"
			src="/usage/collapsible/custom"
			code={customCollapsible}
		/>
	</div>
</div>
