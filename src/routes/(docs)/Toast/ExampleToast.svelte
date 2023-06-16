<script>
	import Toast from '$lib/toast/Toast.svelte';
	import { Typography } from '$lib';
	import ToastButton from '$lib/toast/ToastButton.svelte';
</script>

<ToastButton variant="secondary">Delete</ToastButton>

<Toast variant="warning">
	<div>
		<Typography variant="sub-heading">Invalid Username</Typography>
		<Typography variant="body">Username you have entered is invalid</Typography>
	</div>
</Toast>

<Toast variant="success">
	<div>
		<Typography variant="sub-heading">Success</Typography>
		<Typography variant="body">Item moved successfully.</Typography>
	</div>
</Toast>

<Toast variant="error">
	<div>
		<Typography variant="sub-heading">Error</Typography>
		<Typography variant="body">Please try again</Typography>
	</div>
</Toast>
