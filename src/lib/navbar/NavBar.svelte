<script lang="ts">
	import { createPopover } from 'svelte-headlessui';
	import { twMerge } from 'tailwind-merge';
	import { md } from '$lib/media';

	let className = '';
	export { className as class };
	export let startClass = '';
	export let middleClass = '';
	export let endClass = '';
	export let panelClass = '';
	export let hamburgerClass = '';

	const popover = createPopover();

	$: popoverPanel = $md ? () => {} : popover.panel;
	$: showHamburger = $$slots.middle || $$slots.end;
</script>

<nav
	class={twMerge(
		'bg-gray-100 dark:bg-gray-700 flex justify-between items-center flex-wrap mx-auto max-w-screen-xl p-4 gap-x-8 md:gap-y-2 overflow-hidden',
		className
	)}
>
	<div class={twMerge('shrink-0 flex items-center w-full md:w-auto', startClass)}>
		<slot name="start" />
		{#if showHamburger}
			<div class="ml-auto md:hidden">
				<button
					type="button"
					class={twMerge(
						'inline-flex items-center p-2 ml-1 text-sm text-gray-500 dark:text-gray-300 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-600',
						hamburgerClass
					)}
					use:popover.button
				>
					<span class="sr-only">Open main menu</span>
					<svg
						class="w-6 h-6"
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
		class={twMerge('mt-4 w-full md:w-auto md:contents md:mt-0', panelClass)}
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
