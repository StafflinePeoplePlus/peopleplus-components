<script lang="ts">
	import { Button, Drawer, Typography } from '$lib';

	let open = false;

	const columns = [
		{ label: 'Size', value: 'XS' },
		{ label: 'Units tested', value: '8' },
		{ label: 'Expected value', value: '16.00cm' },
		{ label: 'Tolerance', value: '-1.5cm / +1cm' },
		{ label: 'Status', value: 'Failed' }
	];
</script>

<Button on:click={() => (open = !open)}>View Measurements</Button>

<Drawer {open}>
	<Typography variant="body-lg" class="font-bold">Measurements</Typography>
	<Typography variant="body">Neck width: Seam to seam width</Typography>
	<div class="my-5 border-t" />
	<div class="flex-col space-y-4 text-sm">
		{#each columns as column}
			<div class="flex justify-between border-b pb-4">
				<div>{column.label}</div>
				<div>{column.value}</div>
			</div>
		{/each}
	</div>
</Drawer>
