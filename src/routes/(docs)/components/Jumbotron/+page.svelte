<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/jumbotron/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Jumbotron';
</script>

<PageHeader title="Jumbotron" subtitle="Large hero section at the start of a page" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Jumbotron" src="/usage/jumbotron" code={usage} />
	</div>
</div>
