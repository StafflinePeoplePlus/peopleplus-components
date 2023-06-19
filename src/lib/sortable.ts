import type { Action } from 'svelte/action';
import { type Readable, readable } from 'svelte/store';

const DRAG_BAR_SIZE = 3;
const DEBUG = false;

export type SortableAxis = 'x' | 'y';
export type SortableOpts = {
	enabled?: Readable<boolean>;
	axis?: SortableAxis;
	onReorder?(ids: string[]): void;
};
type AxisBound = { start: number; end: number; size: number };
export function createSortable(opts: SortableOpts = {}) {
	const enabled = opts.enabled ?? readable(true);
	const axis = opts.axis ?? 'y';
	const items: Map<string, HTMLElement> = new Map();
	let dragState:
		| {
				el: HTMLElement;
				id: string;
				bar: HTMLElement;
				zones: SortableDropZone[];
				itemBounds: { id: string; primaryAxis: AxisBound; secondaryAxis: AxisBound }[];
				dragCanvas: HTMLElement;
				createdDropZones: boolean;
		  }
		| undefined = undefined;

	const cancelDrag = () => {
		if (dragState) {
			dragState.el.style.opacity = '1';
			dragState.dragCanvas.remove();
			dragState = undefined;
		}
	};
	const onDrop = (zone: SortableDropZone) => {
		if (dragState) {
			const itemId = dragState.id;
			if (zone.afterId || zone.beforeId) {
				const targetId = zone.afterId ?? zone.beforeId;
				const targetOffset = zone.afterId ? 1 : 0;

				if (targetId !== itemId) {
					let insertAtIndex = 0;
					const order = dragState.itemBounds
						.filter((item) => item.id !== itemId)
						.map((item, index) => {
							if (item.id === zone.afterId) {
								insertAtIndex = index + targetOffset;
							}
							return item.id;
						});
					order.splice(insertAtIndex, 0, itemId);
					opts.onReorder?.(order);
				}
			}

			cancelDrag();
		}
	};
	const onDragOver = (zone: SortableDropZone) => {
		if (dragState) {
			let value;
			if (zone.afterId === undefined) {
				const item = dragState.itemBounds[0];
				value = `${item.primaryAxis.start - DRAG_BAR_SIZE - 2}px`;
			} else if (zone.beforeId === undefined) {
				const item = dragState.itemBounds[dragState.itemBounds.length - 1];
				value = `${item.primaryAxis.end + 2}px`;
			} else {
				value = `${zone.start + (zone.end - zone.start) / 2 - DRAG_BAR_SIZE / 2}px`;
			}
			if (axis === 'x') {
				dragState.bar.style.left = value;
			} else {
				dragState.bar.style.top = value;
			}
		}
	};

	return {
		item: toggleableAction(enabled, (el: HTMLElement, id: string) => {
			el.setAttribute('draggable', 'true');

			items.set(id, el);
			const destroy = destroySequence(
				() => {
					el.removeAttribute('draggable');
					items.delete(id);
				},
				addEventListener(el, 'dragstart', () => {
					el.style.opacity = '0.5';

					const scrollArea = getScrollArea(el, axis);
					const itemBounds = Array.from(items.entries()).map(([id, el]) => {
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
					});
					itemBounds.sort((a, b) => a.primaryAxis.start - b.primaryAxis.start);

					const zones: SortableDropZone[] = [
						{
							afterId: undefined,
							beforeId: itemBounds[0]?.id,
							start: 0,
							end: itemBounds[0].primaryAxis.start + itemBounds[0].primaryAxis.size / 2
						}
					];
					let dragBarSize = 0;
					let dragBarStart = Infinity;
					for (let i = 0; i < itemBounds.length; i++) {
						const current = itemBounds[i];
						dragBarSize = Math.max(dragBarSize, current.secondaryAxis.size);
						dragBarStart = Math.min(dragBarStart, current.secondaryAxis.start);

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

					const dragCanvas = createDragCanvas(scrollArea.element);
					dragState = {
						id,
						el,
						bar: createDragBar(dragCanvas, axis),
						zones,
						itemBounds,
						dragCanvas,
						createdDropZones: false
					};

					const thisItem = itemBounds.find((i) => i.id === id);
					if (axis === 'x') {
						if (thisItem) {
							dragState.bar.style.left = `${thisItem.primaryAxis.start - DRAG_BAR_SIZE - 2}px`;
						}
						dragState.bar.style.top = `${dragBarStart}px`;
						dragState.bar.style.height = `${dragBarSize}px`;
					} else {
						if (thisItem) {
							dragState.bar.style.top = `${thisItem.primaryAxis.start - DRAG_BAR_SIZE - 2}px`;
						}
						dragState.bar.style.left = `${dragBarStart}px`;
						dragState.bar.style.width = `${dragBarSize}px`;
					}
				}),
				addEventListener(el, 'dragend', () => {
					cancelDrag();
				}),
				addEventListener(el, 'drag', () => {
					if (dragState) {
						if (!dragState.createdDropZones) {
							createDropZones(
								dragState.dragCanvas,
								dragState.zones,
								axis,
								{ onDrop, onDragOver },
								DEBUG
							);
							dragState.createdDropZones = true;
						}
					}
				})
			);

			return {
				destroy
			};
		})
	};
}

function getScrollArea(childElement: HTMLElement, axis: SortableAxis) {
	const element = findScrollParent(childElement, axis);
	const rect = element.getBoundingClientRect();
	return {
		element,
		rect,
		size: axis === 'x' ? element.scrollWidth : element.scrollHeight
	};
}

function findScrollParent(element: HTMLElement, axis: SortableAxis) {
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

function createDragBar(appendTo: Node, axis: SortableAxis) {
	const el = document.createElement('div');
	el.className = `absolute bg-red-600 rounded-sm pointer-events-none ${
		axis === 'x' ? 'w-[3px]' : 'h-[3px]'
	}`;

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
	axis: SortableAxis,
	handlers: DropZoneHandlers,
	debug: boolean
) {
	const els: HTMLElement[] = [];
	for (const zone of zones) {
		els.push(createDropZone(appendTo, zone, axis, handlers, debug));
	}
}

function createDropZone(
	appendTo: Node,
	zone: SortableDropZone,
	axis: SortableAxis,
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

function addEventListener<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
	el: E,
	type: K,
	listener: (evt: HTMLElementEventMap[K]) => unknown,
	options?: boolean | AddEventListenerOptions
) {
	el.addEventListener(type, listener, options);
	return () => {
		el.removeEventListener(type, listener, options);
	};
}

function destroySequence(...fns: ((...args: unknown[]) => unknown)[]) {
	return () => {
		for (const fn of fns) {
			fn();
		}
	};
}

function toggleableAction<A extends Action>(enabled: Readable<boolean>, action: A): A {
	return ((node, params) => {
		let activeAction: ReturnType<A> | undefined = undefined;
		const unsub = enabled.subscribe((enabled) => {
			if (enabled) {
				if (!activeAction) {
					activeAction = action(node, params) as ReturnType<A>;
				}
			} else {
				if (activeAction) {
					activeAction.destroy?.();
					activeAction = undefined;
				}
			}
		});
		return {
			update(newParams) {
				params = newParams;
				if (activeAction) {
					activeAction?.update?.(newParams);
				}
			},
			destroy() {
				unsub();
				if (activeAction) {
					activeAction?.destroy?.();
				}
			}
		};
	}) as A;
}
