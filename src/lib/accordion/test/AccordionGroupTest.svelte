<script lang="ts">
	import { Accordion, AccordionGroup } from '$lib';

	interface Props {
		exclusive?: boolean;
	}

	let { exclusive = false }: Props = $props();
</script>

<AccordionGroup {exclusive}>
	<Accordion label="Accordion 1">Content 1</Accordion>
	<Accordion label="Accordion 2">Content 2</Accordion>
	<Accordion label="Accordion 3">Content 3</Accordion>
</AccordionGroup>
