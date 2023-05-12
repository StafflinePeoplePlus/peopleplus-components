<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleTextArea from './ExampleTextArea.svelte';
	import usage from './ExampleTextArea.svelte?raw';
</script>

<ExamplePage title="TextArea" {usage}>
	<ExampleTextArea />
</ExamplePage>
