<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { getTableContext } from './context';

	type $$Props = SvelteHTMLElements['tr'];
	let className: $$Props['class'] = undefined;
	export { className as class };

	const table = getTableContext();
</script>

<tr
	class={twMerge(
		'group/tr',
		$table.striped && '[&:nth-of-type(2n+1)]:bg-gray-100 [&:nth-of-type(2n+1)]:dark:bg-gray-900',
		className
	)}
	{...$$restProps}
>
	<slot />
</tr>
