import { createPopover as createMeltPopover } from '@melt-ui/svelte';

type Alignment = 'start' | 'end';
type Side = 'top' | 'right' | 'bottom' | 'left';
type AlignedPlacement = `${Side}-${Alignment}`;
export type Placement = Side | AlignedPlacement;
export type Strategy = 'absolute' | 'fixed';

export type PopoverOptions = {
	placement?: Placement;
	strategy?: Strategy;
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
