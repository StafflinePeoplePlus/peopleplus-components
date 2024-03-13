<script lang="ts">
	import { Avatar, Sidebar, SidebarItem } from '$lib';
	import { BellIcon } from 'lucide-svelte';
	import { HomeIcon } from 'lucide-svelte';
	import { ListTodo } from 'lucide-svelte';
	import { LogOutIcon } from 'lucide-svelte';
	import { MessagesSquareIcon } from 'lucide-svelte';
	import { SettingsIcon } from 'lucide-svelte';
</script>

<div
	class="h-[600px] overflow-clip rounded-xl border bg-gray-100 shadow-md dark:border-gray-700 dark:bg-gray-900"
>
	<!-- START USAGE -->
	<Sidebar>
		<img src="/peopleplus-logo.svg" class="mb-10 mt-4 h-10" alt="PeoplePlus Logo" />
		<nav class="contents">
			<ul class="flex grow flex-col gap-1">
				<SidebarItem href="#" active><HomeIcon aria-hidden="true" /> Home</SidebarItem>
				<SidebarItem href="#"><BellIcon aria-hidden="true" /> Notifications</SidebarItem>
				<SidebarItem href="#"><MessagesSquareIcon aria-hidden="true" /> Messages</SidebarItem>
				<SidebarItem href="#"><ListTodo aria-hidden="true" /> Tasks</SidebarItem>
				<SidebarItem href="#"><SettingsIcon aria-hidden="true" /> Settings</SidebarItem>

				<SidebarItem href="#" class="mt-auto">
					<Avatar
						aria-hidden="true"
						size="xs"
						name="Rich Harris"
						src="https://avatars.githubusercontent.com/u/1162160?v=4"
					/> Profile
				</SidebarItem>
				<SidebarItem><LogOutIcon aria-hidden="true" /> Log Out</SidebarItem>
			</ul>
		</nav>
	</Sidebar>
	<!-- END USAGE -->
</div>
