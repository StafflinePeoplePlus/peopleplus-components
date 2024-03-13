<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { createCollapsible } from '@melt-ui/svelte';
	import ChevronDown from 'lucide-svelte/icons/square-chevron-down';
	import { slide } from 'svelte/transition';
	import { twMerge } from 'tailwind-merge';

	const {
		elements: { root, content, trigger },
		states: { open },
	} = createCollapsible();

	let className = '';
	export { className as class };
	export let iconClass = '';
	export let use: UseActions = [];
</script>

<div class={twMerge('rounded-xl bg-white shadow', className)} use:actions={use} {...$$restProps}>
	<div {...$root} use:root>
		<div
			class="flex justify-between rounded-xl hover:cursor-pointer hover:bg-gray-50"
			{...$trigger}
			use:trigger
		>
			<slot name="label" />
			<div
				class={twMerge('mx-3 place-self-end max-sm:mb-2 sm:place-self-center', iconClass)}
				class:rotate-180={$open}
			>
				<ChevronDown />
			</div>
		</div>

		<div style:top="calc(100% + 10px)" style:right="0" style:left="0">
			{#if $open}
				<div {...$content} use:content transition:slide>
					<slot />
				</div>
			{/if}
		</div>
	</div>
</div>
