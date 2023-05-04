<script lang="ts">
	import { Banner } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<Banner />';
</script>

<ExamplePage title="Banner" {usage}>
	<Banner absolute />
</ExamplePage>
