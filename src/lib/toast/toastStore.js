import { writable } from 'svelte/store';

export const toasts = writable([]);
let id = 0;

export function showToast(message) {
    toasts.update((currentToasts) => [...currentToasts, { message, id: ++id }]);

    setTimeout(() => {
        toasts.update((t) => t.filter((toast) => toast.id !== id));
    }, 5000);
}

export function removeToast(id) {
    toasts.update((t) => t.filter((toast) => toast.id !== id));
}
