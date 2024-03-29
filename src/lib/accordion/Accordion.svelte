<script lang="ts">
	import { createDisclosure } from 'svelte-headlessui';
	import { getAccordionGroup } from './AccordionGroup.svelte';
	import { twMerge } from 'tailwind-merge';
	import { actions, type UseActions } from '$lib/actions';

	let className = '';
	export { className as class };
	export let contentClass = '';
	export let labelClass = '';
	export let label: string;
	export let use: UseActions = [];

	const group = getAccordionGroup();
	const disclosure = createDisclosure({ label });
	group?.registerDisclosure(disclosure);
	$: disclosure.set({ label });

	$: if (group && $disclosure.expanded) {
		group.onDisclosureExpanded(disclosure);
	}
</script>

<div
	class={twMerge(
		'border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800',
		group != null
			? 'group border-x border-t first:rounded-t-xl last:rounded-b-xl last:border-b'
			: 'rounded-xl border',
		className,
	)}
	use:actions={use}
>
	<h2>
		<button
			type="button"
			class={twMerge(
				'relative flex w-full items-center justify-between p-5 text-left font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-red-400 dark:text-gray-100 dark:hover:bg-gray-600',
				group != null ? 'group-first:rounded-t-xl' : 'rounded-t-xl',
				!$disclosure.expanded && (group != null ? 'group-last:rounded-b-xl' : 'rounded-b-xl'),
				labelClass,
			)}
			use:disclosure.button
		>
			<span>{label}</span>
			<svg
				class="h-6 w-6 shrink-0 transition"
				class:rotate-180={$disclosure.expanded}
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>
	</h2>
	<div
		class:hidden={!$disclosure.expanded}
		class={twMerge(
			'border-t border-gray-200 p-5 text-gray-700 dark:border-gray-700 dark:text-gray-200',
			contentClass,
		)}
		use:disclosure.panel
	>
		<slot />
	</div>
</div>
