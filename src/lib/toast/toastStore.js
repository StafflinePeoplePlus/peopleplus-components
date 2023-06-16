import { writable } from 'svelte/store';

export const toasts = writable([]);

export function showToast(timeout = 5000) {
	toasts.update((currentToasts) => [...currentToasts, undefined]);

	setTimeout(() => {
		toasts.update((t) => t.slice(1));
	}, timeout);
}

export function removeToast() {
	toasts.update((t) => t.slice(1));
}
