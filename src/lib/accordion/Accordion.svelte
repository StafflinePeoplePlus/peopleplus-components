<script lang="ts">
	import { classes } from '$lib/classes';
	import { createDisclosure } from 'svelte-headlessui';
	import { getAccordionGroup } from './AccordionGroup.svelte';

	let className = '';
	export { className as class };
	export let label: string;

	const group = getAccordionGroup();
	const disclosure = createDisclosure({ label });
	group?.registerDisclosure(disclosure);
	$: disclosure.set({ label });

	$: if (group && $disclosure.expanded) {
		group.onDisclosureExpanded(disclosure);
	}
</script>

<div
	class={classes(
		'border-gray-200 bg-gray-100 dark:bg-gray-700',
		group != null
			? 'group border-x border-t first:rounded-t-xl last:rounded-b-xl last:border-b'
			: 'rounded-xl border',
		className
	)}
>
	<h2>
		<button
			type="button"
			class={classes(
				'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400 focus:z-10 relative hover:bg-gray-50 dark:hover:bg-gray-600',
				group != null ? 'group-first:rounded-t-xl' : 'rounded-t-xl',
				!$disclosure.expanded && (group != null ? 'group-last:rounded-b-xl' : 'rounded-b-xl')
			)}
			use:disclosure.button
		>
			<span>{label}</span>
			<svg
				class="w-6 h-6 shrink-0 transition"
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
		class="p-5 border-t border-gray-200"
		use:disclosure.panel
	>
		<slot />
	</div>
</div>
