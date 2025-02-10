<script lang="ts">
	import { Button, Tooltip } from '$lib';
	import BookmarkPlus from 'lucide-svelte/icons/bookmark-plus';
</script>

<div class="mt-8 flex justify-center">
	<!-- START USAGE -->
	<Tooltip>
		{#snippet tooltip()}
				<div >Save Bookmark</div>
			{/snippet}

		<Button>
			<BookmarkPlus />
		</Button>
	</Tooltip>
	<!-- END USAGE -->
</div>
