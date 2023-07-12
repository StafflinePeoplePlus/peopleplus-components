<script lang="ts">
	import { Button, Toaster, showToast } from '$lib';

	function remove() {
		showToast({
			variant: 'success',
			message: 'Item successfully deleted.',
			timeout: 3000,
		});
	}
	function save() {
		showToast({
			variant: 'error',
			message: 'Username you have entered is invalid.',
			timeout: 6000,
		});
	}
	function upload() {
		showToast({
			variant: 'alert',
			message: 'Uploading videos.',
		});
	}
</script>

<!-- Place this at the root of your app -->
<Toaster />

<Button on:click={remove}>Delete</Button>
<Button on:click={save}>Save</Button>
<Button on:click={upload} variant="secondary">Upload</Button>
