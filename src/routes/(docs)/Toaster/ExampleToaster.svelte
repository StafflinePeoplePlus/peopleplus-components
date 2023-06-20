<script>
	import { Button, Toaster, showToast } from '$lib';

	function showToastClick() {
		showToast({
			variant: 'success',
			message: 'Changes successfully saved.',
			timeout: 3000
		});
		showToast({
			variant: 'error',
			message: 'Username you have entered is invalid.',
			timeout: 6000
		});
	}
	function showToastClickNull() {
		showToast({
			variant: 'alert',
			message: 'Uploading videos.',
			timeout: null
		});
	}
</script>

<Button on:click={showToastClick}>Delete</Button>
<Button on:click={showToastClickNull} variant="secondary">Upload</Button>

<Toaster />
