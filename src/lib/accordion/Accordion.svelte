<script lang="ts">
	import { classes } from '$lib/classes';
	import { createAccordion } from './state';

	/**
	 * ID used to hook up aria labels, it is advisable to set this when more than one item may appear on the page at a time.
	 * When in a group favour setting it on the group instead
	 */
	export let id: string | undefined = undefined;
	export let label: string;

	const accordion = createAccordion(id);
</script>

<div
	id={$accordion.id}
	class="border-gray-200 bg-white {$accordion.inGroup
		? 'group border-x border-t first:rounded-t-xl last:rounded-b-xl last:border-b'
		: 'rounded-xl border'}"
>
	<h2 id="{$accordion.id}-heading">
		<button
			type="button"
			class={classes(
				'flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-400 focus:z-10 relative hover:bg-gray-50',
				$accordion.inGroup ? 'group-first:rounded-t-xl' : 'rounded-t-xl',
				!$accordion.expanded && ($accordion.inGroup ? 'group-last:rounded-b-xl' : 'rounded-b-xl')
			)}
			aria-expanded={$accordion.expanded}
			aria-controls="{$accordion.id}-body"
			on:click={() => accordion.toggle()}
		>
			<span>{label}</span>
			<svg
				data-accordion-icon
				class="w-6 h-6 shrink-0 transition"
				class:rotate-180={$accordion.expanded}
				fill="currentColor"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
				><path
					fill-rule="evenodd"
					d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
					clip-rule="evenodd"
				/></svg
			>
		</button>
	</h2>
	<div
		id="{$accordion.id}-body"
		class:hidden={!$accordion.expanded}
		class="p-5 border-t border-gray-200"
		aria-labelledby="{$accordion.id}-heading"
	>
		<slot />
	</div>
</div>
