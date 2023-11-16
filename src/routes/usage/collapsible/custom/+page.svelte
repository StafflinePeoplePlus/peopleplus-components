<script lang="ts">
	import { Collapsible } from '$lib';
	import Chip from '$lib/chip/Chip.svelte';
	let title = 'Leadership, Management, Productivity and Team Work';
	let subtitle =
		'Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Aenean eleifend, lacus euefficitur ' +
		'feugiat, lacus urna porttitor enim, et tincidunt nunc nisl non tellus.';

	const cards = [{ title: '1' }, { title: '2' }, { title: '3' }, { title: '4' }];
</script>

<!-- START USAGE -->
<Collapsible>
	<div slot="label" class="p-3 max-sm:-mr-12">
		<div class="flex items-center justify-between">
			<div class="gap-4 flex flex-col sm:flex-row">
				<div class="rounded-xl bg-white bg-cover">
					<img
						src="/jumbotron.jpg"
						alt="/jumbotron.jpg"
						class="h-36 w-full sm:w-96 lg:h-full rounded-xl object-cover"
					/>
				</div>

				<div class="space-y-4 place-self-center">
					<h2 class="font-bold">{title}</h2>
					<p class="text-sm text-gray-500 font-normal mt-auto">
						{subtitle}
					</p>
					<Chip>4 Items</Chip><br />
				</div>
			</div>
		</div>
	</div>

	<div class="p-3 pb-5">
		<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-800 p-4 rounded-xl shadow">
			{#each cards as card}
				<div
					class="h-full min-h-[150px] overflow-hidden rounded-lg bg-gray-50/20 p-4 border-2 border-gray-300 border-dashed"
				>
					<h3 class="mt-1 pr-20 text-2xl font-semibold text-white">{card.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</Collapsible>
<!-- END USAGE -->
