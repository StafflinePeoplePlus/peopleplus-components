<script lang="ts">
	import { NavBar, NavBarNav, NavItem } from '$lib';

	const routes = [
		{ href: '/', label: 'Introduction' },
		{ href: '/components/Accordion', label: 'Components' },
		{ href: '/guidelines', label: 'Implementation Guidelines' },
	];
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
				{#each routes as route}
					<NavItem href={route.href}>{route.label}</NavItem>
				{/each}
			</NavBarNav>
		</NavBar>
	</div>
	<slot />
</div>
