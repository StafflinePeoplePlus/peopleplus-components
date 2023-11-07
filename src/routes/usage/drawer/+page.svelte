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

<Button on:click={toggleDrawer}>Open Measurements</Button>

<!-- START USAGE -->
<Drawer bind:open class="h-full w-80 shadow-lg" overlayClass="bg-white/30 backdrop-blur-sm">
	<div>
		<div class="flex justify-between">
			<Typography variant="body-lg" class="font-bold place-self-center">Measurements</Typography>

			<Button on:click={toggleDrawer} variant="secondary" data-testId="closeDrawer">
				<span class="sr-only">Close</span>
				&times;
			</Button>
		</div>

		<Typography variant="body" class="mt-2">Neck width: Seam to seam width</Typography>
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
	</div>
</Drawer>
<!-- END USAGE -->
