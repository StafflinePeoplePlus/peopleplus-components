<script lang="ts">
	import { createSortableList, reorderList } from '$lib';

	let items = Array.from({ length: 100 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const sortable = createSortableList({
		axis: 'x',
		onReorder: (op) => (items = reorderList(items, (item) => item.id, op)),
	});
</script>

<div class="p-4">
	<ul class="flex overflow-auto">
		{#each items as item (item.id)}
			<li class="mr-2 h-16 w-24 shrink-0 rounded bg-gray-300 p-2 px-3" use:sortable.item={item.id}>
				{item.name}
			</li>
		{/each}
	</ul>
</div>
