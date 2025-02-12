<script lang="ts">
	import { createPopover } from 'svelte-headlessui';
	import { twMerge } from 'tailwind-merge';
	import { screenMd } from '$lib/media';
	import { actions, type UseActions } from '$lib/actions';

	interface Props {
		class?: string;
		startClass?: string;
		middleClass?: string;
		endClass?: string;
		panelClass?: string;
		hamburgerClass?: string;
		use?: UseActions;
		middle?: import('svelte').Snippet;
		end?: import('svelte').Snippet;
		start?: import('svelte').Snippet;
	}

	let {
		class: className = '',
		startClass = '',
		middleClass = '',
		endClass = '',
		panelClass = '',
		hamburgerClass = '',
		use = [],
		middle,
		end,
		start,
	}: Props = $props();

	const popover = createPopover();

	let popoverPanel = $derived(
		$screenMd
			? () => {
					// Do nothing
				}
			: popover.panel,
	);
	let showHamburger = $derived(middle || end);
</script>

<nav
	class={twMerge(
		'flex flex-wrap items-center justify-between gap-x-8 overflow-hidden bg-gray-100 dark:bg-gray-700 md:gap-y-2',
		className,
	)}
	use:actions={use}
>
	<div class={twMerge('flex w-full shrink-0 items-center p-4 md:w-auto', startClass)}>
		{@render start?.()}
		{#if showHamburger}
			<div class="ml-auto md:hidden">
				<button
					type="button"
					class={twMerge(
						'ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 md:hidden',
						hamburgerClass,
					)}
					use:popover.button
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
			</div>
		{/if}
	</div>
	<div
		class={twMerge('mt-4 max-h-[80vh] w-full overflow-y-auto px-4 md:mt-0 md:contents', panelClass)}
		use:popoverPanel
		class:hidden={!$popover.expanded}
	>
		<div class={middleClass}>
			{@render middle?.()}
		</div>
		<div class={twMerge('shrink-0 md:mt-0', middle && 'mt-3', endClass)}>
			{@render end?.()}
		</div>
	</div>
</nav>
