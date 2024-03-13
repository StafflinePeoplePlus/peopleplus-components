import { createPopover as createMeltPopover } from '@melt-ui/svelte';
import type { FloatingPlacement, FloatingStrategy } from '../floating';

// for backwards compatibility
export type { FloatingPlacement as Placement, FloatingStrategy as Strategy };

export type PopoverOptions = {
	placement?: FloatingPlacement;
	strategy?: FloatingStrategy;
};
export type PopoverInstance = ReturnType<typeof createPopover>;
export function createPopover({ placement = 'top', strategy = 'absolute' }: PopoverOptions = {}) {
	const {
		elements: { trigger, content, arrow },
		states: { open },
	} = createMeltPopover({
		positioning: { placement, strategy },
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
