<script lang="ts">
	export let isLast = false;
</script>

<div
	class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
>
	<slot />
	{#if !isLast}
		<span class="pl-4 text-gray-400">&rsaquo;</span>
	{/if}
</div>
