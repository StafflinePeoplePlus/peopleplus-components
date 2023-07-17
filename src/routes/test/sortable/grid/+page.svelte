<script lang="ts">
	import { createSortableGrid, reorderGrid } from '$lib';

	let items = Array.from({ length: 100 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const sortable = createSortableGrid({
		onReorder: (op) => (items = reorderGrid(items, (item) => item.id, op)),
	});
</script>

<div class="grid grid-cols-4 gap-2 p-4">
	{#each items as item (item.id)}
		<div
			class="flex select-none items-center rounded bg-gray-300 p-2 px-3"
			use:sortable.item={item.id}
		>
			{item.name}
		</div>
	{/each}
</div>
