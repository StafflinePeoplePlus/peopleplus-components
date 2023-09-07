<script>
	import { afterNavigate } from '$app/navigation';
	import { Typography, NavBar } from '$lib';
	import { twJoin } from 'tailwind-merge';

	const routes = [
		{ href: '/', label: 'Introduction' },
		{ href: '/guidelines', label: 'Implementation Guidelines' },
	];
	const components = [
		{ name: 'Accordion' },
		{ name: 'Avatar' },
		{ name: 'Banner' },
		{ name: 'BottomNav' },
		{ name: 'Breadcrumbs' },
		{ name: 'Button' },
		{ name: 'Card' },
		{ name: 'Carousel' },
		{ name: 'Chip' },
		{ name: 'CodeSnippet' },
		{ name: 'CookieConsent' },
		{ name: 'DarkMode' },
		{ name: 'Drawer' },
		{ name: 'Dropdown' },
		{ name: 'Footer' },
		{ name: 'Jumbotron' },
		{ name: 'Loader' },
		{ name: 'Modal' },
		{ name: 'NavBar' },
		{ name: 'Popover' },
		{ name: 'Sortable' },
		{ name: 'Stepper' },
		{ name: 'Switch' },
		{ name: 'Table' },
		{ name: 'TextInput' },
		{ name: 'TextArea' },
		{ name: 'Toaster' },
		{ name: 'Tooltip' },
		{ name: 'VideoPlayer' },
	];
	let showSidebar = false;

	afterNavigate(() => {
		showSidebar = false;
	});
</script>

<div class="flex h-full flex-col">
	<NavBar class="w-full shrink-0 bg-white py-3 shadow-sm md:px-8">
		<div slot="start" class="flex items-center">
			<button
				type="button"
				class="mr-4 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 md:hidden"
				on:click={() => (showSidebar = !showSidebar)}
			>
				<span class="sr-only">Open main menu</span>
				<svg
					class="h-6 w-6"
					aria-hidden="true"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
			<a href="/">
				<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
			</a>
		</div>
	</NavBar>

	<div class="relative flex grow overflow-hidden">
		<button
			class={twJoin(
				'absolute inset-0 z-50 cursor-default bg-gray-800/30 transition-opacity duration-300 md:hidden',
				!showSidebar && 'pointer-events-none opacity-0',
			)}
			on:click={() => (showSidebar = false)}
		>
			<span class="sr-only">Hide navigation</span>
		</button>
		<nav
			class={twJoin(
				'absolute inset-y-0 z-50 w-72 shrink-0 overflow-y-auto border-r border-t bg-white p-6 shadow-lg backdrop-blur-3xl transition-transform duration-300 dark:border-gray-800 dark:bg-gray-800 md:relative md:translate-x-0 md:bg-none md:shadow-none',
				!showSidebar && '-translate-x-full',
			)}
		>
			<ul class="space-y-0.5">
				{#each routes as route}
					<li>
						<a
							href={route.href}
							class="block rounded px-2.5 py-1.5 transition hover:bg-gray-200 dark:hover:bg-gray-600"
						>
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
			<hr class="mx-2 my-4 border-gray-300 dark:border-gray-700" />
			<h3 class="mb-2 ml-2.5 text-sm font-semibold tracking-tight text-gray-600 dark:text-gray-400">
				Components
			</h3>
			<ul class="space-y-0.5">
				{#each components as component}
					<li>
						<a
							href="/{component.name}"
							class="block rounded px-2.5 py-1.5 transition hover:bg-gray-200 dark:hover:bg-gray-600"
						>
							{component.name}
						</a>
					</li>
				{/each}
			</ul>

			<Typography variant="caption" class="mt-8 text-center text-xs">
				© 2023
				<a href="https://peopleplus.co.uk/" class="hover:underline">PeoplePlus™</a>. All Rights
				Reserved.
			</Typography>
		</nav>

		<div class="grow overflow-auto p-6 md:translate-x-0">
			<slot />
		</div>
	</div>
</div>
