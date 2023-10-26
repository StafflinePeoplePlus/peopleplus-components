<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/sidebar/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Sidebar,SidebarItem';
</script>

<PageHeader title="Sidebar" subtitle="Sidebar for app navigation" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Static sidebar" src="/usage/sidebar" code={usage} />
	</div>
</div>
