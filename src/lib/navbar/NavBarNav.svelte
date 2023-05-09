<script lang="ts">
	import { getNavbarContext } from './NavBar.svelte';

	const { menu } = getNavbarContext();
</script>

<div class="hidden items-center justify-between md:flex">
	<ul class="flex flex-col mt-4 font-medium md:flex-row md:items-center md:space-x-8 md:mt-0">
		<slot active={$menu.active} />
	</ul>
</div>

{#if $menu.expanded}
	<div
		class="items-center justify-between md:hidden w-full focus:outline-none focus:bg-none"
		use:menu.items
	>
		<ul class="flex flex-col mt-4 font-medium md:flex-row md:items-center md:space-x-8 md:mt-0">
			<slot active={$menu.active} />
		</ul>
	</div>
{/if}
