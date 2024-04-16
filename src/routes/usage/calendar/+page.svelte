<script lang="ts">
	import Calendar from '$lib/calendar/Calendar.svelte';
	import { CalendarDate } from '$lib/date';

	const entries = [
		{
			from: new CalendarDate(2024, 4, 12),
			to: new CalendarDate(2024, 4, 26),
			item: { icon: '🍔', name: 'Eating Burgers!' },
		},
		{
			from: new CalendarDate(2024, 4, 10),
			to: new CalendarDate(2024, 4, 12),
			item: { icon: '🌮', name: 'Eating Tacos!' },
		},
		{
			from: new CalendarDate(2024, 3, 28),
			to: new CalendarDate(2024, 4, 3),
			item: { icon: '🥩', name: 'Eating Steak!' },
		},
		{
			from: new CalendarDate(2024, 4, 30),
			to: new CalendarDate(2024, 5, 3),
			item: { icon: '🍕', name: 'Eating Pizza!' },
		},
	];
</script>

<Calendar {entries} initialDate={new CalendarDate(2024, 4, 1)}>
	<div
		slot="entry"
		let:entry
		let:entryProps
		class="flex items-center gap-2 rounded-lg border border-sky-300 bg-sky-100 p-1 text-sky-900 transition-colors data-[entry-hover]:bg-sky-200 @3xl:p-2 dark:border-sky-700 dark:bg-sky-900 dark:text-sky-50 dark:data-[entry-hover]:bg-sky-800"
		{...entryProps}
	>
		<div
			class="flex aspect-square h-5 w-5 items-center justify-center rounded-md border bg-white text-xs leading-none @3xl:h-10 @3xl:w-10 @3xl:rounded-lg @3xl:text-2xl dark:border-sky-700 dark:bg-sky-950"
		>
			{entry.item.icon}
		</div>
		<div class="block truncate text-xs font-medium @3xl:text-lg">
			{entry.item.name}
		</div>
	</div>
</Calendar>
