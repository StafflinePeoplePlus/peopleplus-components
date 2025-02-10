<script lang="ts">
	import { Collapsible } from '$lib';
</script>

<Collapsible>
	{#snippet label()}
		<div >Label</div>
	{/snippet}
	Content
</Collapsible>
