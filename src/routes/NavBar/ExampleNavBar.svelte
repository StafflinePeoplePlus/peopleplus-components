<script>
	import { NavBar, NavBarNav, NavBarTitle, NavItem, NavHamburger } from '$lib';
</script>

<NavBar>
	<NavBarTitle>
		<img
			src="https://peopleplus.co.uk/theme/peopleplus/assets/img/peopleplus_logo.svg"
			class="h-8"
			alt="PeoplePlus Logo"
		/>
	</NavBarTitle>
	<NavHamburger />
	<NavBarNav>
		<NavItem href="#home">Home</NavItem>
		<NavItem href="#categories">Categories</NavItem>
		<NavItem href="#about">About</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
