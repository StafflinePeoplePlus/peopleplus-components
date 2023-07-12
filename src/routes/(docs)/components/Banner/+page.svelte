<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/banner/+page.svelte?raw';

	const importUsage = `import { Banner } from 'pp-svelte-components';`;
</script>

<PageHeader
	title="Banner"
	subtitle="Page wide banners for marketing call to actions, incident alerts, etc."
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Banner" src="/usage/banner" code={usage} />
	</div>
</div>
