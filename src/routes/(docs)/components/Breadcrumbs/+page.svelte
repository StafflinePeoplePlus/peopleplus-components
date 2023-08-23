<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/breadcrumbs/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Breadcrumbs,Breadcrumb';
</script>

<PageHeader title="Breadcrumbs" subtitle="Display the navigation hierarchy" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Breadcrumbs" src="/usage/breadcrumbs" code={usage} />
	</div>
</div>
