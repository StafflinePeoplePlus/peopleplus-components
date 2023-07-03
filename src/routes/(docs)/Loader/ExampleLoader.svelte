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

<Button on:click={submit} disabled={isLoading} variant="secondary">
	{#if isLoading}
		<Loader {isLoading} variant="horizontal">Uploading Video</Loader>
	{:else}
		Upload
	{/if}
</Button>
<Button on:click={submit} disabled={isLoading} data-testId="loadingButton">
	{#if isLoading}
		<Loader {isLoading} variant="spinner">Loading...</Loader>
	{:else}
		Submit Form
	{/if}
</Button>
