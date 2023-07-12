<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/table/+page.svelte?raw';
	import complexUsage from '../../../usage/table/complex/+page.svelte?raw';

	const importUsage = `import { Table, TableRow, TableCell } from 'pp-svelte-components';`;
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
