<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import usage from '../../../usage/video-player/+page.svelte?raw';

	const importUsage = `import { VideoPlayer, ScrubBar, VolumeControl, FullscreenButton } from 'pp-svelte-components';`;
</script>

<PageHeader title="Video Player Controls" subtitle="Video player agnostic video controls" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Cloudflare stream" src="/usage/video-player" code={usage} />
	</div>
</div>
