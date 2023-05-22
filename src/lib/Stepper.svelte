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
	class="mb-5 rounded-lg border border-gray-200 bg-white p-2 font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 lg:flex lg:space-x-2"
>
	{#each steps as step, index}
		<button
			class={`hover:bg-gray-100 rounded-lg p-2 text-gray-500 sm:p-3 md:w-1/2   ${
				step === activeStep ? 'text-primary-500' : ''
			}`}
			on:click={() => changeStep(step)}
		>
			<div>
				<span
					class={`rounded-full bg-gray-500 px-2 py-1 text-xs text-white ${
						step === activeStep ? 'bg-primary-500' : ''
					}`}
				>
					{index + 1}
				</span>
				{step.label}
			</div>
		</button>
		{#if index !== steps.length - 1}
			<div
				class="after:border-1 flex items-center after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 md:w-full md:after:inline-block"
			/>
		{/if}
	{/each}
</div>
