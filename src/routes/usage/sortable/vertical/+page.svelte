<script lang="ts">
	import { Button, createSortableList, reorderList } from '$lib';
	import { crossfade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { flip } from 'svelte/animate';
	import { writable } from 'svelte/store';
	import GripVerticalIcon from 'lucide-svelte/icons/grip-vertical';

	let items = Array.from({ length: 20 }).map((_, i) => ({
		id: i.toString(),
		name: `Item ${i + 1}`,
	}));
	const [send, receive] = crossfade({});
	const sortingEnabled = writable(true);
	const sortable = createSortableList({
		enabled: sortingEnabled,
		onReorder: (op) => (items = reorderList(items, (item) => item.id, op)),
	});
</script>

<Button
	class="mb-4"
	variant="secondary"
	on:click={() => {
		$sortingEnabled = !$sortingEnabled;
	}}>Toggle Sortable</Button
>

<ul>
	{#each items as item (item.id)}
		<li
			class={twMerge(
				'mb-2 flex select-none items-center gap-1 rounded bg-gray-300 p-2 px-3 transition dark:bg-gray-700 dark:text-white',
				$sortingEnabled && 'cursor-grab hover:bg-gray-400 dark:hover:bg-gray-600',
			)}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
			use:sortable.item={item.id}
		>
			{#if $sortingEnabled}
				<GripVerticalIcon class="-ml-2" />
			{/if}
			<span>{item.name}</span>
		</li>
	{/each}
</ul>
