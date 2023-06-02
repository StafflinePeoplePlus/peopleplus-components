<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleTable from './ExampleTable.svelte';
	import usage from './ExampleTable.svelte?raw';
</script>

<ExamplePage title="Table" {usage}>
	<ExampleTable />
</ExamplePage>
