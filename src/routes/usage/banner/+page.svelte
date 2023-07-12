<script lang="ts">
	import { Button, Typography, Banner } from '$lib';
	let showBanner = true;
</script>

{#if showBanner}
	<Banner dismissable on:dismiss={() => (showBanner = false)}>
		<div class="items-center gap-4 md:flex">
			<div class="relative h-28 rounded-lg md:h-40 md:w-80 lg:h-20 lg:w-64">
				<img
					src="/jumbotron.jpg"
					alt=""
					class="inset-0 h-full w-full rounded-lg object-cover object-center"
				/>
			</div>
			<div class="space-y-1 max-sm:pb-2">
				<Typography variant="sub-heading">'The Lyrics, The Music & The Money'</Typography>
				<Typography variant="body">
					Introducing our latest course! Unravel the complex world of music industry economics and
					understand the artistry behind creating impactful lyrics.
				</Typography>
			</div>
			<Button href="https://peopleplus.co.uk" class="h-12 w-full md:w-1/2 lg:w-1/4">
				View Course
			</Button>
		</div>
	</Banner>
{/if}
