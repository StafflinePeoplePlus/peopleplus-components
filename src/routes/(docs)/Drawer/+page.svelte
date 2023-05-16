<script lang="ts">
	import { Drawer } from '$lib';
	import ExamplePage from '../ExamplePage.svelte';

	const usage = '<Drawer bind:open />';
	let open = false;
</script>

<ExamplePage title="Drawer" {usage}>
	<button
		class="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		type="button"
		on:click={() => (open = !open)}
	>
		Toggle Drawer
	</button>
	<Drawer absolute bind:open />
</ExamplePage>
