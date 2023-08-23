<script lang="ts">
	import Typography from '$lib/Typography.svelte';
	import CodeSnippet from './CodeSnippet.svelte';
	import { browser } from '$app/environment';
	import HorizontalLoader from '$lib/loader/HorizontalLoader.svelte';
	import { twMerge } from 'tailwind-merge';
	import Switch from '$lib/forms/Switch.svelte';
	import { slide } from 'svelte/transition';

	export let code: string;
	export let src: string;
	export let title: string;
	export let frameHeight: number | undefined = undefined;
	$: usage = extractUsage(code).replaceAll('$lib', 'pp-svelte-components');
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

	function fixIndentation(source: string): string {
		const leadingWhitespace = source.match(/^\s+/)?.[0];
		if (leadingWhitespace) {
			source = source.slice(leadingWhitespace.length).replaceAll(`\n${leadingWhitespace}`, '\n');
		}
		return source;
	}

	function extractUsage(source: string): string {
		if (!source.includes('<!-- START USAGE -->')) {
			return source;
		}

		const usage = fixIndentation(
			source
				.split('<!-- START USAGE -->\n')
				.filter((_part, i) => i % 2 === 1)
				.map((part) => part.split('<!-- END USAGE -->')[0])
				.join('\n'),
		);
		return usage;
	}
</script>

<svelte:window on:resize={resizeFrame} />

<section class="relative overflow-clip rounded-lg border border-gray-300 shadow-sm">
	<header class="flex items-center justify-between border-b border-gray-300 bg-gray-100 p-4">
		<Typography variant="sub-heading">{title}</Typography>
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label>
			<span class="mr-2 text-sm font-medium">Show Code</span>
			<Switch bind:checked={showCode} />
		</label>
	</header>
	{#if browser}
		<iframe
			bind:this={frame}
			class={twMerge(
				'pointer-events-none absolute w-full opacity-0',
				frameLoaded && 'pointer-events-auto relative opacity-100',
			)}
			{title}
			{src}
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
			<CodeSnippet class="rounded-t-none" code={usage} />
		</div>
	{/if}
</section>
