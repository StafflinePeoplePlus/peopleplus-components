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
	class="flex flex-wrap items-center w-full p-3 space-x-2 text-sm font-medium text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4"
>
	{#each steps as step, index}
		<button
			on:click={() => dispatchEvent('changeStep', step)}
			class="cursor-pointer hover:text-red-700"
		>
			{step.label}
		</button>
		{#if index !== steps.length - 1}
			<span class="ml-3 font-thin text-xl"> &raquo; </span>
		{/if}
	{/each}
</div>
