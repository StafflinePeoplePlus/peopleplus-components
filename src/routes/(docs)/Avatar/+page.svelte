<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleAvatar from './ExampleAvatar.svelte';
	import usage from './ExampleAvatar.svelte?raw';
</script>

<ExamplePage title="Avatar" {usage}>
	<ExampleAvatar />
</ExamplePage>
