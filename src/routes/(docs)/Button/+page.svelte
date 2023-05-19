<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleButtons from './ExampleButtons.svelte';
	import usage from './ExampleButtons.svelte?raw';
</script>

<ExamplePage title="Button" {usage}>
	<ExampleButtons />
</ExamplePage>
