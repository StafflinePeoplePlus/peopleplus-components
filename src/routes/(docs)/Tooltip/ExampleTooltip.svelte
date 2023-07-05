<script>
	import { Tooltip, Button } from '$lib';
	import { MailPlus } from 'lucide-svelte';
</script>

<div class="flex gap-x-2">
	<Tooltip title="Click to unfollow">
		<Button variant="secondary">Following</Button>
	</Tooltip>

	<Tooltip
		title="You can now subscribe to get stories delivered directly to your inbox"
		class="w-36"
	>
		<Button class="rounded-full px-3">
			<MailPlus />
		</Button>
	</Tooltip>
</div>
