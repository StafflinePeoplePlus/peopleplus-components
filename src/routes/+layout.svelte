<script>
	import '../app.css';
	import ExampleFooter from './(docs)/Footer/ExampleFooter.svelte';

	const routes = [
		{ href: '/', label: 'Home' },
		{ href: '/Accordion', label: 'Accordion' },
		{ href: '/Alert', label: 'Alert' },
		{ href: '/BackButton', label: 'BackButton' },
		{ href: '/Banner', label: 'Banner' },
		{ href: '/BottomNav', label: 'BottomNav' },
		{ href: '/Breadcrumbs', label: 'Breadcrumbs' },
		{ href: '/CancelButton', label: 'CancelButton' },
		{ href: '/Card', label: 'Card' },
		{ href: '/Carousel', label: 'Carousel' },
		{ href: '/Chip', label: 'Chip' },
		{ href: '/CodeSnippet', label: 'CodeSnippet' },
		{ href: '/CookieBanner', label: 'CookieBanner' },
		{ href: '/Drawer', label: 'Drawer' },
		{ href: '/Dropdown', label: 'Dropdown' },
		{ href: '/Footer', label: 'Footer' },
		{ href: '/Jumbotron', label: 'Jumbotron' },
		{ href: '/Loader', label: 'Loader' },
		{ href: '/Modal', label: 'Modal' },
		{ href: '/NavBar', label: 'NavBar' },
		{ href: '/PrimaryButton', label: 'PrimaryButton' },
		{ href: '/Stepper', label: 'Stepper' },
		{ href: '/TitleDescription', label: 'TitleDescription' },
		{ href: '/Tooltip', label: 'Tooltip' }
	];
</script>

<div class="flex h-full flex-col">
	<div class="flex grow gap-4 overflow-hidden p-6">
		<nav class="w-60 shrink-0 overflow-y-auto">
			<ul class="space-y-0.5">
				{#each routes as route}
					<li>
						<a href={route.href} class="block rounded px-2.5 py-1.5 hover:bg-gray-200">
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="grow overflow-x-hidden">
			<div class="h-full overflow-y-auto rounded-md border border-gray-200 bg-white p-6">
				<slot />
			</div>
		</div>
	</div>

	<ExampleFooter />
</div>
