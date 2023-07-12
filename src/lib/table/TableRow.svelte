<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { getTableContext } from './context';
	import { actions, type UseActions } from '$lib/actions';

	type $$Props = SvelteHTMLElements['tr'] & { use?: UseActions };
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let use: UseActions = [];

	const table = getTableContext();
</script>

<tr
	class={twMerge(
		'group/tr',
		$table.striped && '[&:nth-of-type(2n+1)]:bg-gray-100 [&:nth-of-type(2n+1)]:dark:bg-gray-900',
		className,
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</tr>
