<script lang="ts">
	import {
		Button,
		DropdownMenu,
		DropdownMenuDivider,
		DropdownMenuItem,
		createDropdownMenu,
	} from '$lib';
	import Trash2Icon from 'lucide-svelte/icons/trash-2';
	import MoreHorizontalIcon from 'lucide-svelte/icons/more-horizontal';
	import PenIcon from 'lucide-svelte/icons/pen';
	import EyeIcon from 'lucide-svelte/icons/eye';

	const { trigger, menu } = createDropdownMenu();
</script>

<div class="flex justify-center">
	<Button icon use={[trigger]}>
		<MoreHorizontalIcon aria-hidden="true" />
		<span class="sr-only">Open Dropdown Menu</span>
	</Button>
	<DropdownMenu {menu}>
		<DropdownMenuItem href="#" variant="primary">
			<EyeIcon size={16} aria-hidden="true" />
			View Details
		</DropdownMenuItem>
		<DropdownMenuItem>
			<PenIcon size={16} aria-hidden="true" />
			Edit
		</DropdownMenuItem>
		<DropdownMenuDivider />
		<DropdownMenuItem variant="danger" on:click={() => confirm()}>
			<Trash2Icon size={16} aria-hidden="true" />
			Delete
		</DropdownMenuItem>
	</DropdownMenu>
</div>
