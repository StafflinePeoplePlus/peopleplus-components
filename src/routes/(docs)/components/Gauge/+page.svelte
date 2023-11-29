<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/gauge/+page.svelte?usage';
	import * as customUsage from '../../../usage/gauge/custom/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Gauge';
</script>

<PageHeader title="Gauge" subtitle="Using data as a measure of speed or progress towards a goal." />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Percentage Gauge" src="/usage/gauge" code={usage} />
		<UsageSection title="Custom Gauge" src="/usage/gauge/custom" code={customUsage} />
	</div>
</div>
