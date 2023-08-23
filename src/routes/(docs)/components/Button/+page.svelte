<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/button/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Button';
</script>

<PageHeader title="Button" subtitle="Form buttons and button style links with variants" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Simple Buttons" src="/usage/button" code={usage} />
	</div>
</div>
