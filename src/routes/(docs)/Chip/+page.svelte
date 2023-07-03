<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleChip from './ExampleChip.svelte';
	import usage from './ExampleChip.svelte?raw';
</script>

<ExamplePage title="Chip" {usage}>
	<ExampleChip />
</ExamplePage>
