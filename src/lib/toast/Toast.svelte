<script lang="ts">
	import { toasts, removeToast } from './toastStore';
	import { Button } from '$lib';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	function generateVariantStyle(color: string) {
		return `animate-slideIn items-center text-${color}-800 border border-${color}-300 bg-${color}-50 dark:bg-gray-800 dark:text-${color}-400 dark:border-${color}-300 my-4 flex p-4 rounded-lg`;
	}

	function generateIconStyle(color: string) {
		return `bg-white shadow-sm rounded-lg mr-3 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center text-${color}-800 shadow-sm dark:bg-${color}-800 dark:text-${color}-200`;
	}

	const variants = {
		success: generateVariantStyle('green'),
		warning: generateVariantStyle('yellow'),
		error: generateVariantStyle('red')
	};

	type Props = SvelteHTMLElements['section'];

	let className: Props['class'] = undefined;
	export { className as class };
	export let variant: keyof typeof variants;
	let restProps = {};
</script>

{#each $toasts as toast, i (i)}
	<section class={twMerge(variants[variant], className)} {...restProps}>
		<div class={twMerge(generateIconStyle(variant))} >
			{#if variant === 'warning'}
				!
			{:else if variant === 'error'}
				&times;
			{:else if variant === 'success'}
				&#10003;
			{/if}
		</div>
		<slot />

		<Button variant="secondary" on:click={() => removeToast(i)} class="ml-auto">
			<span aria-hidden="true"> &times; </span>
		</Button>
	</section>
{/each}
