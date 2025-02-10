<script lang="ts">
	import { run } from 'svelte/legacy';

	import { twMerge } from 'tailwind-merge';
	import { createDialog, createSync } from '@melt-ui/svelte';
	import { fade, fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	
	
	interface Props {
		class?: string | null | undefined;
		overlayClass?: string | null | undefined;
		portalClass?: string | null | undefined;
		open?: boolean;
		disableClickOutside?: boolean;
		onClose?: (() => void) | null | undefined;
		/**
	 * Allows overriding of the melt-ui dialog for more custom use cases.
	 */
		dialog?: any;
		children?: import('svelte').Snippet<[any]>;
	}

	let {
		class: className = undefined,
		overlayClass = undefined,
		portalClass = undefined,
		open = $bindable(false),
		disableClickOutside = false,
		onClose = undefined,
		dialog = createDialog({
		closeOnOutsideClick: !disableClickOutside,
		forceVisible: true,
	}),
		children
	}: Props = $props();

	const {
		elements: { portalled, overlay, content, title, description, close },
		states: { open: openState },
		options: { closeOnOutsideClick },
	} = dialog;

	const sync = createSync(dialog.states);
	run(() => {
		sync.open(open, (v) => {
			if (!v && onClose) {
				onClose();
			}

			open = v;
		});
	});

	run(() => {
		$closeOnOutsideClick = !disableClickOutside;
	});
</script>

{#if $openState}
	<div {...$portalled} use:portalled class={portalClass}>
		<div
			{...$overlay}
			use:overlay
			class={twMerge('fixed inset-0 z-40 bg-black/10 backdrop-blur-sm', overlayClass)}
			transition:fade={{ easing: quadInOut, duration: 200 }}
		></div>
		<div
			{...$content}
			use:content
			class={twMerge('fixed inset-y-0 right-0 z-40 bg-white p-4 shadow-xl', className)}
			transition:fly={{ easing: quadInOut, x: '100%', duration: 200 }}
		>
			{@render children?.({ title: { props: $title, action: title }, description: { props: $description, action: description }, close: { props: $close, action: close }, })}
		</div>
	</div>
{/if}
