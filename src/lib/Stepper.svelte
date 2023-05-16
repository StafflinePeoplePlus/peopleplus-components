<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export type Step = $$Generic<{ label: string }>;
	export let steps: Step[];

	interface $$Events {
		changeStep: CustomEvent<Step>;
	}
	const dispatchEvent = createEventDispatcher();
</script>

<div
	class="flex w-full flex-wrap items-center space-x-2 rounded-lg border border-gray-200 bg-white p-3 text-sm font-medium text-gray-500 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:space-x-4 sm:p-4 sm:text-base"
>
	{#each steps as step, index}
		<button
			on:click={() => dispatchEvent('changeStep', step)}
			class="cursor-pointer hover:text-red-700"
		>
			{step.label}
		</button>
		{#if index !== steps.length - 1}
			<span class="ml-3 text-xl font-thin"> &raquo; </span>
		{/if}
	{/each}
</div>
