<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/stepper/+page.svelte?raw';

	const importUsage = `import { Stepper } from 'pp-svelte-components';`;
</script>

<PageHeader
	title="Stepper"
	subtitle="Show progress through a form, and allow navigation between sections"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Stepper" src="/usage/stepper" code={usage} frameHeight={200} />
	</div>
</div>
