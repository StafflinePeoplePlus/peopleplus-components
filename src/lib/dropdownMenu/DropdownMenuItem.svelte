<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { getDropdownMenuContext } from './menu';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { actions, type UseActions } from '../actions';

	type Props = {
		class?: string;
		variant?: 'default' | 'danger' | 'primary';
		use?: UseActions;
	};
	type $$Props =
		| (Props & { href: string } & SvelteHTMLElements['a'])
		| (Props & { href?: undefined } & SvelteHTMLElements['button']);
	
	interface Props {
		class?: $$Props['class'];
		href?: string | undefined;
		variant?: $$Props['variant'];
		use?: UseActions;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let {
		class: className = undefined,
		href = undefined,
		variant = undefined,
		use = [],
		children,
		...rest
	}: Props = $props();

	const variants = {
		default: 'text-gray-700 focus:bg-gray-200 dark:text-gray-200 focus:dark:bg-gray-700',
		danger: 'text-red-700 focus:bg-red-500/20 dark:text-red-400 dark:focus:text-red-50',
		primary:
			'text-primary-700 focus:bg-primary-500/20 dark:text-primary-400 dark:focus:text-primary-50',
	};

	let activeVariant = $derived(variants[variant ?? 'default']);

	export const dispatch = createEventDispatcher();

	const {
		elements: { item },
	} = getDropdownMenuContext();
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={twMerge(
		'flex w-full items-center gap-4 rounded-md px-4 py-2 text-left text-sm font-medium transition focus:outline-none',
		activeVariant,
		className,
	)}
	{...$item}
	use:item
	use:actions={use}
	onm-click={() => dispatch('click')}
	{...rest}
>
	{@render children?.()}
</svelte:element>
