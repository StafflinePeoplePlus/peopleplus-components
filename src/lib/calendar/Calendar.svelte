<script context="module" lang="ts">
	export type CalendarEntry<I> = {
		from: Date;
		to: Date;
		item: I;
	};
</script>

<script lang="ts">
	import { CalendarDate, isToday, type DateValue } from '@internationalized/date';

	import Button from '$lib/Button.svelte';
	import { createCalendar } from '@melt-ui/svelte';
	import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import Select from '$lib/Select.svelte';

	type EntryItem = $$Generic;

	let className: string | undefined = undefined;
	export { className as class };
	export let initialDate: DateValue | undefined = undefined;
	/**
	 * Entries to display on the calendar. These must not overlap as the calendar display does not
	 * support this and will render incorrectly.
	 */
	export let entries: CalendarEntry<EntryItem>[] = [];

	let hoveredEntry: CalendarEntry<EntryItem> | undefined = undefined;

	const {
		elements: { calendar, heading, grid, prevButton, nextButton },
		states: { months, placeholder },
		helpers: { setMonth, setYear },
	} = createCalendar({
		locale: 'en-GB',
		defaultPlaceholder: initialDate,
	});

	const monthOptions = [
		{ value: 1, label: 'January' as const },
		{ value: 2, label: 'February' as const },
		{ value: 3, label: 'March' as const },
		{ value: 4, label: 'April' as const },
		{ value: 5, label: 'May' as const },
		{ value: 6, label: 'June' as const },
		{ value: 7, label: 'July' as const },
		{ value: 8, label: 'August' as const },
		{ value: 9, label: 'September' as const },
		{ value: 10, label: 'October' as const },
		{ value: 11, label: 'November' as const },
		{ value: 12, label: 'December' as const },
	];
	const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
	const yearSpan = 12;
	$: yearOptions = Array.from(
		{ length: yearSpan + 1 },
		(_, i) => $placeholder.add({ years: i - yearSpan / 2 }).year,
	);

	function entryForDay(
		entries: CalendarEntry<EntryItem>[],
		date: DateValue,
	): CalendarEntry<EntryItem> | undefined {
		return entries.find((entry) => {
			const from = new CalendarDate(
				date.calendar,
				entry.from.getFullYear(),
				entry.from.getMonth() + 1,
				entry.from.getDate(),
			);
			const to = new CalendarDate(
				date.calendar,
				entry.to.getFullYear(),
				entry.to.getMonth() + 1,
				entry.to.getDate(),
			);
			return date.compare(from) >= 0 && date.compare(to) < 0;
		});
	}

	function daysDiff(from: Date, to: Date): number {
		return Math.floor((to.getTime() - from.getTime()) / (1000 * 60 * 60 * 24));
	}
</script>

<div
	class={twMerge(
		'select-none overflow-clip rounded-xl border border-gray-300 bg-white shadow @container dark:border-gray-700 dark:bg-gray-800',
		className,
	)}
	{...$calendar}
	use:calendar
>
	<header
		class="grid grid-cols-[auto,1fr,auto] items-center gap-4 border-b border-gray-300 p-2 dark:border-gray-700"
	>
		<Button {...$prevButton} icon="md" variant="secondary" use={[prevButton]}>
			<ChevronLeftIcon />
		</Button>
		<div {...$heading} use:heading class="text-center">
			<Select
				buttonClass="w-36 min-w-0"
				label="Month"
				labelClass="sr-only"
				placeholder="Month"
				options={monthOptions}
				value={$placeholder.month}
				onChange={({ next }) => {
					console.log(next);
					if (next != null) setMonth(next);
				}}
			/>
			<Select
				buttonClass="w-24 min-w-0"
				label="Yearh"
				labelClass="sr-only"
				placeholder="Year"
				options={yearOptions}
				value={$placeholder.year}
				onChange={({ next }) => {
					if (next != null) setYear(next);
				}}
			/>
		</div>
		<Button {...$nextButton} icon="md" variant="secondary" use={[nextButton]}>
			<ChevronRightIcon />
		</Button>
	</header>
	{#each $months as month}
		<div class="relative">
			<div class="grid grid-cols-7" {...$grid} use:grid>
				{#each weekdays as day}
					<div
						aria-hidden="true"
						class="border-b border-r border-gray-300 p-2 text-center text-xs font-semibold text-gray-900 @md:text-sm @3xl:text-base @6xl:text-lg dark:border-gray-700 dark:text-white [&:nth-child(7)]:border-r-0"
					>
						{day}
					</div>
				{/each}
				{#each month.dates as date, i}
					<div
						aria-hidden="true"
						class={twMerge(
							'border-gray-300 p-2  pb-12 text-gray-600 @lg:aspect-square @lg:pb-0 dark:border-gray-700 dark:text-gray-400',
							i % 7 !== 6 && 'border-r',
							i < month.dates.length - 7 && 'border-b',
							date.month !== month.value.month &&
								'bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-500',
							isToday(date, 'UTC') &&
								'bg-primary-50 font-medium text-primary-600 dark:bg-primary-950 dark:text-primary-300',
						)}
					>
						<div class="flex items-center">
							{#if isToday(date, 'UTC')}
								<div class="hidden text-xs font-semibold uppercase tracking-wide @2xl:block">
									Today
								</div>
							{/if}
							<div class="ml-auto text-xs @md:text-sm @3xl:text-base @6xl:text-lg">
								{date.day}
							</div>
						</div>
					</div>
				{/each}
			</div>
			<div class="absolute inset-0 grid auto-rows-fr grid-cols-7 grid-rows-[min-content]">
				{#each weekdays as day}
					<div
						aria-hidden="true"
						class="p-2 text-center text-xs font-semibold opacity-0 @md:text-sm @3xl:text-base @6xl:text-lg"
					>
						{day}
					</div>
				{/each}
				{#each month.dates as date, i}
					{@const dayOfWeek = i % 7}
					{@const entry = entryForDay(entries, date)}
					{@const span = entry
						? Math.min(daysDiff(date.toDate('UTC'), entry.to), 7 - dayOfWeek)
						: 1}
					{#if !entry || dayOfWeek === 0 || entry.from.getDate() === date.day}
						<div class="flex items-end p-2" style:grid-column="span {span}">
							{#if entry}
								<!-- svelte-ignore a11y-no-static-element-interactions -->
								<div
									class="w-full"
									on:mouseenter={() => {
										hoveredEntry = entry;
									}}
									on:mouseleave={() => {
										if (hoveredEntry === entry) {
											hoveredEntry = undefined;
										}
									}}
								>
									<slot
										name="entry"
										{entry}
										entryProps={{ 'data-entry-hover': hoveredEntry === entry ? 'true' : undefined }}
										hovered={hoveredEntry === entry}
									/>
								</div>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
