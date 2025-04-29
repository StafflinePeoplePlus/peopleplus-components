<script lang="ts">
	import Copyright from '../Copyright.svelte';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="grow bg-white p-8 dark:bg-gray-900 sm:py-12">
	<div class="mx-auto max-w-prose">
		{@render children?.()}
	</div>
	<Copyright />
</div>
