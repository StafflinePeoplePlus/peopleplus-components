<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as importUsage from 'virtual:usage/Select';
	import * as defaultUsage from '../../../usage/select/+page.svelte?usage';
	import * as multipleUsage from '../../../usage/select/multiple/+page.svelte?usage';
</script>

<PageHeader title="Select" subtitle="Form control to select one of many options from a dropdown." />

<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Default" src="/usage/select" code={defaultUsage} frameHeight={400} />
		<UsageSection
			title="Select Multiple"
			src="/usage/select/multiple"
			code={multipleUsage}
			frameHeight={400}
		/>
	</div>
</div>
