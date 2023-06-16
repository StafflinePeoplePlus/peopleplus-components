<script lang="ts">
	import { showToast } from './toastStore.js';
	import { Button } from '$lib';
	export let timeout = 5000;
</script>

<Button on:click={() => showToast(timeout)} {...$$restProps}>
	<slot />
</Button>
