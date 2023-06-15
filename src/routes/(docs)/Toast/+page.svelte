<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleToast from './ExampleToast.svelte';
	import usage from './ExampleToast.svelte?raw';
</script>

<ExamplePage title="Toast" {usage}>
	<ExampleToast />
</ExamplePage>
