<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { isPosition, type VisualPosition } from './position';
	import { getTableContext } from './context';
	import { actions, type UseActions } from '$lib/actions';

	type Props = {
		visualPosition?: VisualPosition;
		number?: boolean;
		use?: UseActions;
	};
	type $$Props =
		| (Props & { header: true } & SvelteHTMLElements['th'])
		| (Props & { header?: false } & SvelteHTMLElements['td']);

	let className: $$Props['class'] = undefined;
	export { className as class };
	export let header: $$Props['header'] = false;
	export let number: $$Props['number'] = false;
	/**
	 * Override the visual position of the cell. In table layouts utilising row/colspan it can be
	 * difficult to determine in css which cells are visually in the corners to apply the correct
	 * border radius to.
	 */
	export let visualPosition: $$Props['visualPosition'] = undefined;
	export let use: UseActions = [];

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
	{...$$restProps}
>
	<slot />
</svelte:element>
