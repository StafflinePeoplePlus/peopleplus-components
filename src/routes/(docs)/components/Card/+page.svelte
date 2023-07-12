<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import imageTopUsage from '../../../usage/card/image-top/+page.svelte?raw';
	import imageLeftUsage from '../../../usage/card/image-left/+page.svelte?raw';

	const importUsage = `import { Card } from 'pp-svelte-components';`;
</script>

<PageHeader title="Card" subtitle="Self contained sections with optional hero images" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Hero Image" src="/usage/card/image-top" code={imageTopUsage} />
		<UsageSection title="Image Left" src="/usage/card/image-left" code={imageLeftUsage} />
	</div>
</div>
