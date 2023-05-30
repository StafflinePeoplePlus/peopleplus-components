<script lang="ts">
	export let href: string;
	let className = '';
	export { className as class };
</script>

<li>
	<a {href} class="{className} mr-4 hover:underline md:mr-6">
		<slot />
	</a>
</li>
