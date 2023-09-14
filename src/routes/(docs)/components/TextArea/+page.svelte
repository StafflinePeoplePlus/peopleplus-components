<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/textarea/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/TextArea,InputLabel,InputError,InputArea';
</script>

<PageHeader title="Text Area" subtitle="Multi-line text input field" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Textarea" src="/usage/textarea" code={usage} />
	</div>
</div>
