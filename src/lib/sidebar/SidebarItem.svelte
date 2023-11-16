<script lang="ts">
	import { actions, type UseActions } from '../actions';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type Props = { active?: boolean; class?: string; use?: UseActions };
	type $$Props =
		| (Props & { href: string } & SvelteHTMLElements['a'])
		| (Props & { href?: undefined } & SvelteHTMLElements['button']);

	let className: string | undefined = undefined;
	export { className as class };
	export let href: string | undefined = undefined;
	export let active: $$Props['active'] = false;
	export let use: UseActions = [];
</script>

<li class="contents">
	<svelte:element
		this={href ? 'a' : 'button'}
		role={href ? 'link' : 'button'}
		{href}
		class={twMerge(
			'flex items-center gap-4 rounded-lg px-3 py-2.5 font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
			active &&
				'bg-primary-700 text-white hover:bg-primary-700  active:bg-primary-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-700',
			className,
		)}
		on:click
		use:actions={use}
		{...$$restProps}
	>
		<slot />
	</svelte:element>
</li>
