<script lang="ts">
	let className = '';
	export { className as class };
</script>

<span class="{className} text-sm text-gray-500 dark:text-gray-400 sm:text-center">
	<slot />
</span>
