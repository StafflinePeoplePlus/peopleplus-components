import type { Action } from 'svelte/action';
import { type Readable, readable, writable, derived } from 'svelte/store';
import { destroySequence, toggleableAction, addEventListener } from './helpers/action';

const DRAG_BAR_SIZE = 3;

export type Axis = 'x' | 'y';
export type ReorderOperation = {
	/**
	 * Id of the item that is being reordered.
	 */
	id: string;
	/**
	 * Index the item is currently at.
	 */
	fromIndex: number;
	/**
	 * Index the item should be inserted at. This index assumes that the item has already been
	 * removed from the fromIndex.
	 */
	toIndex: number;
};
export type SortableOpts = {
	/**
	 * Svelte store containing a boolean to enable/disable the sortable. Defaults to enabled.
	 */
	enabled?: Readable<boolean>;
	/**
	 * Axis the sortable works in. Defaults to 'y'
	 */
	axis?: Axis;
	/**
	 * When true, enabled some debug rendering such as rendering the drop zones. Defaults to false
	 */
	debug?: boolean;
	/**
	 * Called when the order changes. It is expected that you update your list order when this
	 * happens as this will not be done for you.
	 * @param operation Object describing the operation that needs to be applied to your list
	 */
	onReorder?(operation: ReorderOperation): void;
};

export type Sortable = Readable<{ enabled: boolean; dragging: boolean }> & {
	item: Action<HTMLElement, string>;
};

type AxisBound = { start: number; end: number; size: number };
type ItemBounds = { id: string; primaryAxis: AxisBound; secondaryAxis: AxisBound };
type ScrollArea = {
	element: HTMLElement;
	rect: DOMRect;
	size: number;
};
type DragState = {
	el: HTMLElement;
	id: string;
	bar: HTMLElement;
	zones: SortableDropZone[];
	itemBounds: ItemBounds[];
	dragCanvas: HTMLElement;
	createdDropZones: boolean;
};

export function createSortable(opts: SortableOpts = {}): Sortable {
	const enabled = opts.enabled ?? readable(true);
	const axis = opts.axis ?? 'y';
	const debug = opts.debug ?? false;
	const items: Map<string, HTMLElement> = new Map();
	const dragging = writable(false);
	let dragState: DragState | undefined = undefined;

	const cancelDrag = () => {
		if (dragState) {
			dragState.el.style.removeProperty('opacity');
			dragState.dragCanvas.remove();
			dragState = undefined;
			dragging.set(false);
		}
	};
	const onDrop = (zone: SortableDropZone) => {
		if (dragState) {
			if (opts.onReorder) {
				const operation = calculateReorder(dragState, zone);
				if (operation) {
					opts.onReorder(operation);
				}
			}

			cancelDrag();
		}
	};
	const onDragOver = (zone: SortableDropZone) => {
		if (dragState) {
			repositionDragBar(dragState.bar, zone, dragState.itemBounds, axis);
		}
	};

	return {
		...derived([enabled, dragging], ([enabled, dragging]) => ({
			enabled,
			dragging
		})),
		item: toggleableAction<HTMLElement, string>(enabled, (el, id) => {
			if (!id) {
				throw new Error('Must supply ID to sortable item');
			}

			el.setAttribute('draggable', 'true');
			items.set(id, el);

			const destroy = destroySequence(
				() => {
					el.removeAttribute('draggable');
					el.style.removeProperty('opacity');
					items.delete(id);
				},
				addEventListener(el, 'dragstart', (evt) => {
					el.style.opacity = '0.5';

					const scrollArea = getScrollArea(el, axis);
					const itemBounds = calculateAllItemBounds(items, scrollArea, axis);
					const zones = calculateDropZones(itemBounds, scrollArea);
					const dragCanvas = createDragCanvas(scrollArea.element);
					const bar = createDragBar(dragCanvas, axis, itemBounds);
					const zoneUnderCursor = findDropZoneUnderCursor(zones, scrollArea, axis, evt);
					if (zoneUnderCursor) {
						repositionDragBar(bar, zoneUnderCursor, itemBounds, axis);
					}

					dragState = {
						id,
						el,
						bar,
						zones,
						itemBounds,
						dragCanvas,
						createdDropZones: false
					};
					dragging.set(true);
				}),
				addEventListener(el, 'dragend', cancelDrag),
				addEventListener(el, 'drag', () => {
					if (dragState && !dragState.createdDropZones) {
						createDropZones(
							dragState.dragCanvas,
							dragState.zones,
							axis,
							{ onDrop, onDragOver },
							debug
						);
						dragState.createdDropZones = true;
					}
				})
			);

			return {
				destroy
			};
		})
	};
}

export function reorderList<T>(
	list: T[],
	idAccessor: (item: T) => string,
	operation: ReorderOperation
): T[] {
	const item = list.find((item) => operation.id === idAccessor(item));
	if (item) {
		list.splice(operation.fromIndex, 1);
		list.splice(operation.toIndex, 0, item);
	}
	return list;
}

function repositionDragBar(
	bar: HTMLElement,
	zone: SortableDropZone,
	itemBounds: ItemBounds[],
	axis: string
) {
	let value;
	if (zone.afterId === undefined) {
		const item = itemBounds[0];
		value = `${item.primaryAxis.start - DRAG_BAR_SIZE - 2}px`;
	} else if (zone.beforeId === undefined) {
		const item = itemBounds[itemBounds.length - 1];
		value = `${item.primaryAxis.end + 2}px`;
	} else {
		value = `${zone.start + (zone.end - zone.start) / 2 - DRAG_BAR_SIZE / 2}px`;
	}
	if (axis === 'x') {
		bar.style.left = value;
	} else {
		bar.style.top = value;
	}
}

function calculateReorder(
	dragState: DragState,
	zone: SortableDropZone
): ReorderOperation | undefined {
	const itemId = dragState.id;
	if (zone.afterId || zone.beforeId) {
		const targetId = zone.afterId ?? zone.beforeId;
		const targetOffset = zone.afterId ? 1 : 0;

		if (targetId !== itemId) {
			const fromIndex = dragState.itemBounds.findIndex((item) => item.id === itemId);
			let toIndex =
				dragState.itemBounds.findIndex((item) => item.id === zone.afterId) + targetOffset;
			if (toIndex === -1) {
				toIndex = 0;
			}
			if (toIndex > fromIndex) {
				toIndex -= 1;
			}

			return { id: itemId, fromIndex, toIndex };
		}
	}
}

function createDragBar(appendTo: HTMLDivElement, axis: Axis, itemBounds: ItemBounds[]) {
	const bar = document.createElement('div');
	bar.className = `absolute bg-red-600 rounded-sm pointer-events-none ${
		axis === 'x' ? 'w-[3px]' : 'h-[3px]'
	}`;
	const dragBarSize = itemBounds.reduce(
		(value, bounds) => Math.max(value, bounds.secondaryAxis.size),
		0
	);
	const dragBarStart = itemBounds.reduce(
		(value, bounds) => Math.min(value, bounds.secondaryAxis.start),
		Infinity
	);
	if (axis === 'x') {
		bar.style.top = `${dragBarStart}px`;
		bar.style.height = `${dragBarSize}px`;
	} else {
		bar.style.left = `${dragBarStart}px`;
		bar.style.width = `${dragBarSize}px`;
	}
	appendTo.appendChild(bar);
	return bar;
}

function calculateDropZones(itemBounds: ItemBounds[], scrollArea: ScrollArea) {
	const zones: SortableDropZone[] = [
		{
			afterId: undefined,
			beforeId: itemBounds[0]?.id,
			start: 0,
			end: itemBounds[0].primaryAxis.start + itemBounds[0].primaryAxis.size / 2
		}
	];
	for (let i = 0; i < itemBounds.length; i++) {
		const current = itemBounds[i];

		const next = itemBounds[i + 1];
		if (next) {
			zones.push({
				afterId: current.id,
				beforeId: next.id,
				start: current.primaryAxis.start + current.primaryAxis.size / 2,
				end: next.primaryAxis.start + next.primaryAxis.size / 2
			});
		}
	}
	const lastItem = itemBounds[itemBounds.length - 1];
	zones.push({
		afterId: lastItem.id,
		beforeId: undefined,
		start: lastItem.primaryAxis.start + lastItem.primaryAxis.size / 2,
		end: scrollArea.size
	});
	return zones;
}

function calculateAllItemBounds(
	items: Map<string, HTMLElement>,
	scrollArea: ScrollArea,
	axis: Axis
) {
	const itemBounds = Array.from(items.entries()).map(([id, el]) => {
		return calculateItemBounds(scrollArea, el, id, axis);
	});
	itemBounds.sort((a, b) => a.primaryAxis.start - b.primaryAxis.start);
	return itemBounds;
}

function calculateItemBounds(
	scrollArea: ScrollArea,
	el: HTMLElement,
	id: string,
	axis: Axis
): ItemBounds {
	const rect = getRelativeRect(scrollArea.rect, el.getBoundingClientRect());
	const xAxis = {
		start: rect.left + scrollArea.element.scrollLeft,
		end: rect.right + scrollArea.element.scrollLeft,
		size: rect.width
	};
	const yAxis = {
		start: rect.top + scrollArea.element.scrollTop,
		end: rect.bottom + scrollArea.element.scrollTop,
		size: rect.height
	};
	return {
		id,
		primaryAxis: axis === 'x' ? xAxis : yAxis,
		secondaryAxis: axis === 'x' ? yAxis : xAxis
	};
}

function getScrollArea(childElement: HTMLElement, axis: Axis): ScrollArea {
	const element = findScrollParent(childElement, axis);
	const rect = element.getBoundingClientRect();
	return {
		element,
		rect,
		size: axis === 'x' ? element.scrollWidth : element.scrollHeight
	};
}

function findScrollParent(element: HTMLElement, axis: Axis) {
	const rect = element.getBoundingClientRect();
	if (axis === 'x' && element.scrollWidth > rect.width) {
		const styles = window.getComputedStyle(element);
		if (styles.overflowX !== 'visible') {
			return element;
		}
	} else if (axis === 'y' && element.scrollHeight > rect.height) {
		const styles = window.getComputedStyle(element);
		if (styles.overflowY !== 'visible') {
			return element;
		}
	}

	if (!element.parentElement) {
		return document.body;
	}
	return findScrollParent(element.parentElement, axis);
}

function getRelativeRect(parent: DOMRect, child: DOMRect): DOMRect {
	return new DOMRect(child.x - parent.x, child.y - parent.y, child.width, child.height);
}

function createDragCanvas(appendTo: Node) {
	const el = document.createElement('div');
	el.className = 'absolute inset-0 z-[999] pointer-events-none';
	appendTo.appendChild(el);
	return el;
}

type SortableDropZone = {
	afterId: string | undefined;
	beforeId: string | undefined;
	start: number;
	end: number;
};

type DropZoneHandlers = {
	onDrop: (zone: SortableDropZone) => void;
	onDragOver(zone: SortableDropZone): void;
};
function createDropZones(
	appendTo: Node,
	zones: SortableDropZone[],
	axis: Axis,
	handlers: DropZoneHandlers,
	debug: boolean
) {
	for (const zone of zones) {
		createDropZone(appendTo, zone, axis, handlers, debug);
	}
}

function createDropZone(
	appendTo: Node,
	zone: SortableDropZone,
	axis: Axis,
	handlers: DropZoneHandlers,
	debug: boolean
) {
	const el = document.createElement('div');
	el.className = 'absolute z-[999] pointer-events-auto';
	if (debug) {
		el.className += ` bg-red-400/40 ${
			axis === 'x' ? 'border-r' : 'border-b'
		} last:border-none border-black`;
	}
	if (axis === 'x') {
		el.style.top = '0';
		el.style.height = '100%';
		el.style.left = `${zone.start}px`;
		el.style.width = `${zone.end - zone.start}px`;
	} else {
		el.style.top = `${zone.start}px`;
		el.style.height = `${zone.end - zone.start}px`;
		el.style.left = '0';
		el.style.width = '100%';
	}

	el.addEventListener('dragover', (evt) => {
		evt.preventDefault();
		if (evt.dataTransfer) {
			evt.dataTransfer.dropEffect = 'move';
		}

		handlers.onDragOver(zone);
	});
	el.addEventListener('drop', () => {
		handlers.onDrop(zone);
	});

	appendTo.appendChild(el);
	return el;
}

function findDropZoneUnderCursor(
	zones: SortableDropZone[],
	scrollArea: ScrollArea,
	axis: Axis,
	cursorPos: { x: number; y: number }
) {
	const position =
		axis === 'x'
			? cursorPos.x - scrollArea.rect.x + scrollArea.element.scrollLeft
			: cursorPos.y - scrollArea.rect.y + scrollArea.element.scrollTop;

	return zones.find((z) => position >= z.start && position < z.end);
}
