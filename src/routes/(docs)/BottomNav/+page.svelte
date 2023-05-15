<script lang="ts">
	import { BottomNav } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<BottomNav />';
</script>

<ExamplePage title="BottomNav" {usage}>
	<BottomNav absolute />
</ExamplePage>
