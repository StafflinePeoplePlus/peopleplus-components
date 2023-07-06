<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExamplePopover from './ExamplePopover.svelte';
	import usage from './ExamplePopover.svelte?raw';
</script>

<ExamplePage title="Popover" {usage}>
	<ExamplePopover />
</ExamplePage>
