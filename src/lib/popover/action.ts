import { offset, flip, shift, type Placement, type Strategy } from 'svelte-floating-ui/dom';
import { createFloatingActions, arrow } from 'svelte-floating-ui';
import { createPopover as createHeadlessPopover } from 'svelte-headlessui';
import { combineActions } from '$lib/actions';
import { writable, type Readable, type Writable, derived } from 'svelte/store';
import type { Action } from 'svelte/action';

export type PopoverInstance = Readable<PopoverState> & {
	/**
	 * Action to use on the popover content. This will apply the appropriate a11y attributes and
	 * also position the content. Use $popover.expanded to conditionally render the popover.
	 */
	content: Action<HTMLElement, undefined>;
	/**
	 * Action to use on a button that will open the popover. This will apply the appriate a11y
	 * attributes and toggle $popover.expanded. This will also mark the button as the element to
	 * reference the popover position from.
	 */
	button: Action<HTMLElement, undefined>;
	/**
	 * When not using the button action, use this to mark the element to reference the popover
	 * position from.
	 */
	element: Action<HTMLElement, undefined>;
	/**
	 * Action to use on the element that will visually be your arrow.
	 */
	arrow: Action<HTMLElement, undefined>;
	/**
	 * Open the popover. Sets $popover.expanded to true and modifies the appropriate a11y
	 * attributes.
	 */
	open(): void;
	/**
	 * Close the popover. Ssets $popover.expanded to false and modifies the appropriate a11y
	 * attributes.
	 */
	close(): void;
};
export type PopoverState = HeadlessPopoverState & ComputedState;
export type HeadlessPopoverState = { expanded: boolean };
export type ComputedState = { arrow: ArrowPlacement; staticSide: StaticSide };
export type StaticSide = 'top' | 'right' | 'bottom' | 'left';
export type ArrowPlacement = {
	x?: number;
	y?: number;
};

export type { Placement, Strategy };

export type PopoverOptions = {
	placement?: Placement;
	strategy?: Strategy;
	label?: string;
};
export function createPopover({
	placement = 'top',
	strategy = 'absolute',
	label
}: PopoverOptions = {}): PopoverInstance {
	const arrowRef = writable<HTMLElement | null>(null);
	const computed = writable<ComputedState>({ staticSide: 'bottom', arrow: {} });
	const [ref, content] = createFloatingActions({
		strategy,
		placement,
		middleware: [
			offset(8),
			flip(),
			shift({ padding: 8 }),
			arrow({ element: arrowRef as Writable<HTMLElement> })
		],
		onComputed({ placement, middlewareData }) {
			const staticSide =
				{
					top: 'bottom' as const,
					right: 'left' as const,
					bottom: 'top' as const,
					left: 'right' as const
				}[placement.split('-')[0]] ?? 'bottom';
			computed.set({
				staticSide,
				arrow: { x: middlewareData.arrow?.x, y: middlewareData.arrow?.y }
			});
		}
	});
	const popover = createHeadlessPopover({ label });

	return {
		...derived([popover, computed], ([popover, computed]) => {
			return {
				...popover,
				...computed
			};
		}),
		element: ref,
		button: combineActions([ref, popover.button]),
		content: combineActions([content, popover.panel]),
		arrow: (element) => {
			arrowRef.set(element);
			return {
				destroy() {
					arrowRef.set(null);
				}
			};
		},
		open: popover.open,
		close: popover.close
	};
}
