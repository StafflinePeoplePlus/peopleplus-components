<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import usage from './ExampleCard.svelte?raw';
	import ExampleCard from './ExampleCard.svelte';
</script>

<ExamplePage title="Card" {usage}>
	<ExampleCard />
</ExamplePage>
