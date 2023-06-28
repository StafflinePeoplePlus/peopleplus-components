<script lang="ts">
	import { Chip, Button, Typography } from '$lib';
</script>

<Chip>
	<Typography>2 minutes ago</Typography>
</Chip>

<Chip class="rounded-full bg-gray-400 dark:bg-gray-200">
	<div class="flex items-center">
		<Typography class="text-gray-100 dark:text-gray-500">Open Now</Typography>
		<Button variant="secondary" class="ml-1 h-2 rounded-full px-1 py-2 text-xs text-gray-400">
			<span aria-hidden="true">&times;</span>
			<span class="sr-only">Remove</span>
		</Button>
	</div>
</Chip>
