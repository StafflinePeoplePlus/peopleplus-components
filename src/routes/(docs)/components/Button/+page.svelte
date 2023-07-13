<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/button/+page.svelte?raw';

	const importUsage = `import { Button } from 'pp-svelte-components';`;
</script>

<PageHeader title="Button" subtitle="Form buttons and button style links with variants" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Simple Buttons" src="/usage/button" code={usage} />
	</div>
</div>
