<script lang="ts">
	import { Button, Drawer, Typography, Chip } from '$lib';

	const columns = [
		{ label: 'Size', value: 'XS' },
		{ label: 'Units tested', value: '8' },
		{ label: 'Expected value', value: '16.00cm' },
		{ label: 'Tolerance', value: '-1.5cm / +1cm' },
		{ label: 'Status', value: 'Failed' },
	];

	let open = false;
	function toggleDrawer() {
		open = !open;
	}
</script>

<Button on:click={toggleDrawer}>
	{open ? 'Close' : 'Open'} Measurements
</Button>

<!-- START USAGE -->
<Drawer bind:open>
	<Typography variant="body-lg" class="font-bold">Measurements</Typography>
	<Typography variant="body">Neck width: Seam to seam width</Typography>
	<div class="mt-4 flex-col space-y-4 text-sm dark:text-white">
		{#each columns as column}
			<div class="flex justify-between border-t pt-4 dark:border-gray-600">
				<div>{column.label}</div>
				<div>
					{#if column.label === 'Status'}
						<Chip>{column.value}</Chip>
					{:else}
						{column.value}
					{/if}
				</div>
			</div>
		{/each}
	</div>
</Drawer>
<!-- END USAGE -->
