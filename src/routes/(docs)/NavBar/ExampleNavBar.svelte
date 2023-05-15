<script>
	import { NavBar, NavBarNav, NavItem } from '$lib';
</script>

<NavBar>
	<a href="/" slot="start">
		<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
	</a>
	<NavBarNav slot="end">
		<NavItem href="#home">Home</NavItem>
		<NavItem href="#categories">Categories</NavItem>
		<NavItem href="#about">About</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
