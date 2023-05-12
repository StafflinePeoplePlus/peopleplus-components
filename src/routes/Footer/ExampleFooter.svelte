<script>
	import { Footer, FooterCopyright, FooterItem } from '$lib';
</script>

<Footer>
	<FooterCopyright slot="start">
		&copy; 2023
		<a href="https://peopleplus.co.uk/" class="hover:underline"> PeoplePlus&trade; </a>. All Rights
		Reserved.
	</FooterCopyright>

	<svelte:fragment slot="end">
		<FooterItem href="/">About</FooterItem>
		<FooterItem href="/">Privacy Policy</FooterItem>
		<FooterItem href="/">Licensing</FooterItem>
		<FooterItem href="/">Contact</FooterItem>
	</svelte:fragment>
</Footer>
