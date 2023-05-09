<script lang="ts">
	import NavBar from '../NavBar.svelte';
	import NavBarNav from '../NavBarNav.svelte';
	import NavBarTitle from '../NavBarTitle.svelte';
	import NavItem from '../NavItem.svelte';
</script>

<NavBar>
	<NavBarTitle href="https://peopleplus.co.uk">PeoplePlus</NavBarTitle>
	<NavBarNav>
		<NavItem href="/">Home</NavItem>
		<NavItem href="/about">About</NavItem>
		<NavItem href="/contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
