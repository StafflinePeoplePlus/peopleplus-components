<script lang="ts">
	import { Button, createSortableGrid, reorderGrid } from '$lib';
	import GripHorizontalIcon from 'lucide-svelte/icons/grip-horizontal';
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	import { crossfade } from 'svelte/transition';

	let items = Array.from({ length: 20 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const [send, receive] = crossfade({});
	const sortingEnabled = writable(true);
	const sortable = createSortableGrid({
		enabled: sortingEnabled,
		onReorder: (op) => (items = reorderGrid(items, (item) => item.id, op)),
	});
</script>

<Button
	class="mb-4"
	variant="secondary"
	on:click={() => {
		$sortingEnabled = !$sortingEnabled;
	}}>Toggle Sortable</Button
>

<div class="mb-8 grid grid-cols-7 gap-2">
	{#each items as item (item.id)}
		<div
			class="relative flex aspect-square flex-col items-center rounded-lg bg-gray-300 transition-opacity data-[dragging-over]:opacity-50 data-[dragging]:opacity-0 dark:bg-gray-700 dark:text-white"
			use:sortable.target={item.id}
			use:sortable.image={item.id}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
		>
			{#if $sortingEnabled}
				<div
					class="absolute inset-x-2 top-2 flex cursor-grab select-none items-center justify-center rounded-lg bg-gray-100 shadow-sm"
					use:sortable.handle={item.id}
				>
					<GripHorizontalIcon />
				</div>
			{/if}
			<span class="my-auto">{item.name}</span>
		</div>
	{/each}
</div>
