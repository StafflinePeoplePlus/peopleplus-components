<script lang="ts">
	import { Button, Drawer } from '$lib';
	let open = false;
</script>

<Button on:click={() => (open = !open)}>View Measurements</Button>

<Drawer fixed bind:open />
