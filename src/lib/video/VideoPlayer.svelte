<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { twJoin, twMerge } from 'tailwind-merge';
	import debounce from 'just-debounce-it';
	import PauseIcon from './icons/PauseIcon.svelte';
	import PlayIcon from './icons/PlayIcon.svelte';

	const dispatchEvent = createEventDispatcher();

	let className = '';
	export { className as class };
	export let element: HTMLElement | undefined = undefined;
	export let playing = false;
	export let forceControls = false;

	let interacting = false;
	$: showControls = !playing || interacting || forceControls;

	$: if (!showControls) {
		dispatchEvent('hideControls');
	}

	const stopInteracting = debounce(() => {
		interacting = false;
	}, 2000);
	function startInteracting() {
		interacting = true;
		stopInteracting();
	}
</script>

<div
	bind:this={element}
	class={twMerge(
		'relative overflow-hidden bg-black text-white',
		!showControls && 'cursor-none',
		className
	)}
	on:pointermove={startInteracting}
	on:pointerdown={startInteracting}
	on:pointerleave={() => (interacting = false)}
>
	<!-- Video element -->
	<div class="pointer-events-none absolute inset-0 h-full w-full">
		<slot />
	</div>

	<!-- Controls overlay -->
	<div
		class={twJoin(
			'absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 transition duration-300',
			!showControls && 'pointer-events-none opacity-0'
		)}
	>
		<button
			class="absolute inset-0 flex w-full cursor-default items-center justify-center"
			on:click={() => (playing ? dispatchEvent('pause') : dispatchEvent('play'))}
		>
			<div class="cursor-pointer rounded-full bg-black/50 p-4 text-center">
				{#if playing}
					<PauseIcon class="h-12 w-12 drop-shadow" />
				{:else}
					<PlayIcon class="h-12 w-12 drop-shadow" />
				{/if}
			</div>
		</button>

		<!-- Top controls -->
		<div
			class={twMerge(
				'relative z-10 w-full p-6 px-12 transition duration-300',
				!showControls && '-translate-y-full'
			)}
		>
			<slot name="top" />
		</div>

		<!-- Bottom controls -->
		<div
			class={twMerge(
				'absolute bottom-0 w-full px-12 py-6 transition duration-300',
				!showControls && 'translate-y-full'
			)}
		>
			<slot name="bottom" />
		</div>

		<div class="pointer-events-none absolute inset-0">
			<slot name="overlay" />
		</div>
	</div>
</div>