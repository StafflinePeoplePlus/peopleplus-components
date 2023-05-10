<script lang="ts">
	import DarkMode from '$lib/DarkMode.svelte';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<DarkMode />';
</script>

<ExamplePage title="Dark Mode" {usage}>
	<DarkMode />
</ExamplePage>
