<script lang="ts">
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';
	import { components } from './index';
	import Copyright from '../Copyright.svelte';
</script>

<div class="grow">
	<aside
		class="fixed hidden h-full w-60 shrink-0 border-r border-gray-200 bg-gray-100 p-8 dark:border-gray-700 dark:bg-gray-800 md:block"
	>
		<nav>
			<ul>
				{#each components as component}
					{@const href = component.href ?? `/components/${component.name}`}
					<li class="mb-2">
						<a
							{href}
							class={twMerge(
								'tracking-tight text-gray-600 underline-offset-2 hover:underline dark:text-gray-300',
								href === $page.url.pathname && 'font-bold text-black dark:text-white',
							)}>{component.name}</a
						>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<main class="h-full bg-white dark:bg-gray-900 md:pl-60">
		<div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-8 md:px-12"><slot /></div>
		<Copyright />
	</main>
</div>
