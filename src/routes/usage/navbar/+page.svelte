<script lang="ts">
	import { InputArea, NavBar, NavBarNav, NavItem, TextInput } from '$lib';
	import SearchIcon from 'lucide-svelte/icons/search';
</script>

<!-- START USAGE -->
<NavBar>
	{#snippet start()}
		<a href="/" >
			<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
		</a>
	{/snippet}
	{#snippet middle()}
		<div >
			<InputArea>
				{#snippet start()}
						<div ><SearchIcon size={20} /></div>
					{/snippet}
				<TextInput name="query" placeholder="Search" />
			</InputArea>
		</div>
	{/snippet}
	{#snippet end()}
		<NavBarNav >
			<NavItem href="#home">Home</NavItem>
			<NavItem href="#categories">Categories</NavItem>
			<NavItem href="#about">About</NavItem>
			<NavItem href="#contact">Contact</NavItem>
		</NavBarNav>
	{/snippet}
</NavBar>
<!-- END USAGE -->
