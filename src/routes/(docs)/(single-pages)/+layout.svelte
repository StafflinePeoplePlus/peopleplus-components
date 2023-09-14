<script lang="ts">
	import Copyright from '../Copyright.svelte';
</script>

<div class="grow bg-white p-8 dark:bg-gray-900 sm:py-12">
	<div class="mx-auto max-w-prose">
		<slot />
	</div>
	<Copyright />
</div>
