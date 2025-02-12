<script lang="ts">
	import { run } from 'svelte/legacy';

	import { setContext } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { tableContextKey, type TableContext } from './context';
	import { writable } from 'svelte/store';
	import { actions, type UseActions } from '$lib/actions';

	type Props = SvelteHTMLElements['table'] & {
		borders?: boolean;
		striped?: boolean;
		use?: UseActions;
		class?: string;
	};

	let {
		class: className = undefined,
		borders = false,
		striped = false,
		use = [],
		children,
		...rest
	}: Props = $props();

	const ctx = writable<TableContext>({ borders, striped });
	setContext(tableContextKey, ctx);

	run(() => {
		$ctx.borders = borders;
	});
	run(() => {
		$ctx.striped = striped;
	});
</script>

<table
	class={twMerge(
		'border-separate border-spacing-0 rounded-md shadow-sm',
		borders ? 'border-spacing-px' : 'border border-gray-300 dark:border-gray-600',
		className,
	)}
	use:actions={use}
	{...rest}
>
	{@render children?.()}
</table>
