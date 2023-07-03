<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleTooltip from './ExampleTooltip.svelte';
	import usage from './ExampleTooltip.svelte?raw';
</script>

<ExamplePage title="Tooltip" {usage}>
	<ExampleTooltip />
</ExamplePage>
