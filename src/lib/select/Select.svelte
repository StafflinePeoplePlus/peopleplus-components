<script lang="ts" generics="ItemValue, Multiple extends boolean = false">
	import { fade } from 'svelte/transition';
	import { DEV } from 'esm-env';
	import { createSelect } from '@melt-ui/svelte';
	import { twMerge } from 'tailwind-merge';
	import { ChevronDownIcon } from 'lucide-svelte';
	import InputLabel from '../forms/InputLabel.svelte';
	import SelectOption from './SelectOption.svelte';

	type ItemValueWithLabel = { value: ItemValue; label?: string; id?: string };
	type WhenTrue<When extends boolean, OnTrue, OnFalse> = [When] extends [true] ? OnTrue : OnFalse;
	type Value = WhenTrue<Multiple, readonly ItemValue[], ItemValue>;
	type ValueWithLabel = WhenTrue<Multiple, ItemValueWithLabel[], ItemValueWithLabel>;
	type ChangeFn<T> = (change: { curr: T | undefined; next: T | undefined }) => void;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	interface $$Slots {
		// eslint-disable-next-line @typescript-eslint/ban-types
		label: {};
		selectedLabel: {
			/**
			 * @deprecated Use `selected` instead
			 */
			item: WhenTrue<Multiple, readonly ItemValueWithLabel[], ItemValueWithLabel> | undefined;
			selected: WhenTrue<Multiple, readonly ItemValueWithLabel[], ItemValueWithLabel> | undefined;
		};
		option: { item: ItemValue };
	}

	let className: string | undefined = undefined;
	export { className as class };
	export let labelClass: string | null | undefined = undefined;
	export let buttonClass: string | null | undefined = undefined;
	export let optionClass: string | null | undefined = undefined;

	export let label: string | null | undefined = undefined;
	export let placeholder: string | null | undefined = undefined;
	export let options: readonly (ItemValue | ItemValueWithLabel)[] = [];
	export let value: Value | null | undefined = undefined;
	export let multiple: Multiple | undefined = undefined;
	export let noneLabel: WhenTrue<Multiple, string | null | undefined, never> = undefined as never;
	export let onChange: ChangeFn<Value> = () => {};

	$: if (DEV && !label && !$$slots.label)
		console.warn(
			'For accessiblity reasons, you should provide a label for the select component. You may visually hide it by adding `sr-only` to the `labelClass`.',
		);

	const {
		elements: { trigger, menu, option: optionEl, label: labelEl },
		states: { selectedLabel, open, selected },
		helpers: { isSelected },
	} = createSelect<ItemValue, Multiple>({
		multiple,
		forceVisible: true,
		positioning: {
			placement: 'bottom',
			fitViewport: true,
			sameWidth: true,
		},
		onSelectedChange: ({ curr, next }) => {
			const currValue = (Array.isArray(curr) ? curr.map((item) => item.value) : curr?.value) as
				| Value
				| undefined;
			const nextValue = (Array.isArray(next) ? next.map((item) => item.value) : next?.value) as
				| Value
				| undefined;
			onChange({ curr: currValue, next: nextValue });
			value = nextValue;
			return next;
		},
	});

	const valueWithLabel = (
		options: readonly (ItemValue | ItemValueWithLabel)[],
		value: ItemValue,
	) => {
		const option = options.find(
			(option) => (isObjectOption(option) ? option.value : option) === value,
		);
		return {
			value,
			label: option && isObjectOption(option) ? option.label : String(value),
		};
	};
	const haveSameItems = <A,>(a: readonly A[], b: readonly A[]) =>
		a.length === b.length && a.every((a) => b.includes(a));
	$: if (value == null) {
		$selected = undefined;
	} else {
		if (Array.isArray(value)) {
			if (
				!haveSameItems(
					value,
					($selected as readonly ItemValueWithLabel[] | null)?.map((item) => item.value) ?? [],
				)
			) {
				$selected = (value as readonly ItemValue[]).map((value) =>
					valueWithLabel(options, value as ItemValue),
				) as ValueWithLabel;
			}
		} else if (($selected as ItemValueWithLabel | null)?.value !== value) {
			$selected = valueWithLabel(options, value as ItemValue) as ValueWithLabel;
		}
	}

	function isObjectOption(option: ItemValue | ItemValueWithLabel): option is ItemValueWithLabel {
		return typeof option === 'object' && option != null && 'value' in option;
	}

	const clearSelection = () =>
		multiple ? ($selected = [] as unknown as ValueWithLabel) : ($selected = undefined);

	// TODO(svelte-5): cast at call site
	const castToValueWithLabel = (
		value: ItemValueWithLabel | readonly ItemValueWithLabel[] | undefined,
	): ValueWithLabel | undefined => value as ValueWithLabel | undefined;
</script>

<div class={twMerge('inline-flex min-w-[220px] flex-col items-start', className)}>
	{#if $$slots.label || label != null}
		<InputLabel class={twMerge('mb-0.5 w-full', labelClass)} {...$labelEl} use={[labelEl]}>
			{#if $$slots.label}
				<slot name="label" />
			{:else}
				{label}
			{/if}
		</InputLabel>
	{/if}
	<button
		{...$trigger}
		use:trigger
		class={twMerge(
			'flex h-10 w-full items-center gap-2 rounded-lg border border-gray-300 bg-white p-1.5 pl-3 text-gray-900 shadow-sm transition-colors focus-within:border-primary-400 focus-within:ring-1 focus-within:ring-primary-400 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:border-primary-400 dark:focus-within:ring-primary-400',
			buttonClass,
		)}
	>
		{#if $$slots.selectedLabel}
			<slot
				name="selectedLabel"
				item={castToValueWithLabel($selected)}
				selected={castToValueWithLabel($selected)}
			/>
		{:else if $$slots.option && $selected && !Array.isArray($selected)}
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
			{#if noneLabel != null}
				<SelectOption
					on:click={() => {
						clearSelection();
					}}
					selected={$selected == null || (Array.isArray($selected) && $selected.length === 0)}
				>
					{noneLabel}
				</SelectOption>
			{/if}
			{#each options as option, i (isObjectOption(option) && option.id ? option.id : i)}
				{@const label = isObjectOption(option) ? option.label : String(option)}
				{@const value = isObjectOption(option) ? option.value : option}
				<SelectOption
					className={optionClass}
					selected={$isSelected(value)}
					{...$optionEl({ value, label })}
					use={[optionEl]}
				>
					{#if $$slots.option}
						<slot name="option" item={value} />
					{:else}
						{label}
					{/if}
				</SelectOption>
			{/each}
		</div>
	{/if}
</div>
