<script lang="ts">
	import { actions, type UseActions } from '$lib/actions';
	import { createCollapsible, melt } from '@melt-ui/svelte';
	import { slide } from 'svelte/transition';
	import { ChevronDown } from 'lucide-svelte';
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

<div class={twMerge('bg-white shadow rounded-xl', className)} use:actions={use} {...$$restProps}>
	<div use:melt={$root}>
		<div class="flex hover:cursor-pointer hover:bg-gray-50 rounded-xl" use:melt={$trigger}>
			<slot name="label" />
			<div
				class={twMerge('place-self-end sm:place-self-center max-sm:mb-2 mx-3', iconClass)}
				class:rotate-180={$open}
			>
				<ChevronDown />
			</div>
		</div>

		<div style:top="calc(100% + 10px)" style:right="0" style:left="0">
			{#if $open}
				<div use:melt={$content} transition:slide>
					<slot />
				</div>
			{/if}
		</div>
	</div>
</div>
