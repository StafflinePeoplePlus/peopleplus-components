<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let href: string | undefined = undefined;
	export let use: UseActions = [];
</script>

<li>
	<svelte:element
		this={href ? 'a' : 'button'}
		{href}
		class={twMerge(
			'block border-b border-gray-200 py-2 pl-3 pr-4 text-left text-gray-900 transition hover:bg-gray-50 dark:border-white/20 dark:text-white dark:hover:bg-white/20 md:border-0 md:p-1 md:hover:bg-transparent md:hover:text-primary-700 dark:md:hover:bg-transparent dark:md:hover:text-primary-400',
			className
		)}
		use:actions={use}
		{...$$restProps}
	>
		<slot />
	</svelte:element>
</li>
