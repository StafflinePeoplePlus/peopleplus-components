<script lang="ts">
	import NavBar from '../NavBar.svelte';
	import NavBarNav from '../NavBarNav.svelte';
	import NavItem from '../NavItem.svelte';
</script>

<div data-testid="navbar">
	<NavBar>
		<a data-testid="start" slot="start" href="https://peopleplus.co.uk"> PeoplePlus </a>
		<input data-testid="middle" slot="middle" type="search" placeholder="Search" />
		<div data-testid="end" slot="end">
			<NavBarNav>
				<NavItem href="/">Home</NavItem>
				<NavItem href="/about">About</NavItem>
				<NavItem href="/contact">Contact</NavItem>
			</NavBarNav>
		</div>
	</NavBar>
</div>
