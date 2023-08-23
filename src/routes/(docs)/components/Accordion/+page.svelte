<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/accordion/+page.svelte?usage';
	import * as exclusiveUsage from '../../../usage/accordion/exclusive/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Accordion,AccordionGroup';
</script>

<PageHeader
	title="Accordion"
	subtitle="Collapsible/expandable sections, useful for FAQs for example"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Accordion" src="/usage/accordion" code={usage} />
		<UsageSection
			title="Exclusive Accordion"
			src="/usage/accordion/exclusive"
			code={exclusiveUsage}
		/>
	</div>
</div>
