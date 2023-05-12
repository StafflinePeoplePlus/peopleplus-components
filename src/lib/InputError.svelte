<script lang="ts">
	let className = '';
	export { className as class };
</script>

<span class="font-semibold text-red-700 dark:text-red-400 {className}">
	<slot />
</span>
