<script lang="ts">
	import { Accordion, AccordionGroup } from '$lib';

	export let exclusive = false;
</script>

<AccordionGroup {exclusive}>
	<Accordion label="Accordion 1">Content 1</Accordion>
	<Accordion label="Accordion 2">Content 2</Accordion>
	<Accordion label="Accordion 3">Content 3</Accordion>
</AccordionGroup>
