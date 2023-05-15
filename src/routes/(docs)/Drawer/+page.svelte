<script lang="ts">
	import { Drawer } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<Drawer bind:open />';
	let open = false;
</script>

<ExamplePage title="Drawer" {usage}>
	<button
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
		type="button"
		on:click={() => (open = !open)}
	>
		Toggle Drawer
	</button>
	<Drawer absolute bind:open />
</ExamplePage>
