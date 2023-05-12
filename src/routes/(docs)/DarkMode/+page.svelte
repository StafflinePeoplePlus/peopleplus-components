<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleDarkMode from './ExampleDarkMode.svelte';
	import usage from './ExampleDarkMode.svelte?raw';
</script>

<ExamplePage title="Dark Mode" {usage}>
	<ExampleDarkMode />
</ExamplePage>
