<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from '../CodeSnippet.svelte';
	import PageHeader from '../PageHeader.svelte';
	import UsageSection from '../UsageSection.svelte';
	import * as enabledUsage from '../../../usage/switch/enabled/+page.svelte?usage';
	import * as disabledUsage from '../../../usage/switch/disabled/+page.svelte?usage';
	import * as disabledCheckedUsage from '../../../usage/switch/disabled-checked/+page.svelte?usage';
	import * as groupedUsage from '../../../usage/switch/grouped/+page.svelte?usage';
	import * as importUsage from 'virtual:usage/Switch';
</script>

<PageHeader title="Switch" subtitle="Toggle on and off, alternative to a checkbox" />
<CodeSnippet code={importUsage} lang="typescript" />
<div class="mt-12">
	<Typography variant="heading" as="h3" class="mb-8">Usage</Typography>

	<div class="space-y-8">
		<UsageSection title="Enabled" src="/usage/switch/enabled" code={enabledUsage} />
		<UsageSection title="Disabled" src="/usage/switch/disabled" code={disabledUsage} />
		<UsageSection
			title="Disabled Checked"
			src="/usage/switch/disabled-checked"
			code={disabledCheckedUsage}
		/>
		<UsageSection title="Grouped" src="/usage/switch/grouped" code={groupedUsage} />
	</div>
</div>
