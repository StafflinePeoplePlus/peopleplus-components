<script lang="ts">
	import {
		Button,
		DropdownMenu,
		DropdownMenuDivider,
		DropdownMenuItem,
		createDropdownMenu,
	} from '$lib';
	import { Trash2Icon, MoreHorizontalIcon, PenIcon, EyeIcon } from 'lucide-svelte';

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
