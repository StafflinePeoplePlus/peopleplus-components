<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/table/+page.svelte?usage';
	import * as complexUsage from '../../../usage/table/complex/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Table,TableRow,TableCell';
</script>

<PageHeader title="Table" subtitle="Small stylistic wrapper over html tables" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Table" src="/usage/table" code={usage} />
		<UsageSection title="Complex Table" src="/usage/table/complex" code={complexUsage} />
	</div>
</div>
