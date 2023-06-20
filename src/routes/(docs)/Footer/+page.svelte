<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleFooter from './ExampleFooter.svelte';
	import usage from './ExampleFooter.svelte?raw';
</script>

<ExamplePage title="Footer" {usage}>
	<ExampleFooter />
</ExamplePage>
