<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import usage from './ExampleToaster.svelte?raw';
	import ExampleToaster from './ExampleToaster.svelte';
</script>

<ExamplePage title="Toaster" {usage}>
	<ExampleToaster />
</ExamplePage>
