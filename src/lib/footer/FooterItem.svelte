<script lang="ts">
	export let href: string;
</script>

<li>
	<a {href} class="mr-4 hover:underline md:mr-6">
		<slot />
	</a>
</li>
