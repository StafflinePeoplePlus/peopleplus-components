<script>
	import '../app.css';
	import { Footer } from '$lib';

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
		{ href: '/TitleDescription', label: 'TitleDescription' },
		{ href: '/Tooltip', label: 'Tooltip' }
	];
</script>

<div class="h-full flex flex-col">
	<div class="flex grow p-6 gap-4 overflow-hidden">
		<nav class="overflow-y-auto w-60 shrink-0">
			<ul class="space-y-0.5">
				{#each routes as route}
					<li>
						<a href={route.href} class="block px-2.5 py-1.5 hover:bg-gray-200 rounded">
							{route.label}
						</a>
					</li>
				{/each}
			</ul>
		</nav>

		<div class="grow">
			<div class="h-full p-6 bg-white border border-gray-200 rounded-md overflow-y-auto">
				<slot />
			</div>
		</div>
	</div>

	<Footer class="m-4" />
</div>
