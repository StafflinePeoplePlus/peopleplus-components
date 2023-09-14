<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as cloudflareStreamUsage from '../../../usage/video-player/cloudflare-stream/+page.svelte?usage';
	import * as youtubeUsage from '../../../usage/video-player/youtube/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/VideoPlayer,ScrubBar,VolumeControl,FullscreenButton';
</script>

<PageHeader title="Video Player Controls" subtitle="Video player agnostic video controls" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection
			title="Cloudflare Stream"
			src="/usage/video-player/cloudflare-stream"
			code={cloudflareStreamUsage}
		/>
		<UsageSection title="YouTube" src="/usage/video-player/youtube" code={youtubeUsage} />
	</div>
</div>
