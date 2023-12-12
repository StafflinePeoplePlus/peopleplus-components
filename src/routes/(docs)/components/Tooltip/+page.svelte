<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as defaultUsage from '../../../usage/tooltip/+page.svelte?usage';
	import * as customTooltipUsage from '../../../usage/tooltip/custom/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Tooltip';
</script>

<PageHeader
	title="Tooltip"
	subtitle="An interactive overlay that presents details about a component when it is on keyboard focus or hovered."
/>

<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Default" src="/usage/tooltip" code={defaultUsage} />
		<UsageSection title="Custom Position" src="/usage/tooltip/custom" code={customTooltipUsage} />
	</div>
</div>
