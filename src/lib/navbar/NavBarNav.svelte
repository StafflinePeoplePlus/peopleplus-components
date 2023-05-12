<script lang="ts">
	let className = '';
	export { className as class };
</script>

<ul class="flex flex-col font-medium md:flex-row md:items-center md:gap-x-4 md:mt-0 {className}">
	<slot />
</ul>
