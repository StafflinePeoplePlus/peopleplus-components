<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from './CodeSnippet.svelte';
	import { browser } from '$app/environment';
	import HorizontalLoader from '$lib/loader/HorizontalLoader.svelte';
	import { twMerge } from 'tailwind-merge';
	import Switch from '$lib/forms/Switch.svelte';
	import { slide } from 'svelte/transition';
	import { darkMode } from '../../darkMode';
	import { Card } from '$lib';

	export let code: { html: string; text: string };
	export let src: string;
	export let title: string;
	export let frameHeight: number | undefined = undefined;
	let showCode = false;

	const DEFAULT_FRAME_HEIGHT = 1;
	let frame: HTMLIFrameElement | undefined = undefined;
	let calculatedFrameHeight = DEFAULT_FRAME_HEIGHT;
	let frameLoaded = false;
	function resizeFrame() {
		if (!frame || !frame.contentDocument) {
			return;
		}
		calculatedFrameHeight = frame.contentDocument.body.scrollHeight ?? DEFAULT_FRAME_HEIGHT;
		frameLoaded = true;
	}
</script>

<svelte:window on:resize={resizeFrame} />

<Card class="overflow-hidden">
	<header
		class="flex items-center justify-between border-b border-gray-300 p-4 dark:border-gray-700"
	>
		<Typography variant="sub-heading">{title}</Typography>
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<span class="mr-2 text-sm font-medium dark:text-white">Show Code</span>
			<Switch bind:checked={showCode} />
		</label>
	</header>
	{#if browser}
		<iframe
			bind:this={frame}
			class={twMerge(
				'pointer-events-none absolute w-full bg-gray-100 opacity-0',
				frameLoaded && 'pointer-events-auto relative opacity-100',
			)}
			{title}
			src={$darkMode ? `${src}?dark=true` : src}
			style:height="{frameHeight ?? calculatedFrameHeight}px"
			on:load={resizeFrame}
		/>
	{/if}
	{#if !frameLoaded}
		<div class="flex items-center justify-center p-6">
			<HorizontalLoader class="w-auto">Loading example...</HorizontalLoader>
		</div>
	{/if}
	{#if showCode}
		<div transition:slide>
			<CodeSnippet class="rounded-t-none" {code} />
		</div>
	{/if}
</Card>
