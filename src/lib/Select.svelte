<script lang="ts">
	import { fade } from 'svelte/transition';
	import { DEV } from 'esm-env';
	import { createSelect } from '@melt-ui/svelte';
	import { twMerge } from 'tailwind-merge';
	import { CheckIcon, ChevronDownIcon } from 'lucide-svelte';
	import InputLabel from './forms/InputLabel.svelte';

	type ItemValue = $$Generic;
	type ItemValueWithLabel = { value: ItemValue; label?: string; id?: string };

	let className: string | undefined = undefined;
	export { className as class };
	export let labelClass: string | null | undefined = undefined;
	export let buttonClass: string | null | undefined = undefined;
	export let optionClass: string | null | undefined = undefined;

	export let label: string | null | undefined = undefined;
	export let placeholder: string | null | undefined = undefined;
	export let options: (ItemValue | ItemValueWithLabel)[] = [];
	export let value: ItemValue | null | undefined = undefined;
	export let onChange: (change: {
		curr: ItemValue | undefined;
		next: ItemValue | undefined;
	}) => void = () => {};

	$: if (DEV && !label && !$$slots.label)
		console.warn(
			'For accessiblity reasons, you should provide a label for the select component. You may visually hide it by adding `sr-only` to the `labelClass`.',
		);

	const {
		elements: { trigger, menu, option: optionEl, label: labelEl },
		states: { selectedLabel, open, selected },
		helpers: { isSelected },
	} = createSelect<ItemValue>({
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true,
		},
		onSelectedChange: ({ curr, next }) => {
			onChange({ curr: curr?.value, next: next?.value });
			value = next?.value;
			return next;
		},
	});

	$: {
		if (value == null) {
			$selected = undefined;
		} else {
			const option = options.find((option) => isObjectOption(option) && option.value === value);
			if ($selected?.value !== value) {
				$selected = {
					value,
					label: option && isObjectOption(option) ? option.label : String(value),
				};
			}
		}
	}

	function isObjectOption(option: ItemValue | ItemValueWithLabel): option is ItemValueWithLabel {
		return typeof option === 'object' && option != null && 'value' in option;
	}
</script>

<div class={twMerge('inline-flex flex-col items-start', className)}>
	<InputLabel class={twMerge('mb-0.5', labelClass)} {...$labelEl} use={[labelEl]}>
		{#if $$slots.label}
			<slot name="label" />
		{:else}
			{label}
		{/if}
	</InputLabel>
	<button
		{...$trigger}
		use:trigger
		class={twMerge(
			'flex h-10 min-w-[220px] items-center gap-2 rounded-lg border border-gray-300 bg-white p-1.5 pl-3 text-gray-900 shadow-sm transition-colors focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:border-primary-400 dark:focus-within:ring-primary-400',
			buttonClass,
		)}
	>
		{#if $$slots.selectedLabel}
			<slot name="selectedLabel" item={$selected} />
		{:else if $$slots.option && $selected}
			<slot name="option" item={$selected.value} />
		{:else}
			{$selectedLabel || placeholder || 'Select an option'}
		{/if}
		<ChevronDownIcon class="ml-auto" size={16} />
	</button>
	{#if $open}
		<div
			class="z-10 cursor-default select-none overflow-y-auto rounded-lg border border-gray-300 bg-white py-1.5 text-gray-900 shadow-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white"
			transition:fade={{ duration: 150 }}
			{...$menu}
			use:menu
		>
			{#each options as option, i (isObjectOption(option) && option.id ? option.id : i)}
				{@const label = isObjectOption(option) ? option.label : String(option)}
				<div
					class={twMerge(
						'flex items-center gap-1.5 px-2.5 py-1.5 data-[highlighted]:bg-primary-100 data-[highlighted]:text-primary-800 dark:data-[highlighted]:bg-gray-600 dark:data-[highlighted]:text-white',
						optionClass,
					)}
					{...$optionEl({
						value: isObjectOption(option) ? option.value : option,
						label,
					})}
					use:optionEl
				>
					<div
						class={$isSelected(isObjectOption(option) ? option.value : option) ? '' : 'opacity-0'}
					>
						<CheckIcon size={16} />
					</div>

					{#if $$slots.option}
						<slot name="option" item={isObjectOption(option) ? option.value : option} />
					{:else}
						{label}
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>
