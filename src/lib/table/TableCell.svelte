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
	let elementType = $derived(header ? 'th' : 'td');
</script>

<svelte:element
	this={elementType}
	class={twMerge(
		'px-3 py-2 text-gray-800 dark:text-white',
		header && 'bg-gray-200 font-semibold text-gray-800 dark:bg-gray-700 dark:text-white',
		number && 'text-right text-gray-800 dark:text-white',
		$table.borders && 'ring-1 ring-gray-300 dark:ring-gray-500',
		visualPosition
			? isPosition(visualPosition, 'top-left') && 'rounded-tl-md'
			: 'first:group-first-of-type/tr:rounded-tl-md',
		visualPosition
			? isPosition(visualPosition, 'top-right') && 'rounded-tr-md'
			: 'last:group-first-of-type/tr:rounded-tr-md',
		visualPosition
			? isPosition(visualPosition, 'bottom-left') && 'rounded-bl-md'
			: 'first:group-last-of-type/tr:rounded-bl-md',
		visualPosition
			? isPosition(visualPosition, 'bottom-right') && 'rounded-br-md'
			: 'last:group-last-of-type/tr:rounded-br-md',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</svelte:element>
