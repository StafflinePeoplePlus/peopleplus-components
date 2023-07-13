<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import bannerUsage from '../../../usage/cookie-consent/banner/+page.svelte?raw';
	import formUsage from '../../../usage/cookie-consent/form/+page.svelte?raw';

	const importUsage = `import { CookieConsentBanner, CookieConsentManagement } from 'pp-svelte-components';`;
</script>

<PageHeader
	title="Cookie Consent"
	subtitle="Banner and management form for obtaining user consent for usage of cookies."
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection
			title="Consent Banner"
			src="/usage/cookie-consent/banner"
			code={bannerUsage}
			frameHeight={500}
		/>
		<UsageSection title="Management Form" src="/usage/cookie-consent/form" code={formUsage} />
	</div>
</div>
