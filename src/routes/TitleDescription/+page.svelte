<script lang="ts">
	import { TitleDescription } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = `<TitleDescription
	title="Hello world!"
	description="Vestibulum posuere libero feugiat tincidunt."
/>`;
</script>

<ExamplePage title="TitleDescription" {usage}>
	<TitleDescription
		title="Hello world!"
		description="Vestibulum posuere libero feugiat tincidunt."
	/>
</ExamplePage>
