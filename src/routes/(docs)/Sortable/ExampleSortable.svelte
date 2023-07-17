<script lang="ts">
	import { Button, createSortableList, reorderList, createSortableGrid, reorderGrid } from '$lib';
	import { crossfade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	import { GripHorizontalIcon } from 'lucide-svelte';

	let items = Array.from({ length: 21 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const [send, receive] = crossfade({});
	const sortingEnabled = writable(true);
	const sortableGrid = createSortableGrid({
		enabled: sortingEnabled,
		onReorder: (op) => (items = reorderGrid(items, (item) => item.id, op)),
	});
	const sortableX = createSortableList({
		axis: 'x',
		enabled: sortingEnabled,
		onReorder: (op) => (items = reorderList(items, (item) => item.id, op)),
	});
	const sortableY = createSortableList({
		enabled: sortingEnabled,
		onReorder: (op) => (items = reorderList(items, (item) => item.id, op)),
	});
</script>

<Button
	class="mb-8"
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
			use:sortableGrid.item={item.id}
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

<ul class="relative -mx-6 mb-4 flex overflow-auto border-y border-gray-300 bg-gray-50 p-6">
	{#each items as item (item.id)}
		<li
			class={twMerge(
				'mr-2 flex h-16 w-24 shrink-0 select-none items-center justify-center gap-1 rounded bg-gray-300 p-2 px-3 transition',
				$sortingEnabled && 'cursor-grab hover:bg-gray-400',
			)}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
			use:sortableX.item={item.id}
		>
			{#if $sortingEnabled}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="-ml-2 h-5 w-5"
				>
					<circle cx="9" cy="12" r="1" /> <circle cx="9" cy="5" r="1" />
					<circle cx="9" cy="19" r="1" /> <circle cx="15" cy="12" r="1" />
					<circle cx="15" cy="5" r="1" /> <circle cx="15" cy="19" r="1" />
				</svg>
			{/if}
			<span>{item.name}</span>
		</li>
	{/each}
</ul>

<ul>
	{#each items as item (item.id)}
		<li
			class={twMerge(
				'mb-2 flex select-none items-center gap-1 rounded bg-gray-300 p-2 px-3 transition',
				$sortingEnabled && 'cursor-grab hover:bg-gray-400',
			)}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
			use:sortableY.item={item.id}
		>
			{#if $sortingEnabled}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="-ml-2 h-5 w-5"
				>
					<circle cx="9" cy="12" r="1" /> <circle cx="9" cy="5" r="1" />
					<circle cx="9" cy="19" r="1" /> <circle cx="15" cy="12" r="1" />
					<circle cx="15" cy="5" r="1" /> <circle cx="15" cy="19" r="1" />
				</svg>
			{/if}
			<span>{item.name}</span>
		</li>
	{/each}
</ul>
