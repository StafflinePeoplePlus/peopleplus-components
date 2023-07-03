<script>
    import { Tooltip, Button } from '$lib';
    let showTooltip = false;

    function toggleTooltip() {
        showTooltip = !showTooltip;
    }
</script>

<Button on:mouseenter={toggleTooltip} on:mouseout={toggleTooltip}>Delete</Button>

{#if showTooltip}
    <Tooltip>This action cannot be undone.</Tooltip>
{/if}
