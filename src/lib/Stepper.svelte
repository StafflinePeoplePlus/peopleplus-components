<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export type Step = $$Generic<{ label: string }>;
	type $$Props = SvelteHTMLElements['section'] & { steps: Step[]; activeStep?: Step };

	export { className as class };
	let className: $$Props['class'] = undefined;

	export let steps: Step[];
	export let activeStep: Step | undefined = undefined;

	$: if (!activeStep && steps && steps.length > 0) {
		activeStep = steps[0];
	}

	const dispatchEvent = createEventDispatcher<{ changeStep: Step }>();

	function changeStep(step: Step) {
		activeStep = step;
		dispatchEvent('changeStep', step);
	}
</script>

<section
	class={twMerge(
		'mb-5 rounded-lg border border-gray-200 bg-white p-2 font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 lg:flex lg:px-0',
		className,
	)}
	{...$$restProps}
>
	{#each steps as step, index}
		<button
			class={`w-full rounded-lg p-2 text-left text-gray-500 lg:mx-2 lg:w-3/4 lg:text-center ${
				step === activeStep ? 'bg-primary-500 text-white' : ''
			}`}
			on:click={() => changeStep(step)}
			aria-current={step === activeStep ? 'step' : 'false'}
		>
			<span
				class={`rounded-full bg-gray-500 px-2 py-1 text-xs text-white ${
					step === activeStep ? 'border border-white bg-primary-500' : ''
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
