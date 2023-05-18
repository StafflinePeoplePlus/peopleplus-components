<script lang="ts" context="module">
	const variants = {
		'title-xl':
			'text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl',
		subtitle: 'text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl'
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
