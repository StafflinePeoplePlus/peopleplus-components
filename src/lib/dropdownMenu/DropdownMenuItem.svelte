<script lang="ts">
	import { getDropdownMenuContext } from './menu';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { actions, type UseActions } from '../actions';

	type PropsContent = {
		class?: string;
		variant?: 'default' | 'danger' | 'primary';
		use?: UseActions;
		children?: import('svelte').Snippet;
		onClick?: () => void;
	};
	type Props =
		| (PropsContent & { href: string } & SvelteHTMLElements['a'])
		| (PropsContent & { href?: undefined } & SvelteHTMLElements['button']);

	let {
		class: className = undefined,
		href = undefined,
		variant = undefined,
		use = [],
		children,
		onClick,
		...rest
	}: Props = $props();

	const variants = {
		default: 'text-gray-700 focus:bg-gray-200 dark:text-gray-200 dark:focus:bg-gray-700',
		danger: 'text-red-700 focus:bg-red-500/20 dark:text-red-400 dark:focus:text-red-50',
		primary:
			'text-primary-700 focus:bg-primary-500/20 dark:text-primary-400 dark:focus:text-primary-50',
	};

	let activeVariant = $derived(variants[variant ?? 'default']);

	const {
		elements: { item },
	} = getDropdownMenuContext();
</script>

<!-- TODO: migrate melt ui stuff to svelte 5 -->
<!-- svelte-ignore event_directive_deprecated -->
<svelte:element
	this={href ? 'a' : 'button'}
	{href}
	class={twMerge(
		'flex w-full items-center gap-4 rounded-md px-4 py-2 text-left text-sm font-medium transition focus:outline-hidden',
		activeVariant,
		className,
	)}
	{...$item}
	use:item
	use:actions={use}
	on:m-click={() => {
		if (onClick) onClick();
	}}
	{...rest}
>
	{@render children?.()}
</svelte:element>
