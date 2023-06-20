<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleSortable from './ExampleSortable.svelte';
	import usage from './ExampleSortable.svelte?raw';
</script>

<ExamplePage title="Sortable Lists" {usage}>
	<ExampleSortable />
</ExamplePage>
