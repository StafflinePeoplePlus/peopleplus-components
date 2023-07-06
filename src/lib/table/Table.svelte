<script lang="ts">
	import { setContext } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';
	import { tableContextKey, type TableContext } from './context';
	import { writable } from 'svelte/store';
	import { actions, type UseActions } from '$lib/actions';

	type $$Props = SvelteHTMLElements['table'] & {
		borders?: boolean;
		striped?: boolean;
		use?: UseActions;
	};
	let className: $$Props['class'] = undefined;
	export { className as class };
	export let borders = false;
	export let striped = false;
	export let use: UseActions = [];

	const ctx = writable<TableContext>({ borders, striped });
	setContext(tableContextKey, ctx);

	$: $ctx.borders = borders;
	$: $ctx.striped = striped;
</script>

<table
	class={twMerge(
		'border-separate border-spacing-0 rounded-md shadow-sm',
		borders ? 'border-spacing-px' : 'border border-gray-300 dark:border-gray-500',
		className
	)}
	use:actions={use}
	{...$$restProps}
>
	<slot />
</table>
