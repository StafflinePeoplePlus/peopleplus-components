<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import usage from './ExampleBanner.svelte?raw';
	import ExampleBanner from './ExampleBanner.svelte';
</script>

<ExamplePage title="Banner" {usage}>
	<ExampleBanner />
</ExamplePage>
