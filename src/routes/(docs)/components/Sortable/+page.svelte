<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as horizontalUsage from '../../../usage/sortable/horizontal/+page.svelte?usage';
	import * as verticalUsage from '../../../usage/sortable/vertical/+page.svelte?usage';
	import * as gridUsage from '../../../usage/sortable/grid/+page.svelte?usage';
	import * as gridWithHandleUsage from '../../../usage/sortable/grid-with-handle/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/createSortableList,createSortableGrid';
</script>

<PageHeader
	title="Sortable"
	subtitle="Reorder a list of items horizontally, vertically, or in a grid"
/>
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
		<UsageSection title="Grid" src="/usage/sortable/grid" code={gridUsage} frameHeight={400} />
		<UsageSection
			title="Grid w/ Drag Handle"
			src="/usage/sortable/grid-with-handle"
			code={gridWithHandleUsage}
			frameHeight={400}
		/>
	</div>
</div>
