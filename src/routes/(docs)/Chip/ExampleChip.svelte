<script lang="ts">
	import { Chip, Button } from '$lib';
</script>

<Chip>2 minutes ago</Chip>

<Chip class="rounded-full border border-gray-300 bg-gray-200 text-gray-800 dark:bg-gray-100">
	<div class="flex items-center">
		<p class="text-gray-700">Open Now</p>
		<Button variant="secondary" class="ml-1 h-1 rounded-full px-1 py-2 text-xs">
			<span aria-hidden="true">&times;</span>
			<span class="sr-only">Remove</span>
		</Button>
	</div>
</Chip>
