<script lang="ts">
	import { createPopover } from 'svelte-headlessui';
	import { twMerge } from 'tailwind-merge';
	import { screenMd } from '$lib/media';
	import { actions, type UseActions } from '$lib/actions';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
	export let panelClass = '';
	export let hamburgerClass = '';
	export let use: UseActions = [];

	const popover = createPopover();

	$: popoverPanel = $screenMd
		? () => {
				// Do nothing
		  }
		: popover.panel;
	$: showHamburger = $$slots.middle || $$slots.end;
</script>

<nav
	class={twMerge(
		'flex flex-wrap items-center justify-between gap-x-8 overflow-hidden bg-gray-100 p-4 dark:bg-gray-700 md:gap-y-2',
		className
	)}
	use:actions={use}
>
	<div class={twMerge('flex w-full shrink-0 items-center md:w-auto', startClass)}>
		<slot name="start" />
		{#if showHamburger}
			<div class="ml-auto md:hidden">
				<button
					type="button"
					class={twMerge(
						'ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-600 md:hidden',
						hamburgerClass
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
		class={twMerge('mt-4 w-full md:mt-0 md:contents md:w-auto', panelClass)}
		use:popoverPanel
		class:hidden={!$popover.expanded}
	>
		<div class={middleClass}>
			<slot name="middle" />
		</div>
		<div class={twMerge('shrink-0 md:mt-0', $$slots.middle && 'mt-3', endClass)}>
			<slot name="end" />
		</div>
	</div>
</nav>
