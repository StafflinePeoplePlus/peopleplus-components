<script lang="ts">
	import { createBubbler } from 'svelte/legacy';

	const bubble = createBubbler();
	import { actions, type UseActions } from '../actions';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	type PropsContent = {
		active?: boolean;
		class?: string;
		use?: UseActions;
		children?: import('svelte').Snippet;
	};
	type Props =
		| (PropsContent & { href: string } & SvelteHTMLElements['a'])
		| (PropsContent & { href?: undefined } & SvelteHTMLElements['button']);

	let {
		class: className = undefined,
		href = undefined,
		active = false,
		use = [],
		children,
		...rest
	}: Props = $props();
</script>

<li class="contents">
	<svelte:element
		this={href ? 'a' : 'button'}
		role={href ? 'link' : 'button'}
		{href}
		class={twMerge(
			'flex items-center gap-4 rounded-lg px-3 py-2.5 font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700',
			active &&
				'bg-primary-700 text-white hover:bg-primary-700 active:bg-primary-800 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-700',
			className,
		)}
		onclick={bubble('click')}
		use:actions={use}
		{...rest}
	>
		{@render children?.()}
	</svelte:element>
</li>
