<script context="module" lang="ts">
	export type CalendarEntry<I> = {
		from: DateValue;
		to: DateValue;
		item: I;
	};
	export type NewEntry = {
		from: DateValue;
		to: DateValue;
		started: DateValue;
		interactive: boolean;
		element: HTMLElement;
		item?: void;
	};
	export type NewEntryEvent = {
		from: DateValue;
		to: DateValue;
		/**
		 * The element that was clicked to start creating a new entry.
		 * Note that this may correspond to either the from or to date.
		 */
		startElement: HTMLElement;
		/**
		 * The element that was clicked to finish creating a new entry.
		 * Note that this may correspond to either the from or to date.
		 */
		endElement: HTMLElement;
		/**
		 * Removes the temporary new entry from the calendar. It is assumed that the new entry has
		 * been added to the entries array, though not required.
		 */
		finish(): void;
		/**
		 * Cancels the new entry creation, leaving the temporary new entry on the calendar where the
		 * user can continue to interact with it.
		 */
		cancel(): void;
	};
</script>

<script lang="ts">
	import { isToday, type DateValue, isSameDay, getDayOfWeek } from '@internationalized/date';

	import Button from '$lib/Button.svelte';
	import { createCalendar } from '@melt-ui/svelte';
	import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from 'lucide-svelte';
	import { twMerge } from 'tailwind-merge';
	import Select from '$lib/Select.svelte';

	type EntryItem = $$Generic;

	let className: string | null | undefined = undefined;
	export { className as class };
	export let addButtonClass: string | null | undefined = undefined;
	export let initialDate: DateValue | null | undefined = undefined;
	/**
	 * Entries to display on the calendar. These must not overlap as the calendar display does not
	 * support this and will render incorrectly.
	 */
	export let entries: CalendarEntry<EntryItem>[] = [];
	/**
	 * Called when the user clicks the last date when creating a new entry. You are then expected to
	 * call either finish or cancel on the event depending on the outcome.
	 */
	export let onNewEntry: ((event: NewEntryEvent) => void) | null | undefined = undefined;

	let hoveredEntry: CalendarEntry<EntryItem> | NewEntry | undefined = undefined;
	let newEntry: NewEntry | undefined = undefined;
	$: sortedEntries = [...entries, ...(newEntry ? [newEntry] : [])].toSorted((a, b) => {
		return a.from.compare(b.from);
	});
	$: newEntryIndex = sortedEntries.findIndex((entry) => entry === newEntry);
	$: beforeNewEntry = newEntryIndex > 0 ? sortedEntries.at(newEntryIndex - 1) : undefined;
	$: afterNewEntry = sortedEntries.at(newEntryIndex + 1);

	const {
		elements: { calendar, heading, grid, prevButton, nextButton },
		states: { months, placeholder },
		helpers: { setMonth, setYear },
	} = createCalendar({
		locale: 'en-GB',
		defaultPlaceholder: initialDate ?? undefined,
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

	$: entryForDay = (date: DateValue): CalendarEntry<EntryItem> | NewEntry | undefined => {
		return sortedEntries.find((entry) => {
			return date.compare(entry.from) >= 0 && date.compare(entry.to) < 0;
		});
	};

	function daysDiff(from: DateValue, to: DateValue): number {
		return Math.floor(
			(to.toDate('UTC').getTime() - from.toDate('UTC').getTime()) / (1000 * 60 * 60 * 24),
		);
	}
</script>

<svelte:window
	on:keyup={(evt) => {
		if (newEntry && evt.key === 'Escape') {
			newEntry = undefined;
		}
	}}
/>

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
					<!-- svelte-ignore a11y-mouse-events-have-key-events -->
					<button
						aria-hidden="true"
						class={twMerge(
							'flex border-gray-300 p-2 pb-12 text-gray-600 @lg:aspect-square @lg:pb-0 dark:border-gray-700 dark:text-gray-400',
							getDayOfWeek(date, 'en-GB') !== 6 && 'border-r',
							i < month.dates.length - 7 && 'border-b',
							date.month !== month.value.month &&
								'bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-500',
							isToday(date, 'UTC') &&
								'bg-primary-50 font-medium text-primary-600 dark:bg-primary-950 dark:text-primary-300',
						)}
						on:mouseover={() => {
							if (newEntry && newEntry.interactive) {
								if (beforeNewEntry && date.compare(beforeNewEntry.to) < 0) {
									newEntry.from = beforeNewEntry.to;
									newEntry.to = newEntry.started.add({ days: 1 });
								} else if (afterNewEntry && date.compare(afterNewEntry.from) >= 0) {
									newEntry.from = newEntry.started;
									newEntry.to = afterNewEntry.from;
								} else if (newEntry.started.compare(date) <= 0) {
									newEntry.from = newEntry.started;
									newEntry.to = date.add({ days: 1 });
								} else {
									newEntry.from = date;
									newEntry.to = newEntry.started.add({ days: 1 });
								}
							}
						}}
						on:click={(evt) => {
							if (newEntry) {
								newEntry.interactive = false;
								onNewEntry?.({
									from: newEntry.from,
									to: newEntry.to,
									startElement: newEntry.element,
									endElement: evt.currentTarget,
									finish() {
										newEntry = undefined;
									},
									cancel() {
										if (!newEntry) return;
										newEntry.interactive = true;
									},
								});
							}
						}}
					>
						<div class="flex w-full items-center">
							{#if isToday(date, 'UTC')}
								<div class="hidden text-xs font-semibold uppercase tracking-wide @2xl:block">
									Today
								</div>
							{/if}
							<div class="ml-auto text-xs @md:text-sm @3xl:text-base @6xl:text-lg">
								{date.day}
							</div>
						</div>
					</button>
				{/each}
			</div>
			<div
				class={twMerge(
					'absolute inset-0 grid auto-rows-fr grid-cols-7 grid-rows-[min-content]',
					newEntry && 'pointer-events-none',
				)}
			>
				{#each weekdays as day}
					<div
						aria-hidden="true"
						class="p-2 text-center text-xs font-semibold opacity-0 @md:text-sm @3xl:text-base @6xl:text-lg"
					>
						{day}
					</div>
				{/each}
				{#each month.dates as date}
					{@const dayOfWeek = getDayOfWeek(date, 'en-GB')}
					{@const entry = entryForDay(date)}
					{@const span = entry ? Math.min(daysDiff(date, entry.to), 7 - dayOfWeek) : 1}
					{#if !entry || dayOfWeek === 0 || isSameDay(date, entry.from)}
						<div
							class={twMerge(
								'group flex items-end p-2 focus:bg-red-600',
								newEntry && 'pointer-events-none',
							)}
							style:grid-column="span {span}"
						>
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
										entryProps={{
											'data-entry-hover': hoveredEntry === entry ? 'true' : undefined,
											'data-new-entry': newEntry === entry ? 'true' : undefined,
										}}
										hovered={hoveredEntry === entry}
									/>
								</div>
							{:else if onNewEntry}
								<button
									class={twMerge(
										'flex w-full items-center justify-center rounded-md border border-primary-300 bg-primary-100 p-1 text-xs text-primary-950 opacity-0 transition-opacity group-hover:opacity-100 @3xl:rounded-lg @3xl:p-2 dark:border-primary-700 dark:bg-primary-900 dark:text-white',
										addButtonClass,
									)}
									on:mousedown={(evt) => {
										newEntry = {
											from: date,
											to: date.add({ days: 1 }),
											started: date,
											interactive: true,
											element: evt.currentTarget,
										};
									}}
								>
									<PlusIcon class="h-3.5 w-3.5 @3xl:h-6 @3xl:w-6" />
								</button>
							{/if}
						</div>
					{/if}
				{/each}
			</div>
		</div>
	{/each}
</div>
