import { createPopover as createMeltPopover } from '@melt-ui/svelte';
import type { FloatingPlacement, FloatingStrategy } from '../floating';
import type { Writable } from 'svelte/store';

// for backwards compatibility
export type { FloatingPlacement as Placement, FloatingStrategy as Strategy };

export type PopoverOptions = {
	placement?: FloatingPlacement;
	strategy?: FloatingStrategy;
	flip?: boolean;
	overlap?: boolean;
	sameWidth?: boolean;
	open?: Writable<boolean>;
};
export type PopoverInstance = ReturnType<typeof createPopover>;
export function createPopover({
	placement = 'top',
	strategy = 'absolute',
	flip = true,
	overlap = false,
	sameWidth = false,
	open,
}: PopoverOptions = {}) {
	const {
		elements: { trigger, content, arrow },
		states: { open: openState },
	} = createMeltPopover({
		positioning: { placement, strategy, flip, overlap, sameWidth },
		forceVisible: true,
		open,
	});

	return {
		button: trigger,
		content,
		arrow,
		expanded: openState,
		open() {
			openState.set(true);
		},
		close() {
			openState.set(false);
		},
	};
}
