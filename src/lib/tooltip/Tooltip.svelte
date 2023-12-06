<script lang="ts">
	import { createTooltip } from '@melt-ui/svelte';
	import { fade } from 'svelte/transition';
	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createTooltip({
		positioning: {
			placement: 'top',
		},
		openDelay: 0,
		closeDelay: 0,
		closeOnPointerDown: false,
		forceVisible: true,
	});
</script>

<button type="button" class="" {...$trigger} use:trigger>
	<slot />
</button>

{#if $open}
	<div
			{...$content} use:content
			transition:fade={{ duration: 100 }}
			class="z-10 rounded-lg bg-white shadow"
	>
		<div {...$arrow} use:arrow />
		<p class="px-4 py-1 text-magnum-700">Add item to library</p>
	</div>
{/if}
