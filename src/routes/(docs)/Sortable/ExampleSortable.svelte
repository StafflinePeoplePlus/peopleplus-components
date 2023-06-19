<script lang="ts">
	import { Button, createSortable } from '$lib';
	import { crossfade } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';
	import { flip } from 'svelte/animate';

	let items = [
		{ id: '1', name: 'Item 1' },
		{ id: '2', name: 'Item 2' },
		{ id: '3', name: 'Item 3' },
		{ id: '4', name: 'Item 4' },
		{ id: '5', name: 'Item 5' },
		{ id: '6', name: 'Item 6' },
		{ id: '7', name: 'Item 7' },
		{ id: '8', name: 'Item 8' },
		{ id: '9', name: 'Item 9' },
		{ id: '10', name: 'Item 10' },
		{ id: '11', name: 'Item 11' },
		{ id: '12', name: 'Item 12' },
		{ id: '13', name: 'Item 13' },
		{ id: '14', name: 'Item 14' },
		{ id: '15', name: 'Item 15' },
		{ id: '16', name: 'Item 16' },
		{ id: '17', name: 'Item 17' },
		{ id: '18', name: 'Item 18' },
		{ id: '19', name: 'Item 19' }
	];
	const sortable = createSortable({
		enabled: true,
		onReorder: (order) => {
			items = order.map((id) => items.find((i) => i.id === id)!);
		}
	});

	const [send, receive] = crossfade({});
</script>

<Button class="mb-8" variant="secondary" on:click={() => sortable.toggle()}>Toggle Sortable</Button>

<ul>
	{#each items as item (item.id)}
		<li
			class={twMerge(
				'mb-2 flex select-none items-center gap-1 rounded bg-gray-300 p-2 px-3 transition',
				$sortable.enabled && 'cursor-grab hover:bg-gray-400'
			)}
			in:receive={{ key: item.id }}
			out:send={{ key: item.id }}
			animate:flip={{ duration: 300 }}
			use:sortable.item={item.id}
		>
			{#if $sortable.enabled}
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
