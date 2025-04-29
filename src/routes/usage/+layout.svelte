<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<div class="grow p-8 dark:bg-gray-900">
	{@render children?.()}
</div>
