<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export type Step = $$Generic<{ label: string }>;
	import type { SvelteHTMLElements } from 'svelte/elements';
	type $$Props = SvelteHTMLElements['section'];
	import { twMerge } from 'tailwind-merge';

	let className: $$Props['class'] = undefined;
	export { className as class };

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

<section
	class={twMerge(
		'mb-5 rounded-lg border border-gray-200 bg-white p-2 font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 lg:flex lg:px-0',
		className
	)}
	{...$$restProps}
>
	{#each steps as step, index}
		<button
			class={`hover:scale-120 w-full rounded-lg p-2 text-left text-gray-500 lg:mx-2 lg:w-3/4 lg:text-center ${
				step === activeStep ? 'bg-primary-500 text-white ' : ''
			}`}
			on:click={() => changeStep(step)}
		>
			<span
				class={`rounded-full bg-gray-500 px-2 py-1 text-xs text-white ${
					step === activeStep ? 'border border-white bg-white text-primary-600' : ''
				}`}
			>
				{index + 1}
			</span>
			<br class="hidden lg:block" />
			{step.label}
		</button>
		{#if index !== steps.length - 1}
			<div
				class="after:border-1 flex items-center after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 md:w-full lg:after:inline-block"
			/>
		{/if}
	{/each}
	<slot />
</section>
