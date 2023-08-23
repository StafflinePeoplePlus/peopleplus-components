<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/popover/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/PopoverContent,createPopover';
</script>

<PageHeader
	title="Popover"
	subtitle="Modal-like popout that is attached to the element that opens it"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Simple popover" src="/usage/popover" code={usage} frameHeight={200} />
	</div>
</div>
