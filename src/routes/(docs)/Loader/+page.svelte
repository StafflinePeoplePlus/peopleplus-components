<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';

	import usage from './ExampleLoader.svelte?raw';
	import ExampleLoader from './ExampleLoader.svelte';
</script>

<ExamplePage title="Loader" {usage}>
	<ExampleLoader />
</ExamplePage>
