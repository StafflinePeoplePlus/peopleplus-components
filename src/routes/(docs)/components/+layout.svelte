<script lang="ts">
	import { page } from '$app/stores';
	import { components } from './index';
	import Copyright from '../Copyright.svelte';
	import { Sidebar, SidebarItem } from '$lib';
</script>

<div class="flex grow flex-row overflow-hidden">
	<Sidebar class="hidden w-60 shrink-0 border-t dark:border-gray-600 md:block">
		<ul class="flex grow flex-col gap-1">
			{#each components as component}
				{@const href = component.href ?? `/components/${component.name}`}
				<SidebarItem {href} active={href === $page.url.pathname}>{component.name}</SidebarItem>
			{/each}
		</ul>
	</Sidebar>
	<main class="h-full grow overflow-auto bg-gray-50 dark:bg-gray-900">
		<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 md:px-12"><slot /></div>
		<Copyright />
	</main>
</div>
