import { createPopover as createMeltPopover } from '@melt-ui/svelte';
import type { FloatingPlacement, FloatingStrategy } from '../floating';

// for backwards compatibility
export type { FloatingPlacement as Placement, FloatingStrategy as Strategy };

export type PopoverOptions = {
	placement?: FloatingPlacement;
	strategy?: FloatingStrategy;
	flip?: boolean;
	overlap?: boolean;
	sameWidth?: boolean;
};
export type PopoverInstance = ReturnType<typeof createPopover>;
export function createPopover({
	placement = 'top',
	strategy = 'absolute',
	flip = true,
	overlap = false,
	sameWidth = false,
}: PopoverOptions = {}) {
	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createMeltPopover({
		positioning: { placement, strategy, flip, overlap, sameWidth },
		forceVisible: true,
	});

	return {
		button: trigger,
		content,
		arrow,
		expanded: open,
		open() {
			open.set(true);
		},
		close() {
			open.set(false);
		},
	};
}
