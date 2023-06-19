<script>
	import { Toaster, showToast } from '$lib/toaster';
	import { Button } from '$lib';

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
</script>

<Button on:click={showToastClick}>Delete</Button>

<Toaster />
