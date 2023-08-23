<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/chip/+page.svelte?usage';
	import * as dismissableUsage from '../../../usage/chip/dismissable/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Chip';
</script>

<PageHeader
	title="Chip"
	subtitle="Small interactive elements for tagging, filtering, and labelling"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Chip" src="/usage/chip" code={usage} />
		<UsageSection title="Dismissable Chip" src="/usage/chip/dismissable" code={dismissableUsage} />
	</div>
</div>
