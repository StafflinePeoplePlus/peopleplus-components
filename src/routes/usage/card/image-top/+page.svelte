<script lang="ts">
	import { Card, Button, Typography } from '$lib';
</script>

<!-- START USAGE -->
<Card>
	<div class="relative h-48 rounded-xl bg-cover bg-center">
		<img
			src="/jumbotron.jpg"
			alt="Sample"
			class="absolute inset-0 h-full w-full rounded-xl object-cover object-center"
		/>
	</div>

	<div class="space-y-5 px-5">
		<Typography variant="heading" as="h1" class="pt-4 text-gray-700">
			Lorem ipsum dolor sit amet
		</Typography>
		<Typography variant="body-lg">
			Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Aenean eleifend, lacus eu
			efficitur feugiat, lacus urna porttitor enim, et tincidunt nunc nisl non tellus.
		</Typography>
		<div class="flex flex-col gap-4 pb-5 sm:flex-row sm:justify-end">
			<Button>Get started &RightArrow;</Button>
		</div>
	</div>
</Card>
<!-- END USAGE -->
