<script lang="ts">
	import { Button, Drawer, Typography, Chip } from '$lib';
	import { XIcon } from 'lucide-svelte';

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
<Drawer bind:open class="w-80" let:title let:description let:close>
	<div>
		<div class="flex justify-between">
			<Typography
				as="h2"
				variant="body-lg"
				class="place-self-center font-bold"
				{...title.props}
				use={[title.action]}
			>
				Measurements
			</Typography>

			<Button
				variant="borderless"
				shape="pill"
				size="sm"
				icon
				data-testId="closeDrawer"
				{...close.props}
				use={[close.action]}
			>
				<span class="sr-only">Close</span>
				<XIcon size={16} />
			</Button>
		</div>

		<Typography variant="body" class="mt-2" {...description.props} use={[description.action]}>
			Neck width: Seam to seam width
		</Typography>
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
