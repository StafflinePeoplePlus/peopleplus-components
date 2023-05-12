<script>
	import '../app.css';
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

<div class="h-full flex flex-col">
	<div class="flex grow p-6 gap-4 overflow-hidden">
		<nav class="overflow-y-auto w-60 shrink-0">
			<ul class="space-y-0.5">
				{#each routes as route}
					<li>
						<a
							href={route.href}
							class="block px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
						>
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
			<hr class="border-gray-300 dark:border-gray-700 mx-2 my-4" />
			<h3 class="text-sm font-semibold tracking-tight ml-2.5 mb-2 text-gray-600 dark:text-gray-400">
				Components
			</h3>
			<ul class="space-y-0.5">
				{#each components as component}
					<li>
						<a
							href="/{component.name}"
							class="block px-2.5 py-1.5 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"
						>
							{component.name}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="grow overflow-x-hidden">
			<div
				class="bg-white dark:bg-gray-800 h-full p-6 border border-gray-200 dark:border-gray-700 rounded-md overflow-y-auto"
			>
				<slot />
			</div>
		</div>
	</div>

	<Footer class="m-4" />
</div>
