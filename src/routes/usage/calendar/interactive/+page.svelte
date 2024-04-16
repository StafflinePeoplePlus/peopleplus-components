<script lang="ts">
	import { Calendar, type CalendarEntry } from '$lib';
	import { CalendarDate } from '$lib/date';

	let entries: CalendarEntry<string>[] = [
		{
			from: new CalendarDate(2024, 4, 2),
			to: new CalendarDate(2024, 4, 4),
			item: 'Svelte Meetup',
		},
		{
			from: new CalendarDate(2024, 4, 25),
			to: new CalendarDate(2024, 4, 28),
			item: 'Holiday',
		},
	];
</script>

<Calendar
	{entries}
	initialDate={new CalendarDate(2024, 4, 1)}
	onNewEntry={(event) => {
		const message = prompt('What title should this event have?');
		if (!message) {
			event.cancel();
			return;
		}

		entries.push({
			from: event.from,
			to: event.to,
			item: message,
		});
		event.finish();
	}}
>
	<div
		slot="entry"
		let:entry
		let:entryProps
		class="flex items-center gap-2 rounded-lg border border-sky-300 bg-sky-100 p-1 text-sky-900 backdrop-blur-sm transition-colors data-[new-entry]:border-opacity-75 data-[entry-hover]:bg-sky-200 data-[new-entry]:bg-opacity-50 @3xl:p-2 dark:border-sky-700 dark:bg-sky-900 dark:text-sky-50 dark:data-[entry-hover]:bg-sky-800"
		{...entryProps}
	>
		<div class="block truncate text-xs font-medium @3xl:text-lg">
			{entry.item ?? 'New Entry'}
		</div>
	</div>
</Calendar>
