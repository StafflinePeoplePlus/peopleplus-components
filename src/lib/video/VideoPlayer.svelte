<script lang="ts">
	import { run } from 'svelte/legacy';

	import debounce from 'just-debounce-it';
	import PauseIcon from 'lucide-svelte/icons/pause';
	import PlayIcon from 'lucide-svelte/icons/play';
	import { createEventDispatcher } from 'svelte';
	import { twJoin, twMerge } from 'tailwind-merge';

	const dispatchEvent = createEventDispatcher();

	
	interface Props {
		class?: string;
		element?: HTMLElement | undefined;
		playing?: boolean;
		forceControls?: boolean;
		children?: import('svelte').Snippet;
		top?: import('svelte').Snippet;
		bottom?: import('svelte').Snippet;
		overlay?: import('svelte').Snippet;
	}

	let {
		class: className = '',
		element = $bindable(undefined),
		playing = false,
		forceControls = false,
		children,
		top,
		bottom,
		overlay
	}: Props = $props();

	let interacting = $state(false);
	let showControls = $derived(!playing || interacting || forceControls);

	run(() => {
		if (!showControls) {
			dispatchEvent('hideControls');
		}
	});

	const stopInteracting = debounce(() => {
		interacting = false;
	}, 2000);
	function startInteracting(evt: Event) {
		if (!showControls) {
			evt.preventDefault();
		}
		interacting = true;
		stopInteracting();
	}
</script>

<div
	bind:this={element}
	class={twMerge(
		'relative touch-none overflow-hidden bg-black text-white',
		!showControls && 'cursor-none',
		className,
	)}
	role="none"
	onpointermove={startInteracting}
	onmousedown={startInteracting}
	onmouseleave={() => (interacting = false)}
	ontouchend={startInteracting}
>
	<!-- Video element -->
	<div class="pointer-events-none absolute inset-0 h-full w-full">
		{@render children?.()}
	</div>

	<!-- Controls overlay -->
	<div
		class={twJoin(
			'absolute inset-0 bg-gradient-to-b from-black/75 via-transparent to-black/75 transition duration-300',
			!showControls && 'pointer-events-none opacity-0',
		)}
	>
		<button
			class="absolute inset-0 flex w-full cursor-default items-center justify-center"
			onclick={() => (playing ? dispatchEvent('pause') : dispatchEvent('play'))}
		>
			<div class="cursor-pointer rounded-full bg-black/50 p-4 text-center">
				{#if playing}
					<span class="sr-only">Pause video</span>
					<PauseIcon class="h-12 w-12 drop-shadow" aria-hidden="true" />
				{:else}
					<span class="sr-only">Play video</span>
					<PlayIcon class="h-12 w-12 drop-shadow" aria-hidden="true" />
				{/if}
			</div>
		</button>

		<!-- Top controls -->
		<div
			class={twMerge(
				'relative z-10 w-full p-6 px-12 transition duration-300',
				!showControls && '-translate-y-full',
			)}
		>
			{@render top?.()}
		</div>

		<!-- Bottom controls -->
		<div
			class={twMerge(
				'absolute bottom-0 w-full px-6 py-6 transition duration-300 sm:px-12',
				!showControls && 'translate-y-full',
			)}
		>
			{@render bottom?.()}
		</div>

		<div class="pointer-events-none absolute inset-0">
			{@render overlay?.()}
		</div>
	</div>
</div>
