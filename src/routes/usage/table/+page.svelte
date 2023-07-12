<script lang="ts">
	import { Table, TableCell, TableRow, Typography } from '$lib';
</script>

<!-- START USAGE -->
<Table striped>
	<Typography as="caption" variant="caption" class="mb-2">
		Shopping list for 1 hour bagels
	</Typography>
	<TableRow>
		<TableCell header>#</TableCell>
		<TableCell header>Description</TableCell>
		<TableCell header number>Price/kg</TableCell>
		<TableCell header number>Quantity</TableCell>
		<TableCell header number>Subtotal</TableCell>
	</TableRow>
	<TableRow>
		<TableCell number>1</TableCell>
		<TableCell>Flour</TableCell>
		<TableCell number>£0.80</TableCell>
		<TableCell number>1.5 kg</TableCell>
		<TableCell number>£1.40</TableCell>
	</TableRow>
	<TableRow>
		<TableCell number>2</TableCell>
		<TableCell>Yeast</TableCell>
		<TableCell number>£16.00</TableCell>
		<TableCell number>100 g</TableCell>
		<TableCell number>£1.60</TableCell>
	</TableRow>
	<TableRow>
		<TableCell number>3</TableCell>
		<TableCell>Black Treacle</TableCell>
		<TableCell number>£3.00</TableCell>
		<TableCell number>454 g</TableCell>
		<TableCell number>£1.38</TableCell>
	</TableRow>
	<TableRow>
		<TableCell number>4</TableCell>
		<TableCell>Beer</TableCell>
		<TableCell number>£5.00</TableCell>
		<TableCell number>250 g</TableCell>
		<TableCell number>£1.25</TableCell>
	</TableRow>
	<TableRow>
		<TableCell header number colspan={4}>Total</TableCell>
		<TableCell number>£5.63</TableCell>
	</TableRow>
</Table>
<!-- END USAGE -->
