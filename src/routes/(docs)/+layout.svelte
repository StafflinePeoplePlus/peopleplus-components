<script lang="ts">
	import { browser } from '$app/environment';
	import { NavBar, NavBarNav, NavItem, screenMd } from '$lib';
	import { components } from './components';
</script>

<div class="flex h-full flex-col pt-16">
	<div class="fixed top-0 z-10 w-full shrink-0 bg-white shadow">
		<NavBar class="container mx-auto bg-white">
			<svelte:fragment slot="start">
				<a href="/">
					<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
				</a>
			</svelte:fragment>

			<NavBarNav slot="end">
				<NavItem href="/">Introduction</NavItem>
				<NavItem href="/guidelines">Implementation Guidelines</NavItem>
				{#if !browser || $screenMd}
					<NavItem href="/components/Accordion">Components</NavItem>
				{:else}
					{#each components as component}
						{@const href = component.href ?? `/components/${component.name}`}
						<NavItem {href}>{component.name}</NavItem>
					{/each}
				{/if}
			</NavBarNav>
		</NavBar>
	</div>
	<slot />
</div>
