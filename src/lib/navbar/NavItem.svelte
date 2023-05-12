<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	let className = '';
	export { className as class };
	export let href: string | undefined = undefined;
</script>

<li>
	<svelte:element
		this={href ? 'a' : 'button'}
		{href}
		class={twMerge(
			'block py-2 pl-3 pr-4 text-left text-gray-900 dark:text-white border-b border-gray-200 dark:border-white/20 transition hover:bg-gray-50 dark:hover:bg-white/20 md:hover:bg-transparent dark:md:hover:bg-transparent md:border-0 md:hover:text-primary-700 dark:md:hover:text-primary-400 md:p-1',
			className
		)}
	>
		<slot />
	</svelte:element>
</li>
