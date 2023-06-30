<script>
	import { Loader, Button } from '$lib';
	let isLoading = false;
	function submit() {
		isLoading = true;
		setTimeout(() => {
			isLoading = false;
		}, 2000);
	}
</script>

<Button on:click={submit} disabled={isLoading} data-testId="loadingButton">
	{#if isLoading}
		<Loader {isLoading} /> Loading...
	{:else}
		Submit Form
	{/if}
</Button>
