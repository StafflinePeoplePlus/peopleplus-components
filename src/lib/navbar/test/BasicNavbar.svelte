<script lang="ts">
	import NavBar from '../NavBar.svelte';
	import NavBarNav from '../NavBarNav.svelte';
	import NavItem from '../NavItem.svelte';
</script>

<NavBar>
	<a href="https://peopleplus.co.uk" slot="start"> PeoplePlus </a>
	<NavBarNav slot="end">
		<NavItem href="/">Home</NavItem>
		<NavItem href="/about">About</NavItem>
		<NavItem href="/contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
