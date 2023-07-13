<script lang="ts">
	import { Table, TableCell, TableRow } from '$lib';
</script>

<!-- START USAGE -->
<Table borders>
	<TableRow>
		<TableCell header colspan={2}>Animals</TableCell>
	</TableRow>
	<TableRow>
		<TableCell header colspan={2}>Hippopotamus</TableCell>
	</TableRow>
	<TableRow>
		<TableCell header rowspan={2}>Horse</TableCell>
		<TableCell>Mare</TableCell>
	</TableRow>
	<TableRow>
		<TableCell>Stallion</TableCell>
	</TableRow>
	<TableRow>
		<TableCell header colspan={2}>Crocodile</TableCell>
	</TableRow>
	<TableRow>
		<TableCell header rowspan={2} visualPosition="bottom-left">Chicken</TableCell>
		<TableCell>Hen</TableCell>
	</TableRow>
	<TableRow>
		<TableCell visualPosition="bottom-right">Rooster</TableCell>
	</TableRow>
</Table>
<!-- END USAGE -->
