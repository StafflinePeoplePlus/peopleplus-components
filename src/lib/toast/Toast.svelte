<script>
	import { toasts } from './toastStore';

	let id = 0;

	function showToast(message) {
		toasts.update((currentToasts) => [...currentToasts, { message, id: ++id }]);

		setTimeout(() => {
			toasts.update((t) => t.filter((toast) => toast.id !== id));
		}, 5000);
	}

	function removeToast(id) {
		toasts.update((t) => t.filter((toast) => toast.id !== id));
	}
</script>

<button on:click={() => showToast('Toast message')}>O</button>

{#each $toasts as toast (toast.id)}
	<div
		class="toast mb-4 flex w-full max-w-md items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
	>
		<div
			class="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200"
		/>
		<div class="ml-3 text-sm font-normal">
			{toast.message}
		</div>
		<button
			on:click={() => removeToast(toast.id)}
			type="button"
			class="ml-auto inline-flex h-8 w-8 items-center rounded-lg bg-white text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
			aria-label="Close"
		>
			<span class="mx-auto text-center"> &times; </span>
		</button>
	</div>
{/each}
