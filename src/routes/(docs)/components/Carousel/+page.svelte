<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/carousel/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Carousel';
</script>

<PageHeader
	title="Carousel"
	subtitle="Horizontal carousel of elements with scroll snapping and touch support"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Image Carousel" src="/usage/carousel" code={usage} />
	</div>
</div>
