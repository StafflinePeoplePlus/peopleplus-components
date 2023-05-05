<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleJumbotron from './ExampleJumbotron.svelte';
	import usage from './ExampleJumbotron.svelte?raw';
</script>

<ExamplePage title="Jumbotron" {usage}>
	<ExampleJumbotron />
</ExamplePage>
