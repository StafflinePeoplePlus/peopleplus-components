<script lang="ts">
	import { Button, Tooltip } from '$lib';
	import BookmarkPlus from 'lucide-svelte/icons/bookmark-plus';
</script>

<div class="mt-8 flex justify-center">
	<!-- START USAGE -->
	<Tooltip>
		<div slot="tooltip">Save Bookmark</div>

		<Button>
			<BookmarkPlus />
		</Button>
	</Tooltip>
	<!-- END USAGE -->
</div>
