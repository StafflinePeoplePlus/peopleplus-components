import { createDropdownMenu as createMeltDropdownMenu } from '@melt-ui/svelte';
import { getContext } from 'svelte';

export type DropdownMenu = ReturnType<typeof createDropdownMenu>['menu'];
export function createDropdownMenu() {
	const {
		states: { open },
		elements: { menu, item, trigger, arrow, separator },
	} = createMeltDropdownMenu({
		loop: true,
	});

	return {
		open,
		trigger,
		menu: {
			elements: { menu, item, arrow, separator },
			states: { open },
		},
	};
}

export const dropdownMenuContext = Symbol('dropdown menu');
export function getDropdownMenuContext() {
	const context = getContext<DropdownMenu | undefined>(dropdownMenuContext);
	if (!context) {
		throw new Error(
			'Missing dropdown menu context, are you sure this component is inside a dropdown menu?',
		);
	}
	return context;
}
