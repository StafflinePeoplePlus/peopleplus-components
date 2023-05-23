<script lang="ts">
	import MaximiseIcon from './icons/MaximiseIcon.svelte';
	import MinimizeIcon from './icons/MinimizeIcon.svelte';

	export let fullscreen = false;
	export let element: HTMLElement | undefined;

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			element?.requestFullscreen({ navigationUI: 'hide' });
		}
	}
</script>

<svelte:window on:fullscreenchange={() => (fullscreen = !!document.fullscreenElement)} />

<button class="p-1" on:click={toggleFullscreen}>
	{#if fullscreen}
		<MinimizeIcon />
	{:else}
		<MaximiseIcon />
	{/if}
</button>
