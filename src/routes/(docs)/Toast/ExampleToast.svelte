<script>
	import Toast from '$lib/toast/Toast.svelte';
	import { Typography } from '$lib';
	import ToastButton from '$lib/toast/ToastButton.svelte';
</script>

<ToastButton timeout={3000}>Click me</ToastButton>

<Toast variant="warning">
	<Typography variant="sub-heading">Invalid Username</Typography>
	<Typography variant="body">Username you have entered is invalid</Typography>
</Toast>

<Toast variant="success">
	<Typography variant="sub-heading">Success</Typography>
	<Typography variant="body">Item moved successfully.</Typography>
</Toast>

<Toast variant="error">
	<Typography variant="sub-heading">Error</Typography>
	<Typography variant="body">Please try again</Typography>
</Toast>
