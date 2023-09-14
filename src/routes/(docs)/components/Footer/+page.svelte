<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/footer/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Footer';
</script>

<PageHeader
	title="Footer"
	subtitle="Contact information, site links, policies, the footer has it all"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Large Footer" src="/usage/footer" code={usage} />
	</div>
</div>
