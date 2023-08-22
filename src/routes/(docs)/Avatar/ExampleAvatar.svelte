<script lang="ts">
	import { Avatar } from '$lib';
	import Typography from '$lib/Typography.svelte';

	const sizes = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'] as const;
</script>

<div class="mb-8 flex items-end gap-2">
	{#each sizes as size}
		<div>
			<Avatar src="https://avatars.githubusercontent.com/u/1162160?v=4" name="Rich Harris" {size} />
			<Typography variant="caption" class="mt-2 text-center">{size}</Typography>
		</div>
	{/each}
</div>

<h2 class="font-medium">Fallback</h2>
<div class="flex items-end gap-2">
	{#each sizes as size}
		<div>
			<Avatar name="Rich Harris" {size} />
			<Typography variant="caption" class="mt-2 text-center">{size}</Typography>
		</div>
	{/each}
</div>
