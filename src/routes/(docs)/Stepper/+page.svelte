<script lang="ts">
	import ExamplePage from '../ExamplePage.svelte';
	import ExampleStepper from './ExampleStepper.svelte';
	import usage from './ExampleStepper.svelte?raw';
</script>

<ExamplePage title="Stepper" {usage}>
	<ExampleStepper />
</ExamplePage>
