<script lang="ts">
	import { toasts, showToast, removeToast } from './toastStore';
	import {Button} from "$lib";
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = SvelteHTMLElements['section'];

	let className: Props['class'] = undefined;
	export { className as class };

	let restProps = {};
</script>

{#each $toasts as toast (toast.id)}
	<section
			class={twMerge(
		'toast my-4 flex p-4 text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 items-center',
		className
	)}
			{...restProps}
	>
		<slot />

		<Button variant="secondary" on:click={() => removeToast(toast.id)} class="ml-auto">
			<span aria-hidden="true"> &times; </span>
		</Button>
	</section>
{/each}
