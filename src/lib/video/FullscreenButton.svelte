<script lang="ts">
	import MaximizeIcon from 'lucide-svelte/icons/maximize';
	import MinimizeIcon from 'lucide-svelte/icons/minimize';
	import { onMount } from 'svelte';

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
			<MinimizeIcon aria-hidden="true" />
			<span class="sr-only">Minimize player</span>
		{:else}
			<MaximizeIcon aria-hidden="true" />
			<span class="sr-only">Maximise player</span>
		{/if}
	</button>
{/if}
