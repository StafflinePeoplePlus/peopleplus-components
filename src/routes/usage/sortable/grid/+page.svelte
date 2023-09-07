<script lang="ts">
	import { Button, createSortableGrid, reorderGrid } from '$lib';
	import { crossfade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	import { GripHorizontalIcon } from 'lucide-svelte';

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
			class={twMerge(
				'flex aspect-square select-none flex-col items-center rounded-lg bg-gray-300',
				$sortingEnabled && 'cursor-grab hover:bg-gray-400',
			)}
			use:sortable.item={item.id}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
		>
			{#if $sortingEnabled}
				<GripHorizontalIcon class="absolute" />
			{/if}
			<span class="my-auto">{item.name}</span>
		</div>
	{/each}
</div>
