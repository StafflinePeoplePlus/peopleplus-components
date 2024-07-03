<script lang="ts" context="module">
	import { writable } from 'svelte/store';
	import type { ToastKind, ToastMessage } from './types';
	const store = writable<{ nextId: number; toasts: ToastMessage[] }>({ nextId: 0, toasts: [] });

	export function showToast({
		variant,
		message,
		timeout,
	}: {
		variant: ToastKind;
		message: string;
		timeout?: number | null;
	}) {
		store.update((state) => {
			state.toasts.push({
				id: state.nextId++,
				kind: variant,
				content: { message },
				duration: timeout,
			});
			return state;
		});
	}
</script>

<script lang="ts">
	import Toast from './Toast.svelte';
	import { twMerge } from 'tailwind-merge';

	let className: string | null | undefined = undefined;
	export { className as class };
</script>

<div
	class={twMerge(
		'fixed inset-x-2 bottom-0 z-50 flex flex-col-reverse sm:bottom-2 sm:left-auto sm:right-3',
		className,
	)}
>
	{#each $store.toasts as toast, index (toast.id)}
		<Toast
			{toast}
			on:dismiss={() =>
				store.update((state) => {
					state.toasts.splice(index, 1);
					return state;
				})}
		/>
	{/each}
</div>
