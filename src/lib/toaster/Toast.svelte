<script lang="ts">
	import { slide, fly } from 'svelte/transition';
	import type { ToastMessage } from './types';
	import { twMerge } from 'tailwind-merge';
	import { onMount, createEventDispatcher } from 'svelte';
	import { XCircleIcon, CheckCircleIcon, XIcon, AlertCircle } from 'lucide-svelte';
	const dispatch = createEventDispatcher<{ dismiss: undefined }>();
	export let toast: ToastMessage;
	onMount(() => {
		let id;
		if (toast.duration !== null) {
			id = setTimeout(() => {
				dispatch('dismiss');
			}, toast.duration ?? 5000);
		}
		return () => {
			if (id) clearTimeout(id);
		};
	});
</script>

<div
	class={twMerge(
		'mb-2 flex w-72 max-w-full items-center gap-3 rounded-md border border-white/20 p-3 leading-tight text-white shadow-lg backdrop-blur-md',
		toast.kind === 'success' && 'bg-green-700/70',
		toast.kind === 'alert' && 'bg-orange-600/70',
		toast.kind === 'error' && 'bg-rose-700/70'
	)}
	role="alert"
	in:fly={{ x: 300 }}
	out:slide
	aria-labelledby="toast-{toast.id}-message"
>
	{#if toast.kind === 'success'}
		<CheckCircleIcon size="20" aria-hidden="true" />
	{:else if toast.kind === 'alert'}
		<AlertCircle size="20" aria-hidden="true" />
	{:else if toast.kind === 'error'}
		<XCircleIcon size="20" aria-hidden="true" />
	{/if}
	<span id="toast-{toast.id}-message">{toast.content.message}</span>
	<button
		class="-my-0.5 ml-auto flex items-center justify-center rounded-full p-1.5 transition hover:bg-white/20"
		on:click={() => dispatch('dismiss')}
	>
		<XIcon size="16" />
	</button>
</div>
