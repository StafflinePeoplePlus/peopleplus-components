<script lang="ts">
	import { Tooltip } from '$lib';
	import { BookmarkPlus } from 'lucide-svelte';
</script>

<!-- START USAGE -->
<Tooltip>
	<BookmarkPlus />
	<div slot="tooltip" class="p-2 shadow">Save Bookmark</div>
</Tooltip>
<!-- END USAGE -->
