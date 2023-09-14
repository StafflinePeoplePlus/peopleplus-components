<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/text-input/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/TextInput,InputLabel,InputError,InputArea';
</script>

<PageHeader title="Text Input" subtitle="Single line text input field" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Text Input" src="/usage/text-input" code={usage} />
	</div>
</div>
