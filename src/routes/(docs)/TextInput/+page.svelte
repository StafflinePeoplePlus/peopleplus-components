<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleTextInput from './ExampleTextInput.svelte';
	import usage from './ExampleTextInput.svelte?raw';
</script>

<ExamplePage title="TextInput" {usage}>
	<ExampleTextInput />
</ExamplePage>
