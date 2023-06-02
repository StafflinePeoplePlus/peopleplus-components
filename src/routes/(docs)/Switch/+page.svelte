<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleSwitch from './ExampleSwitch.svelte';
	import usage from './ExampleSwitch.svelte?raw';
</script>

<ExamplePage title="Switch" {usage}>
	<ExampleSwitch />
</ExamplePage>
