<script lang="ts">
	import { Modal } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<Modal />';
	let open = false;
</script>

<ExamplePage title="Modal" {usage}>
	<button
		class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={() => (open = !open)}
	>
		Toggle Modal
	</button>

	<Modal bind:open />
</ExamplePage>
