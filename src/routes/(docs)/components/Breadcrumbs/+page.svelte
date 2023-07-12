<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/breadcrumbs/+page.svelte?raw';

	const importUsage = `import { Breadcrumbs, Breadcrumb } from 'pp-svelte-components';`;
</script>

<PageHeader title="Breadcrumbs" subtitle="Display the navigation hierarchy" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Breadcrumbs" src="/usage/breadcrumbs" code={usage} />
	</div>
</div>
