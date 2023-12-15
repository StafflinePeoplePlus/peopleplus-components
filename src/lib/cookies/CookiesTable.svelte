<script lang="ts">
	import { Table, TableCell, TableRow } from '$lib/table';
	import { defaultCookieStrings } from './i18n';
	import type { CookieDescription } from './types';

	let className: string | undefined = undefined;
	export { className as class };
	export let cookies: CookieDescription[];
	export let strings = defaultCookieStrings;
</script>

<div class="overflow-x-auto">
	<Table striped class={className}>
		<caption class="sr-only">{strings.tableCaption}</caption>
		<TableRow>
			<TableCell class="text-left" header>{strings.name}</TableCell>
			<TableCell class="text-left" header>{strings.provider}</TableCell>
			<TableCell class="text-left" header>{strings.expiry}</TableCell>
			<TableCell class="text-left" header>{strings.purpose}</TableCell>
		</TableRow>
		{#each cookies as cookie}
			<TableRow>
				<TableCell>{cookie.name}</TableCell>
				<TableCell>{cookie.provider}</TableCell>
				<TableCell>{cookie.expiration}</TableCell>
				<TableCell>{cookie.purpose}</TableCell>
			</TableRow>
		{/each}
	</Table>
</div>
