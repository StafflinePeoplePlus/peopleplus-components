<script lang="ts">
    import {showToast} from './toastStore.js';

    function handleButtonClick() {
        showToast('');
    }
</script>

<a on:click={handleButtonClick}>
<slot />
</a>
