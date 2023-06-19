import type { Action } from 'svelte/action';
import { writable, type Readable, derived } from 'svelte/store';

const DRAG_BAR_HEIGHT = 3;
const DEBUG = false;

type SortableOpts = { enabled?: boolean; onReorder?(ids: string[]): void };
export function createSortable(opts: SortableOpts = {}) {
	const enabled = writable(opts.enabled ?? false);
	const items: Map<string, HTMLElement> = new Map();
	let dragState:
		| {
				el: HTMLElement;
				id: string;
				bar: HTMLElement;
				zones: SortableDropZone[];
				itemBounds: { id: string; rect: DOMRect }[];
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
			if (zone.afterId === undefined) {
				const item = dragState.itemBounds[0];
				dragState.bar.style.top = `${item.rect.top - DRAG_BAR_HEIGHT - 2}px`;
			} else if (zone.beforeId === undefined) {
				const item = dragState.itemBounds[dragState.itemBounds.length - 1];
				dragState.bar.style.top = `${item.rect.bottom + 2}px`;
			} else {
				dragState.bar.style.top = `${
					zone.start + (zone.end - zone.start) / 2 - DRAG_BAR_HEIGHT / 2
				}px`;
			}
		}
	};

	return {
		...derived(enabled, (enabled) => ({ enabled })),
		toggle(force?: boolean) {
			enabled.update((enabled) => (force === undefined ? !enabled : force));
		},
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

					const scrollParent = findScrollParent(el);
					const scrollParentRect = scrollParent.getBoundingClientRect();
					const itemBounds = Array.from(items.entries()).map(([id, el]) => {
						return {
							id,
							rect: getRelativeRect(scrollParentRect, el.getBoundingClientRect(), {
								x: 0,
								y: scrollParent.scrollTop
							})
						};
					});
					itemBounds.sort((a, b) => a.rect.top - b.rect.top);

					const zones: SortableDropZone[] = [
						{
							afterId: undefined,
							beforeId: itemBounds[0]?.id,
							start: 0,
							end: itemBounds[0].rect.top + itemBounds[0].rect.height / 2
						}
					];
					let dragBarSize = 0;
					let dragBarStart = Infinity;
					for (let i = 0; i < itemBounds.length; i++) {
						const current = itemBounds[i];
						dragBarSize = Math.max(dragBarSize, current.rect.width);
						dragBarStart = Math.min(dragBarStart, current.rect.left);

						const next = itemBounds[i + 1];
						if (next) {
							zones.push({
								afterId: current.id,
								beforeId: next.id,
								start: current.rect.top + current.rect.height / 2,
								end: next.rect.top + next.rect.height / 2
							});
						}
					}
					const lastItem = itemBounds[itemBounds.length - 1];
					zones.push({
						afterId: lastItem.id,
						beforeId: undefined,
						start: lastItem.rect.top + lastItem.rect.height / 2,
						end: scrollParent.scrollHeight
					});

					const dragCanvas = createDragCanvas(scrollParent);
					dragState = {
						id,
						el,
						bar: createDragBar(dragCanvas),
						zones,
						itemBounds,
						dragCanvas,
						createdDropZones: false
					};
					dragState.bar.style.left = `${dragBarStart}px`;
					dragState.bar.style.width = `${dragBarSize}px`;
				}),
				addEventListener(el, 'dragend', () => {
					cancelDrag();
				}),
				addEventListener(el, 'drag', () => {
					if (dragState) {
						if (!dragState.createdDropZones) {
							createDropZones(dragState.dragCanvas, dragState.zones, { onDrop, onDragOver }, DEBUG);
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

function findScrollParent(element: HTMLElement) {
	const rect = element.getBoundingClientRect();
	if (element.scrollHeight > rect.height) {
		const styles = window.getComputedStyle(element);
		if (styles.overflowY !== 'visible') {
			return element;
		}
	}

	if (!element.parentElement) {
		return document.body;
	}
	return findScrollParent(element.parentElement);
}

function getRelativeRect(
	parent: DOMRect,
	child: DOMRect,
	offset: { x: number; y: number }
): DOMRect {
	return new DOMRect(
		child.x - parent.x + offset.x,
		child.y - parent.y + offset.y,
		child.width,
		child.height
	);
}

function createDragCanvas(appendTo: Node) {
	const el = document.createElement('div');
	el.className = 'absolute inset-0 z-[999] pointer-events-none';
	appendTo.appendChild(el);
	return el;
}

function createDragBar(appendTo: Node) {
	const el = document.createElement('div');
	el.className = 'absolute h-[3px] bg-red-600 rounded-sm pointer-events-none';
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
	handlers: DropZoneHandlers,
	debug: boolean
) {
	const els: HTMLElement[] = [];
	for (const zone of zones) {
		els.push(createDropZone(appendTo, zone, handlers, debug));
	}
}

function createDropZone(
	appendTo: Node,
	zone: SortableDropZone,
	handlers: DropZoneHandlers,
	debug: boolean
) {
	const el = document.createElement('div');
	el.className = 'absolute z-[999] pointer-events-auto';
	if (debug) {
		el.className += ' bg-red-400/40 border-b last:border-none border-black';
	}
	el.style.top = `${zone.start}px`;
	el.style.left = '0';
	el.style.height = `${zone.end - zone.start}px`;
	el.style.width = '100%';

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
