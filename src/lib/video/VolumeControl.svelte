<script lang="ts">
	import VerticalRange from './VerticalRange.svelte';
	import VolumeFullIcon from './icons/VolumeFullIcon.svelte';
	import VolumeMuteIcon from './icons/VolumeMuteIcon.svelte';

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
			<VerticalRange bind:value={volume} />
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
			<VolumeFullIcon />
		{:else}
			<VolumeMuteIcon />
		{/if}
	</button>
</div>
