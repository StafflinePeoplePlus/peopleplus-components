<script lang="ts">
	import { Accordion, AccordionGroup, Card } from '$lib';
</script>

<Card class="mb-10 w-[400px]">
	<div
		class="h-36 rounded-t-xl bg-cover bg-center"
		style="background-image: url('/jumbotron.jpg');"
	/>
	<div class="p-3">
		<strong>Alexander Bryne</strong>
		<p class="text-sm italic text-gray-500">Project Manager</p>
	</div>

	<AccordionGroup exclusive>
		<Accordion
			label="Learn More"
			labelClass="px-3 py-3 hover:bg-transparent text-sm"
			contentClass="p-0 border-t-0"
			class="border-none bg-white p-0"
		>
			<p class="rounded-b-lg bg-gray-100 p-2 text-sm text-gray-500">
				Alexander is an experienced project manager with vast experience in overseeing diverse
				teams. He excels in strategic planning, risk management, and is highly skilled in nurturing
				strong client relationships.
			</p>
		</Accordion>
	</AccordionGroup>
</Card>
