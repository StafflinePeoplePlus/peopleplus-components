<script lang="ts">
	import { Chip, Button } from '$lib';

	let showChip = true;
</script>

{#if showChip}
	<Chip
		class="inline-flex items-center rounded-full border border-gray-300 bg-gray-200 pl-2 dark:border-gray-700 dark:bg-gray-800"
	>
		<span>Open Now</span>
		<Button
			variant="secondary"
			class="ml-2 h-1 rounded-full px-1 py-2 text-xs"
			on:click={() => (showChip = false)}
		>
			<span aria-hidden="true">&times;</span>
			<span class="sr-only">Remove</span>
		</Button>
	</Chip>
{/if}
