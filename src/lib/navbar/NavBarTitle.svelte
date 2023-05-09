<script lang="ts">
	export let href: string | undefined = undefined;
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class="flex items-center">
	<slot />
</svelte:element>
