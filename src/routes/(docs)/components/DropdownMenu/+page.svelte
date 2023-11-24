<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as usage from '../../../usage/dropdownMenu/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/DropdownMenu,DropdownMenuDivider,DropdownMenuItem,createDropdownMenu';
</script>

<PageHeader
	title="Dropdown Menu"
	subtitle="Displays a menu to the user, triggered by a button, which can contain links or perform functions."
/>
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Basic Usage" src="/usage/dropdownMenu" code={usage} frameHeight={300} />
	</div>
</div>
