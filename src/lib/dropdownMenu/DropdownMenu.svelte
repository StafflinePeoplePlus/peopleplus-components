<script lang="ts">
	import { setContext } from 'svelte';
	import { dropdownMenuContext, type DropdownMenu as DropdownMenuType } from './menu.js';
	import { fly } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	
	interface Props {
		class?: string | undefined;
		menu: DropdownMenuType;
		children?: import('svelte').Snippet;
		[key: string]: any
	}

	let { class: className = undefined, menu, children, ...rest }: Props = $props();

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
		{...rest}
	>
		{@render children?.()}
	</div>
{/if}
