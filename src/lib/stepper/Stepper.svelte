<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export type Step = $$Generic<{ label: string }>;
	export let steps: Step[];
	let activeStep: Step;

	$: {
		if (steps && steps.length > 0) {
			activeStep = steps[0];
		}
	}

	interface $$Events {
		changeStep: CustomEvent<Step>;
	}
	const dispatchEvent = createEventDispatcher();

	function changeStep(step: Step) {
		activeStep = step;
		dispatchEvent('changeStep', step);
	}
</script>

<div
	class="mb-5 rounded-lg border border-gray-200 bg-white font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 lg:flex lg:space-x-4 p-2"
>
	{#each steps as step, index}
		<button
			class={`rounded-lg text-gray-500 md:w-1/2 p-2 sm:p-3   ${
				step === activeStep ? 'text-primary-500' : ''
			}`}
			on:click={() => changeStep(step)}
		>
			<div>
<span
		class={`rounded-full bg-gray-500 py-1 px-2 text-xs text-white ${
					step === activeStep ? 'bg-primary-500' : ''
				}`}
>
				{index + 1}
			</span>
				{step.label}
			</div>

		</button>
		{#if index !== steps.length - 1}
			<div class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden md:after:inline-block dark:after:border-gray-700">
			</div>
		{/if}
	{/each}
</div>
