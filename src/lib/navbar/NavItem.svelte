<script lang="ts">
	import { classes } from '$lib/classes';
	import { getNavbarContext } from './NavBar.svelte';

	let className = '';
	export { className as class };
	export let href: string | undefined = undefined;
	export let active = false;
	export let value: string | undefined = href;
	export let disabled = false;
	export let bare = false;

	let el: HTMLLIElement | undefined = undefined;

	const { menu } = getNavbarContext();
	$: active = value ? $menu.active === value : $menu.active === el?.textContent;
</script>

<li bind:this={el} use:menu.item={{ value, disabled }} class={className}>
	{#if bare}
		<slot {active} />
	{:else}
		<svelte:element
			this={href ? 'a' : 'button'}
			{href}
			class={classes(
				'block py-2 pl-3 pr-4 text-left text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/20 transition md:border-0 md:hover:text-primary-700 dark:md:hover:text-primary-400 md:p-0',
				active &&
					'bg-gray-50 dark:bg-white/20 md:bg-transparent dark:md:bg-transparent md:text-primary-700 dark:md:text-primary-400'
			)}
		>
			<slot {active} />
		</svelte:element>
	{/if}
</li>
