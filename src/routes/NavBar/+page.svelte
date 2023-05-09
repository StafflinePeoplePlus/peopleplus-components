<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleNavBar from './ExampleNavBar.svelte';
	import usage from './ExampleNavBar.svelte?raw';
</script>

<ExamplePage title="NavBar" {usage}>
	<ExampleNavBar />
</ExamplePage>
