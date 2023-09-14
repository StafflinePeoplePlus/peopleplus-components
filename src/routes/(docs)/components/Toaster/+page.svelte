<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/toaster/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Toaster,showToast';
</script>

<PageHeader title="Toaster" subtitle="Site wide alerts that disappear after a set timeout" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Example toasts" src="/usage/toaster" code={usage} frameHeight={250} />
	</div>
</div>
