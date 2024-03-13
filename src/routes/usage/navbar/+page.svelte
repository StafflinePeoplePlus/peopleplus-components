<script lang="ts">
	import { InputArea, NavBar, NavBarNav, NavItem, TextInput } from '$lib';
	import SearchIcon from 'lucide-svelte/icons/search';
</script>

<!-- START USAGE -->
<NavBar>
	<a href="/" slot="start">
		<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
	</a>
	<div slot="middle">
		<InputArea>
			<div slot="start"><SearchIcon size={20} /></div>
			<TextInput name="query" placeholder="Search" />
		</InputArea>
	</div>
	<NavBarNav slot="end">
		<NavItem href="#home">Home</NavItem>
		<NavItem href="#categories">Categories</NavItem>
		<NavItem href="#about">About</NavItem>
		<NavItem href="#contact">Contact</NavItem>
	</NavBarNav>
</NavBar>
<!-- END USAGE -->
