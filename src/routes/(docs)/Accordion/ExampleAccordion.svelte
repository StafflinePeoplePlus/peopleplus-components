<script>
	import {Accordion, AccordionGroup, Card} from '$lib';
</script>

<Card class="mb-10 w-[400px]">
	<div class="rounded-t-xl h-36 bg-cover bg-center"
		 style="background-image: url('/jumbotron.jpg');" />
	<div class="p-3">
		<strong>Alexander Bryne</strong>
		<p class="italic text-sm text-gray-500">Project Manager</p>
	</div>

	<AccordionGroup exclusive>
		<Accordion label="Learn More"
				   labelClass="px-3 py-3 hover:bg-transparent text-sm"
				   contentClass="p-0 border-t-0"
				   class="bg-white border-none p-0">
			<p class="text-gray-500 bg-gray-100 p-2 rounded-b-lg text-sm">
				Cameron is an experienced project manager with vast experience in overseeing diverse teams. He excels in strategic planning, risk management, and is highly skilled in nurturing strong client relationships.
			</p>
		</Accordion>
	</AccordionGroup>
</Card>

<AccordionGroup exclusive>
	<Accordion label="Accordion 1">
		<p class="text-gray-500">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id massa et metus blandit malesuada.
		</p>
	</Accordion>
	<Accordion label="Accordion 2">
		<p class="text-gray-500">
			Aenean sagittis lectus eget dignissim fringilla. Donec sit amet quam tellus. Maecenas
			convallis est fringilla metus faucibus suscipit.
		</p>
	</Accordion>
	<Accordion label="Accordion 3">
		<p class="text-gray-500">
			Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Lacus eu efficitur feugiat,
			lacus urna porttitor enim, et tincidunt nunc nisl non tellus.
		</p>
	</Accordion>
</AccordionGroup>
