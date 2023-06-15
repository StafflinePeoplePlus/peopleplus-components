<script lang="ts">
    import { showToast } from './toastStore.js';
    import { Button } from "$lib";
</script>

<Button on:click={showToast} {...$$restProps}>
    <slot />
</Button>
