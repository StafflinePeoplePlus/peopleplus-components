<script lang="ts">
	let className = '';
	export { className as class };
</script>

<span class="{className} text-sm text-gray-500 sm:text-center dark:text-gray-400">
	<slot />
</span>
