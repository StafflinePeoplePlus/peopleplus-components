<script>
    import Toast from '$lib/toast/Toast.svelte';
    import {Typography} from "$lib";
    import ToastButton from "$lib/toast/ToastButton.svelte";
</script>

<ToastButton>
    Delete
</ToastButton>

<Toast>
    <Typography variant="body">Item has been deleted.</Typography>
</Toast>
