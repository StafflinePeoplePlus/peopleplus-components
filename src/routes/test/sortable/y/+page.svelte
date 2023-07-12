<script lang="ts">
	import { createSortable, reorderList } from '$lib';

	let items = Array.from({ length: 100 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const sortable = createSortable({
		onReorder: (op) => (items = reorderList(items, (item) => item.id, op)),
	});
</script>

<ul class="p-4">
	{#each items as item (item.id)}
		<li
			class="mb-2 flex select-none items-center gap-1 rounded bg-gray-300 p-2 px-3 transition"
			use:sortable.item={item.id}
		>
			{item.name}
		</li>
	{/each}
</ul>
