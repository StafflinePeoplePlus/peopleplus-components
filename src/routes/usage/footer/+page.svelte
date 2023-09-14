<script lang="ts">
	import { Footer, Typography } from '$lib';
</script>

<!-- START USAGE -->
<Footer>
	<div slot="start">
		<a href="/">
			<img src="/peopleplus-logo.svg" class="h-8" alt="PeoplePlus Logo" />
		</a>
		<Typography variant="caption" class="mt-5 max-w-lg">
			We are a leading skills and training business helping people to transform their lives and
			businesses through work, training, education and financial advice.
		</Typography>
	</div>

	<div slot="middle">
		<Typography variant="sub-heading" as="h3">Help and Support</Typography>
		<address class="not-italic">
			<ul class="mt-3 text-gray-600 dark:text-gray-400">
				<li class="mb-4">
					<a href="mailto:support@example.com" class="hover:underline"> support@example.com </a>
				</li>
				<li class="mb-4">
					<a href="tel:0800345666" class="hover:underline"> 0800 345666 </a>
				</li>
				<li>
					<span class="italic">
						PeoplePlus Central Operations,<br />
						PO Box 509<br />
						St Helens<br />
						WA10 9JT
					</span>
				</li>
			</ul>
		</address>
	</div>

	<div slot="end">
		<ul class="dark:text-gray-40 space-y-2 text-gray-600 dark:text-gray-400">
			<li><a href="#privacy" class="hover:underline">Privacy Policy</a></li>
			<li><a href="#cookies" class="hover:underline">Cookies Policy</a></li>
			<li><a href="#terms" class="hover:underline">Terms And Conditions</a></li>
			<li><a href="#policy" class="hover:underline">Acceptable Use Policy</a></li>
			<li><a href="#modern-slavery" class="hover:underline">Modern Slavery</a></li>
			<li><a href="#compliments" class="hover:underline">Complaints and Compliments</a></li>
		</ul>
	</div>

	<div slot="bottom">
		<Typography variant="caption">All Rights Reserved | PeoplePlus &copy; 2023</Typography>
	</div>
</Footer>
<!-- END USAGE -->
