<script lang="ts">
	import { Collapsible } from '$lib';

	const pages = [
		{ title: 'Page 1' },
		{ title: 'Page 2' },
		{ title: 'Page 3' },
		{ title: 'Page 4' },
	];
</script>

<!-- START USAGE -->
<Collapsible class="max-w-md">
	<div slot="label" class="p-3 max-sm:-mr-12 font-bold text-lg">4 Pages</div>

	<div class="p-3 pb-5 space-y-4">
		{#each pages as page}
			<h3 class="bg-gray-100 rounded-lg p-3 hover:bg-gray-200">{page.title}</h3>
		{/each}
	</div>
</Collapsible>
<!-- END USAGE -->
