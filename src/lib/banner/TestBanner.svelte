<script>
	import Banner from '$lib/banner/Banner.svelte';
	import { Button, Typography } from 'pp-svelte-components';
</script>

<Banner>
	<div class="items-center gap-4 md:flex">
		<div class="space-y-1 max-sm:pb-2">
			<Typography variant="sub-heading">Banner Title</Typography>
			<Typography variant="body">Banner Description</Typography>
		</div>
		<Button href="https://peopleplus.co.uk" class="h-12 w-full md:w-1/2 lg:w-1/4">Learn More</Button
		>
	</div>
</Banner>
