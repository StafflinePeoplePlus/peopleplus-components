<script>
	import { NavBar, NavBarNav, NavItem, TextInput, InputArea } from '$lib';
	import SearchIcon from './SearchIcon.svelte';
</script>

<NavBar>
	<a href="/" slot="start">
		<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
	</a>
	<form slot="middle">
		<InputArea>
			<div slot="start"><SearchIcon /></div>
			<TextInput name="query" placeholder="Search" />
		</InputArea>
	</form>
	<NavBarNav slot="end">
		<NavItem href="#home">Home</NavItem>
		<NavItem href="#categories">Categories</NavItem>
		<NavItem href="#about">About</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
