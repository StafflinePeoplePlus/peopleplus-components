<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleAccordion from './ExampleAccordion.svelte';
	import usage from './ExampleAccordion.svelte?raw';
</script>

<ExamplePage title="Accordion" {usage}>
	<ExampleAccordion />
</ExamplePage>
