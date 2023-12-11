<script lang="ts">
	import { Button, Tooltip } from '$lib';
	import { BookmarkPlus } from 'lucide-svelte';
</script>

<!-- START USAGE -->
<div class="pt-6 pb-4">
	<Tooltip>
		<Button href="/">
			<BookmarkPlus />
		</Button>

		<div slot="tooltip" class="">Save Bookmark</div>
	</Tooltip>
</div>
<!-- END USAGE -->
