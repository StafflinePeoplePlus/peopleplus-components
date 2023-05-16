<script>
	import { Footer } from '$lib';

	const routes = [
		{ href: '/', label: 'Home' },
		{ href: '/guidelines', label: 'Implementation Guidelines' }
	];
	const components = [
		{ name: 'Accordion' },
		{ name: 'Alert' },
		{ name: 'BackButton' },
		{ name: 'Banner' },
		{ name: 'BottomNav' },
		{ name: 'Breadcrumbs' },
		{ name: 'CancelButton' },
		{ name: 'Card' },
		{ name: 'Carousel' },
		{ name: 'Chip' },
		{ name: 'CodeSnippet' },
		{ name: 'CookieBanner' },
		{ name: 'DarkMode' },
		{ name: 'Drawer' },
		{ name: 'Dropdown' },
		{ name: 'Footer' },
		{ name: 'Jumbotron' },
		{ name: 'Loader' },
		{ name: 'Modal' },
		{ name: 'NavBar' },
		{ name: 'PrimaryButton' },
		{ name: 'Stepper' },
		{ name: 'TextInput' },
		{ name: 'TextArea' },
		{ name: 'TitleDescription' },
		{ name: 'Tooltip' }
	];
</script>

<div class="flex h-full flex-col">
	<div class="flex grow gap-4 overflow-hidden p-6">
		<nav class="w-60 shrink-0 overflow-y-auto">
			<ul class="space-y-0.5">
				{#each routes as route}
					<li>
						<a
							href={route.href}
							class="block rounded px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"
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
							class="block rounded px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600"
						>
							{component.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="grow overflow-x-hidden">
			<div
				class="h-full overflow-y-auto rounded-md border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
			>
				<slot />
			</div>
		</div>
	</div>

	<Footer class="m-4" />
</div>
