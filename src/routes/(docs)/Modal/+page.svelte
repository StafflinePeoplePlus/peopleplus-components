<script lang="ts">
	import { Modal } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<Modal />';
	let open = false;
</script>

<ExamplePage title="Modal" {usage}>
	<button
		class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={() => (open = !open)}
	>
		Toggle Modal
	</button>

	<Modal bind:open />
</ExamplePage>
