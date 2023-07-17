<script lang="ts" context="module">
	const variants = {
		primary:
			'bg-primary-600 text-white hover:bg-primary-500 disabled:bg-primary-100 disabled:text-primary-300',
		secondary:
			'border-gray-200 bg-white dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-500 focus:border-transparent',
	};
</script>

<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { actions, type UseActions } from './actions';

	type Props = { class?: string; variant?: keyof typeof variants; use?: UseActions };
	type $$Props =
		| (Props & { href: string } & SvelteHTMLElements['a'])
		| (Props & { href?: undefined } & SvelteHTMLElements['button']);

	let className = '';
	export { className as class };
	export let href: string | undefined = undefined;
	export let variant: $$Props['variant'] = undefined;
	export let use: UseActions = [];
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={twMerge(
		'inline-flex items-center justify-center rounded-lg border border-transparent px-5 py-3 text-center text-base font-medium transition focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500',
		variants[variant ?? 'primary'],
		className,
	)}
	role={href ? 'link' : 'button'}
	on:click
	use:actions={use}
	{...$$restProps}
>
	<slot />
</svelte:element>
