<script lang="ts">
	import { Button, Tooltip } from '$lib';
	import { BookmarkPlus } from 'lucide-svelte';
</script>

<!-- START USAGE -->
<Tooltip class="my-6">
	<Button href="/">
		<BookmarkPlus />
	</Button>

	<div slot="tooltip" class="">Save Bookmark</div>
</Tooltip>
<!-- END USAGE -->
