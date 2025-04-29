<script lang="ts">
	import { Typography } from '$lib';
	import { Table, TableCell, TableRow } from '$lib/table';
	import { defaultCookieStrings, type CookieStrings } from './i18n';
	import type { CookieDescription } from './types';

	interface Props {
		class?: string | undefined;
		cookies: CookieDescription[];
		strings?: CookieStrings;
	}

	let { class: className = undefined, cookies, strings = defaultCookieStrings }: Props = $props();
</script>

<div class="overflow-x-auto">
	<Table striped class={className}>
		<Typography as="caption" variant="caption" class="sr-only">
			{strings.tableCaption}
		</Typography>
		<thead>
			<TableRow>
				<TableCell class="text-left" header>{strings.name}</TableCell>
				<TableCell class="text-left" header>{strings.provider}</TableCell>
				<TableCell class="text-left" header>{strings.expiry}</TableCell>
				<TableCell class="text-left" header>{strings.purpose}</TableCell>
			</TableRow>
		</thead>
		<tbody>
			{#each cookies as cookie}
				<TableRow>
					<TableCell>{cookie.name}</TableCell>
					<TableCell>{cookie.provider}</TableCell>
					<TableCell>{cookie.expiration}</TableCell>
					<TableCell>{cookie.purpose}</TableCell>
				</TableRow>
			{/each}
		</tbody>
	</Table>
</div>
