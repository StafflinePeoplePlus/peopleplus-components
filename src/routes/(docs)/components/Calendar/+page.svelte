<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as defaultUsage from '../../../usage/calendar/+page.svelte?usage';
	import * as interactiveUsage from '../../../usage/calendar/interactive/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Calendar';
</script>

<PageHeader title="Calendar" subtitle="A large format calendar for viewing and scheduling events" />

<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Default" src="/usage/calendar" code={defaultUsage} />
		<UsageSection title="Interactive" src="/usage/calendar/interactive" code={interactiveUsage} />
	</div>
</div>
