<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import horizontalUsage from '../../../usage/sortable/horizontal/+page.svelte?raw';
	import verticalUsage from '../../../usage/sortable/vertical/+page.svelte?raw';

	const importUsage = `import { createSortable } from 'pp-svelte-components';`;
</script>

<PageHeader title="Sortable" subtitle="Reorder a list of items horizontally or vertically" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection
			title="Horizontal"
			src="/usage/sortable/horizontal"
			code={horizontalUsage}
			frameHeight={210}
		/>
		<UsageSection
			title="Vertical"
			src="/usage/sortable/vertical"
			code={verticalUsage}
			frameHeight={400}
		/>
	</div>
</div>
