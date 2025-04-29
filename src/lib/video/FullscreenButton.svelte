<script lang="ts">
	import MaximizeIcon from 'lucide-svelte/icons/maximize';
	import MinimizeIcon from 'lucide-svelte/icons/minimize';
	import { onMount } from 'svelte';

	interface Props {
		fullscreen?: boolean;
		element: HTMLElement | undefined;
	}

	let { fullscreen = $bindable(false), element }: Props = $props();

	function toggleFullscreen() {
		if (document.fullscreenElement) {
			document.exitFullscreen();
		} else {
			element?.requestFullscreen({ navigationUI: 'hide' });
		}
	}

	let supported = $state(true);
	onMount(() => {
		supported = 'requestFullscreen' in document.body;
	});
</script>

<svelte:window onfullscreenchange={() => (fullscreen = !!document.fullscreenElement)} />

{#if supported}
	<button class="p-1" onclick={toggleFullscreen}>
		{#if fullscreen}
			<MinimizeIcon aria-hidden="true" />
			<span class="sr-only">Minimize player</span>
		{:else}
			<MaximizeIcon aria-hidden="true" />
			<span class="sr-only">Maximise player</span>
		{/if}
	</button>
{/if}
