<script lang="ts">
	export let isLast = false;
</script>

{#if !isLast}
	<div
		class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white"
	>
		<slot />
		<span class="pl-4 text-gray-400">&rsaquo;</span>
	</div>
{:else}
	<div
		class="inline-flex items-center text-sm font-medium text-gray-500 dark:text-gray-400 dark:hover:text-white"
	>
		<slot />
	</div>
{/if}
