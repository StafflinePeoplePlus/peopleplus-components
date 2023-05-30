<script lang="ts" context="module">
	const variants = {
		'main-heading':
			'text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white',
		heading: 'text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white',
		'sub-heading': 'text-xl font-bold dark:text-white',
		'body-lg': 'text-md sm:text-lg text-gray-700 dark:text-gray-400',
		body: 'text-gray-700 dark:text-gray-400',
		caption: 'text-sm text-gray-500 dark:text-gray-400'
	};
</script>

<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

	type Props = { class?: string; variant: keyof typeof variants };

	// Extend the html element given in `as` or default to `<p />`
	type T = $$Generic<{ as?: keyof SvelteHTMLElements }>;
	type ElementAttrs = T['as'] extends keyof SvelteHTMLElements
		? SvelteHTMLElements[T['as']]
		: HTMLAttributes<HTMLParagraphElement>;
	type $$Props = Props & T & ElementAttrs;

	let className = '';
	export { className as class };
	export let variant: Props['variant'];
	export let as: keyof SvelteHTMLElements | undefined = undefined;
</script>

<svelte:element this={as ?? 'p'} class={twMerge(variants[variant], className)} {...$$restProps}
	><slot /></svelte:element
>
