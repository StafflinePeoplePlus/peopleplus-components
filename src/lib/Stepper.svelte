<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export type Step = $$Generic<{ label: string }>;
	type Props = SvelteHTMLElements['section'] & {
		steps: Step[];
		activeStep?: Step;
		class?: string;
		children?: import('svelte').Snippet;
		onStepChange?: (step: Step) => void;
	};

	let {
		class: className = undefined,
		steps,
		activeStep = $bindable(undefined),
		children,
		onStepChange,
		...rest
	}: Props = $props();

	$effect(() => {
		if (!activeStep && steps && steps.length > 0) {
			activeStep = steps[0];
		}
	});

	function changeStep(step: Step) {
		activeStep = step;
		if (onStepChange) onStepChange(step);
	}
</script>

<section
	class={twMerge(
		'mb-5 rounded-xl border border-gray-200 bg-white p-2 font-medium shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 md:flex md:px-0',
		className,
	)}
	{...rest}
>
	{#each steps as step, index}
		{@const isActive = step.label === activeStep?.label}
		<button
			class={twMerge(
				`w-full rounded-lg p-2 text-left text-gray-500 md:mx-2 md:w-3/4 md:text-center`,
				isActive && 'bg-primary-500 text-white',
			)}
			onclick={() => changeStep(step)}
			aria-current={isActive ? 'step' : 'false'}
		>
			<span
				class={`rounded-full bg-gray-500 px-2 py-1 text-xs text-white max-md:mr-2 ${
					isActive ? 'border border-white bg-primary-500' : ''
				}`}
			>
				{index + 1}
			</span>
			<br class="hidden md:block" />
			{step.label}
		</button>
		{#if index !== steps.length - 1}
			<div
				class="after:border-1 flex items-center after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 after:content-[''] dark:after:border-gray-700 md:w-full md:after:inline-block"
			></div>
		{/if}
	{/each}
	{@render children?.()}
</section>
