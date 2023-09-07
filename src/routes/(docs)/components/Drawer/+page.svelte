<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/drawer/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Drawer';
</script>

<PageHeader title="Drawer" subtitle="Slide out section typically used for navigation" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Drawer" src="/usage/drawer" code={usage} frameHeight={500} />
	</div>
</div>
