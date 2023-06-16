import { writable } from 'svelte/store';

export const toasts = writable([]);

export function showToast() {
	toasts.update((currentToasts) => [...currentToasts, undefined]);

	setTimeout(() => {
		toasts.update((t) => t.slice(1));
	}, 5000);
}

export function removeToast() {
	toasts.update((t) => t.slice(1));
}
