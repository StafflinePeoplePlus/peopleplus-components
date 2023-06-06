<script lang="ts">
	import { Table, TableCell, TableRow } from '$lib/table';
	import type { CookieDescription } from './types';

	let className: string | undefined = undefined;
	export { className as class };
	export let cookies: CookieDescription[];
</script>

<div class="overflow-x-auto">
	<Table striped class={className}>
		<TableRow>
			<TableCell class="text-left" header>Name</TableCell>
			<TableCell class="text-left" header>Provider</TableCell>
			<TableCell class="text-left" header>Expiry</TableCell>
			<TableCell class="text-left" header>Purpose</TableCell>
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
