<script>
	import { Footer, Copyright, ListItem } from '$lib';
</script>

<Footer>
	<Copyright slot="copyright">
		&copy; 2023
		<a href="https://peopleplus.co.uk/" class="hover:underline"> PeoplePlus&trade; </a>. All Rights
		Reserved.
	</Copyright>

	<svelte:fragment slot="links">
		<ListItem href="/">About</ListItem>
		<ListItem href="/">Privacy Policy</ListItem>
		<ListItem href="/">Licensing</ListItem>
		<ListItem href="/">Contact</ListItem>
	</svelte:fragment>
</Footer>
