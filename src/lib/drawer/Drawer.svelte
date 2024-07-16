<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { createDialog, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	let className: string | null | undefined = undefined;
	export { className as class };
	export let overlayClass: string | null | undefined = undefined;
	export let portalClass: string | null | undefined = undefined;
	export let open = false;
	export let disableClickOutside = false;
	export let onClose: (() => void) | null | undefined = undefined;
	/**
	 * Allows overriding of the melt-ui dialog for more custom use cases.
	 */
	export let dialog = createDialog({
		closeOnOutsideClick: !disableClickOutside,
		forceVisible: true,
	});

	const {
		elements: { portalled, overlay, content, title, description, close },
		states: { open: openState },
		options: { closeOnOutsideClick },
	} = dialog;

	const sync = createSync(dialog.states);
	$: sync.open(open, (v) => {
		if (!v && onClose) {
			onClose();
		}

		open = v;
	});

	$: $closeOnOutsideClick = !disableClickOutside;
</script>

{#if $openState}
	<div {...$portalled} use:portalled class={portalClass}>
		<div
			{...$overlay}
			use:overlay
			class={twMerge('fixed inset-0 z-40 bg-black/10 backdrop-blur-sm', overlayClass)}
			transition:fade={{ easing: quadInOut, duration: 200 }}
		/>
		<div
			{...$content}
			use:content
			class={twMerge('fixed inset-y-0 right-0 z-40 bg-white p-4 shadow-xl', className)}
			transition:fly={{ easing: quadInOut, x: '100%', duration: 200 }}
		>
			<slot
				title={{ props: $title, action: title }}
				description={{ props: $description, action: description }}
				close={{ props: $close, action: close }}
			/>
		</div>
	</div>
{/if}
