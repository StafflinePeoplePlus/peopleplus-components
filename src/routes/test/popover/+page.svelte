<script lang="ts">
	import { Button, createPopover, PopoverContent } from '$lib';

	const { button, ...popover } = createPopover();
</script>

<Button use={[button]} {...$button}>Show popover</Button>

<PopoverContent {popover}>Popover content!</PopoverContent>
