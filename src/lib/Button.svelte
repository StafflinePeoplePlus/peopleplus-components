<script lang="ts" context="module">
	const variants = {
		primary:
			'bg-primary-600 text-white shadow-sm hover:bg-primary-500 disabled:bg-primary-100 disabled:text-primary-300',
		secondary:
			'border-gray-200 bg-white shadow-sm dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:border-gray-500 focus:border-transparent',
		borderless:
			'hover:bg-gray-100 border hover:shadow-sm border-transparent hover:border-gray-200 dark:text-white text-black dark:hover:bg-gray-600 dark:hover:border-gray-500',
		muted:
			'bg-gray-100 shadow-sm border border-gray-200 text-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 dark:hover:border-gray-600 hover:bg-gray-200 hover:border-gray-300 text-gray-800',
	};
	const shapes = {
		square: '',
		rounded: 'rounded-lg',
		pill: 'rounded-full',
	};
	export type ButtonSize = 'lg' | 'default' | 'md' | 'sm';
	const sizes = {
		icon: {
			lg: 'h-12 w-12 text-2xl',
			default: 'h-10 w-10 text-xl',
			md: 'h-9 w-9 text-lg',
			sm: 'h-8 w-8 text-base',
		},
		default: {
			lg: 'text-lg h-12 px-6',
			default: 'text-base h-10 px-4',
			md: 'text-base h-9 px-3 py-1',
			sm: 'text-sm h-8 py-1 px-2.5',
		},
		pill: {
			lg: 'px-10',
			default: 'px-6',
			md: 'px-5',
			sm: 'px-4',
		},
	};
</script>

<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { actions, type UseActions } from './actions';

	type Props = {
		class?: string;
		variant?: keyof typeof variants;
		use?: UseActions;
		icon?: boolean;
		shape?: keyof typeof shapes;
		size?: ButtonSize;
	};
	type $$Props =
		| (Props & { href: string } & SvelteHTMLElements['a'])
		| (Props & { href?: undefined } & SvelteHTMLElements['button']);

	let className = '';
	export { className as class };
	export let href: string | undefined = undefined;
	export let variant: $$Props['variant'] = undefined;
	/**
	 * Visual shape of the button, defaults to `rounded`
	 */
	export let shape: $$Props['shape'] = undefined;
	export let size: $$Props['size'] = undefined;
	export let use: UseActions = [];
	export let icon: $$Props['icon'] = false;
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={twMerge(
		'inline-flex items-center justify-center gap-2 border border-transparent text-center font-medium transition focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-500',
		variants[variant ?? 'primary'],
		shapes[shape ?? 'rounded'],
		icon ? sizes.icon[size ?? 'default'] : sizes.default[size ?? 'default'],
		!icon && shape === 'pill' && sizes.pill[size ?? 'default'],
		className,
	)}
	role={href ? 'link' : 'button'}
	on:click
	use:actions={use}
	{...$$restProps}
>
	<slot />
</svelte:element>
