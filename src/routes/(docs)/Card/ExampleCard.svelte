<script lang="ts">
	import { Card, Button, Typography } from '$lib';
</script>

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

<Card class="my-5 rounded-xl bg-gray-50 p-8 dark:bg-slate-800 lg:flex lg:p-0">
	<img
		class="mx-auto h-24 w-24 rounded-full lg:h-auto lg:w-48 lg:rounded-lg"
		src="/jumbotron.jpg"
		alt=""
		width="384"
		height="512"
	/>
	<div class="space-y-4 pt-6 text-center lg:p-8 lg:text-left">
		<Typography variant="body-lg" as="h5">
			"Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Aenean eleifend, lacus eu
			efficitur feugiat, lacus urna porttitor enim, et tincidunt nunc nisl non tellus."
		</Typography>
		<Typography variant="body" as="h5" class="text-sky-500 dark:text-sky-400">Jese Leos</Typography>
		<Typography variant="caption" as="h5">CTO & Web Developer</Typography>
	</div>
</Card>
