<script lang="ts">
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';

	const components = [
		{ name: 'Accordion' },
		{ name: 'Banner' },
		{ name: 'Breadcrumbs' },
		{ name: 'Button' },
		{ name: 'Card' },
		{ name: 'Carousel' },
		{ name: 'Chip' },
		{ name: 'Cookie Consent', href: '/components/CookieConsent' },
		{ name: 'Drawer' },
		{ name: 'Footer' },
		{ name: 'Jumbotron' },
		{ name: 'Loader' },
		{ name: 'Nav Bar', href: '/components/NavBar' },
		{ name: 'Popover' },
		{ name: 'Sortable' },
		{ name: 'Stepper' },
		{ name: 'Switch' },
		{ name: 'Table' },
		{ name: 'Text Input', href: '/components/TextInput' },
		{ name: 'Text Area', href: '/components/TextArea' },
		{ name: 'Toaster' },
		{ name: 'Video Player Controls', href: '/components/VideoPlayer' },
	];
</script>

<div class="grow">
	<aside class="fixed h-full w-60 shrink-0 border-r border-gray-200 bg-gray-100 p-8">
		<nav>
			<ul>
				{#each components as component}
					{@const href = component.href ?? `/components/${component.name}`}
					<li class="mb-2">
						<a
							{href}
							class={twMerge(
								'tracking-tight text-gray-600 underline-offset-2 hover:underline',
								href === $page.url.pathname && 'font-bold text-black',
							)}>{component.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="h-full bg-white pl-60">
		<div class="mx-auto max-w-screen-xl px-12 py-8"><slot /></div>
	</main>
</div>
