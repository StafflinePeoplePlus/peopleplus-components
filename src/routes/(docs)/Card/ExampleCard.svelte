<script lang="ts">
	import { Card, Button, Typography } from '$lib';
</script>

<Card>
	<div
		class="relative h-80 rounded-xl bg-cover bg-center"
		style="height: 200px; background-image: url('/jumbotron.jpg');"
	/>
	<div class="space-y-5 px-5">
		<Typography variant="title-xl" as="h1" class="pt-4 text-gray-700">
			Lorem ipsum dolor sit amet
		</Typography>
		<Typography>
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
		<blockquote>
			<p class="text-lg font-medium">
				"Duis augue nibh, viverra quis sapien ut, sagittis facilisis quam. Aenean eleifend, lacus eu
				efficitur feugiat, lacus urna porttitor enim, et tincidunt nunc nisl non tellus."
			</p>
		</blockquote>
		<div class="font-medium">
			<div class="text-sky-500 dark:text-sky-400">Jese Leos</div>
			<div class="text-slate-700 dark:text-slate-500">CTO & Web Developer</div>
		</div>
	</div>
</Card>
