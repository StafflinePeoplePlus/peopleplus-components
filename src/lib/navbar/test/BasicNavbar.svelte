<script lang="ts">
	import NavBar from '../NavBar.svelte';
	import NavBarNav from '../NavBarNav.svelte';
	import NavItem from '../NavItem.svelte';
</script>

<div data-testid="navbar">
	<NavBar>
		{#snippet start()}
			<a data-testid="start" href="https://peopleplus.co.uk"> PeoplePlus </a>
		{/snippet}
		{#snippet middle()}
			<input data-testid="middle" type="search" placeholder="Search" />
		{/snippet}
		{#snippet end()}
			<div data-testid="end">
				<NavBarNav>
					<NavItem href="/">Home</NavItem>
					<NavItem href="/about">About</NavItem>
					<NavItem href="/contact">Contact</NavItem>
				</NavBarNav>
			</div>
		{/snippet}
	</NavBar>
</div>
