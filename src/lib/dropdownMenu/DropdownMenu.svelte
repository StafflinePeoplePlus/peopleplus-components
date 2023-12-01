<script lang="ts">
	import { setContext } from 'svelte';
	import { dropdownMenuContext, type DropdownMenu } from './menu.js';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	let className: string | undefined = undefined;
	export { className as class };
	export let menu: DropdownMenu;

	setContext(dropdownMenuContext, menu);

	const {
		elements: { menu: dropdownMenu },
		states: { open },
	} = menu;
</script>

{#if $open}
	<div
		class={twMerge(
			'w-[16rem] max-w-full rounded-lg border bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800',
			className,
		)}
		transition:fly={{ duration: 150, y: -10 }}
		{...$dropdownMenu}
		use:dropdownMenu
		{...$$restProps}
	>
		<slot />
	</div>
{/if}
