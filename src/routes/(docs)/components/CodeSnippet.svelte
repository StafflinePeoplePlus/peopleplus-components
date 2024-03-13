<script lang="ts">
	import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let code: { html: string; text: string };
	export let lang: 'typescript' | 'svelte' = 'svelte';

	let copied = false;
	async function copyCode() {
		try {
			await navigator.clipboard.writeText(code.text);
			copied = true;
			setTimeout(() => {
				copied = false;
			}, 1000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	}
</script>

<div class={twMerge('overflow-clip rounded-lg bg-[#22272e]', className)}>
	<div class="-mb-2 flex items-center justify-between pl-4 pr-3 pt-3">
		<p class="text-xs font-semibold uppercase text-gray-200">{lang}</p>
		<button
			class="rounded-lg bg-gray-600 p-1.5 text-white shadow-sm transition hover:bg-gray-500"
			on:click={copyCode}
		>
			<span class="sr-only">Copy code to clipboard</span>
			{#if copied}
				<ClipboardCheckIcon size={16} aria-hidden="true" />
			{:else}
				<ClipboardIcon size={16} aria-hidden="true" />
			{/if}
		</button>
	</div>
	<!-- {#if lang === 'svelte'}
		<HighlightSvelte class="text-white" {code} />
	{:else}
		<Highlight class="text-white" language={typescript} {code} />
	{/if} -->
	<div class="p-4">
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		{@html code.html}
	</div>
</div>
