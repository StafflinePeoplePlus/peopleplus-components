<script lang="ts">
	import { Button, Drawer, Typography, Chip } from '$lib';

	let open = false;
	function toggleDrawer() {
		open = !open;
	}

	const columns = [
		{ label: 'Size', value: 'XS' },
		{ label: 'Units tested', value: '8' },
		{ label: 'Expected value', value: '16.00cm' },
		{ label: 'Tolerance', value: '-1.5cm / +1cm' },
		{ label: 'Status', value: 'Failed' },
	];
</script>

<Button on:click={toggleDrawer}>
	{open ? 'Close' : 'Open'} Measurements
</Button>

<Drawer bind:open>
	<Typography variant="body-lg" class="font-bold">Measurements</Typography>
	<Typography variant="body">Neck width: Seam to seam width</Typography>
	<div class="mt-4 flex-col space-y-4 text-sm">
		{#each columns as column}
			<div class="flex justify-between border-t pt-4">
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
