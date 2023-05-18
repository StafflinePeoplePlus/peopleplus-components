<script lang="ts">
	import { BackgroundImage, Button, Jumbotron, Typography } from '$lib';
</script>

<Jumbotron>
	<BackgroundImage src="/jumbotron.jpg" />
	<Typography variant="title-xl" as="h1" class="mb-4">Lorem ipsum dolor sit amet</Typography>
	<Typography variant="subtitle" class="mb-8">
		Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Aenean eleifend, lacus eu
		efficitur feugiat, lacus urna porttitor enim, et tincidunt nunc nisl non tellus.
	</Typography>

	<div class="flex flex-col gap-4 sm:flex-row sm:justify-center">
		<Button>Get started &RightArrow;</Button>
		<Button variant="secondary">Learn more</Button>
	</div>
</Jumbotron>
