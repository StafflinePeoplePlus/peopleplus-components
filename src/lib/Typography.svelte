<script lang="ts" module>
	const variants = {
		'main-heading':
			'text-4xl font-extrabold tracking-tight leading-none text-black md:text-5xl lg:text-6xl dark:text-white',
		heading: 'text-2xl md:text-4xl tracking-tight font-extrabold text-black dark:text-white',
		'sub-heading': 'text-xl font-bold text-black dark:text-white',
		'body-xl': 'text-lg sm:text-xl text-gray-700 dark:text-gray-200',
		'body-lg': 'text-md sm:text-lg text-gray-700 dark:text-gray-200',
		body: 'text-gray-700 dark:text-gray-200',
		caption: 'text-sm text-gray-500 dark:text-gray-300',
	};
</script>

<script lang="ts">
	import { actions, type UseActions } from './actions';
	import { twMerge } from 'tailwind-merge';
	import type { HTMLAttributes, SvelteHTMLElements } from 'svelte/elements';

	type Props = { class?: string; variant: keyof typeof variants; use?: UseActions };

	// Extend the html element given in `as` or default to `<p />`
	type T = $$Generic<{ as?: keyof SvelteHTMLElements }>;
	type ElementAttrs = T['as'] extends keyof SvelteHTMLElements
		? SvelteHTMLElements[T['as']]
		: HTMLAttributes<HTMLParagraphElement>;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	type $$Props = Props & T & ElementAttrs;

	
	interface Props {
		class?: string;
		variant: Props['variant'];
		as?: keyof SvelteHTMLElements | undefined;
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		class: className = '',
		variant,
		as = undefined,
		use = [],
		children,
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={as ?? 'p'}
	class={twMerge(variants[variant], className)}
	use:actions={use}
	{...rest}>{@render children?.()}</svelte:element
>
