<script lang="ts">
	import { onMount } from 'svelte';
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

	let supported = true;
	onMount(() => {
		supported = 'requestFullscreen' in document.body;
	});
</script>

<svelte:window on:fullscreenchange={() => (fullscreen = !!document.fullscreenElement)} />

{#if supported}
	<button class="p-1" on:click={toggleFullscreen}>
		{#if fullscreen}
			<MinimizeIcon />
		{:else}
			<MaximiseIcon />
		{/if}
	</button>
{/if}
