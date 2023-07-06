<script lang="ts">
	import { Button, createPopover, PopoverContent } from '$lib';

	const popover = createPopover();
</script>

<Button use={[popover.button]}>Show popover</Button>

<PopoverContent {popover}>Popover content!</PopoverContent>
