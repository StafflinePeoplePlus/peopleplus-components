<script lang="ts">
	import { Tooltip } from '$lib';
</script>

<Tooltip placement="right">
	Component

	{#snippet tooltip()}
		<div>
			<div data-testid="content">Content</div>
		</div>
	{/snippet}
</Tooltip>
