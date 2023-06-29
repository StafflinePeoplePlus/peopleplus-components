<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleDrawer from './ExampleDrawer.svelte';
	import usage from './ExampleDrawer.svelte?raw';
</script>

<ExamplePage title="Drawer" {usage}>
	<ExampleDrawer />
</ExamplePage>
