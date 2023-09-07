<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/navbar/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/NavBar,NavBarNav,NavItem';
</script>

<PageHeader
	title="Nav Bar"
	subtitle="Also called an App Bar, contains top level navigation and site logo"
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection
			title="Example with search and navigation links"
			src="/usage/navbar"
			code={usage}
		/>
	</div>
</div>
