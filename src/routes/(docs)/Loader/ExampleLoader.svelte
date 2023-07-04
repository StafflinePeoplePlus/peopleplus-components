<script>
	import { SpinnerLoader, HorizontalLoader, Button } from '$lib';
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
		<HorizontalLoader>Uploading Video</HorizontalLoader>
	{:else}
		Upload
	{/if}
</Button>
<Button on:click={submit} disabled={isLoading} data-testId="loadingButton">
	{#if isLoading}
		<SpinnerLoader />Loading...
	{:else}
		Submit Form
	{/if}
</Button>
