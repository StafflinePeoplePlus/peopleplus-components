<script lang="ts">
	import Volume1Icon from 'lucide-svelte/icons/volume-1';
	import Volume2Icon from 'lucide-svelte/icons/volume-2';
	import VolumeXIcon from 'lucide-svelte/icons/volume-x';
	import VerticalRange from './VerticalRange.svelte';

	export let volume = 1;
	let restoreVolume = 1;
</script>

<div class="group/volume relative flex items-center justify-center">
	<div
		class="absolute bottom-8 z-10 hidden p-10 pb-2 group-focus-within/volume:block group-hover/volume:block"
	>
		<div
			class="flex items-center justify-center rounded-lg border border-white/10 bg-black/70 px-2 py-3 shadow-lg backdrop-blur"
		>
			<VerticalRange bind:value={volume} label="Volume Control" />
		</div>
	</div>
	<button
		class="p-1"
		on:pointerdown={(evt) => {
			if (evt.pointerType === 'mouse' || document.activeElement === evt.currentTarget) {
				if (volume > 0) {
					restoreVolume = volume;
					volume = 0;
				} else {
					volume = restoreVolume || 1;
				}
			}
		}}
	>
		{#if volume > 0}
			<span class="sr-only">Unmute audio</span>
		{:else}
			<span class="sr-only">Mute audio</span>
		{/if}

		{#if volume > 0.5}
			<Volume2Icon aria-hidden="true" />
		{:else if volume > 0}
			<Volume1Icon aria-hidden="true" />
		{:else}
			<VolumeXIcon aria-hidden="true" />
		{/if}
	</button>
</div>
