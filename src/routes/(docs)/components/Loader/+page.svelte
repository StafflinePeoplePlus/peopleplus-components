<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as spinnerUsage from '../../../usage/loader/spinner/+page.svelte?usage';
	import * as horizontalUsage from '../../../usage/loader/horizontal/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/SpinnerLoader,HorizontalLoader';
</script>

<PageHeader title="Loader" subtitle="Loading indicators" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Spinner" src="/usage/loader/spinner" code={spinnerUsage} />
		<UsageSection title="Horizontal" src="/usage/loader/horizontal" code={horizontalUsage} />
	</div>
</div>
