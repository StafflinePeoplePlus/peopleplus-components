<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { isPosition, type VisualPosition } from './position';
	import { getTableContext } from './context';
	import { actions, type UseActions } from '$lib/actions';

	type PropsContent = {
		class?: string;
		visualPosition?: VisualPosition;
		number?: boolean;
		use?: UseActions;
		children?: import('svelte').Snippet;
	};

	type Props =
		| (PropsContent & { header: true } & SvelteHTMLElements['th'])
		| (PropsContent & { header?: false } & SvelteHTMLElements['td']);

	let {
		class: className = undefined,
		header = false,
		number = false,
		visualPosition = undefined,
		use = [],
		children,
		...rest
	}: Props = $props();

	const table = getTableContext();
</script>

<svelte:element
	this={header ? 'th' : 'td'}
	class={twMerge(
		'px-3 py-2 text-gray-800 dark:text-white',
		header && 'bg-gray-200 font-semibold text-gray-800 dark:bg-gray-700 dark:text-white',
		number && 'text-right text-gray-800 dark:text-white',
		$table.borders && 'ring-1 ring-gray-300 dark:ring-gray-500',
		visualPosition
			? isPosition(visualPosition, 'top-left') && 'rounded-tl-md'
			: 'group-first-of-type/tr:first:rounded-tl-md',
		visualPosition
			? isPosition(visualPosition, 'top-right') && 'rounded-tr-md'
			: 'group-first-of-type/tr:last:rounded-tr-md',
		visualPosition
			? isPosition(visualPosition, 'bottom-left') && 'rounded-bl-md'
			: 'group-last-of-type/tr:first:rounded-bl-md',
		visualPosition
			? isPosition(visualPosition, 'bottom-right') && 'rounded-br-md'
			: 'group-last-of-type/tr:last:rounded-br-md',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</svelte:element>
