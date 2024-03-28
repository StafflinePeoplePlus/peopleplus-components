import { writable, type Readable, readable, derived } from 'svelte/store';
import { destroySequence, addEventListener, toggleableAction } from './actions';
import type { Action } from 'svelte/action';

export type ReorderGridOperation = {
	/**
	 * ID of the item being reordered
	 */
	id: string;
	/**
	 * ID of the item that the dragged item is being dropped on to.
	 */
	ontoId: string;
};

export type SortableGridOpts = {
	/**
	 * Svelte store containing a boolean to enable/disable the sortable. Defaults to enabled.
	 */
	enabled?: Readable<boolean>;
	/**
	 * Called when the order changes. It is expected that you update your list order when this
	 * happens as this will not be done for you.
	 * @param operation Object describing the operation that needs to be applied to your list
	 */
	onReorder?(operation: ReorderGridOperation): void;
};

export type SortableGrid = Readable<{ enabled: boolean; dragging: boolean }> & {
	item: Action<HTMLElement, string>;
	handle: Action<HTMLElement, string>;
	target: Action<HTMLElement, string>;
	image: Action<HTMLElement, string>;
};
export function createSortableGrid(opts: SortableGridOpts = {}): SortableGrid {
	const enabled = opts.enabled ?? readable(true);
	const dragging = writable(false);
	let draggingId: string | undefined = undefined;
	const dragImages = new Map<string, WeakRef<HTMLElement>>();

	return {
		...derived([enabled, dragging], ([enabled, dragging]) => ({
			enabled,
			dragging,
		})),
		item: toggleableAction<HTMLElement, string>(enabled, (el, id) => {
			el.setAttribute('draggable', 'true');

			let level = -1;
			const destroy = destroySequence(
				() => {
					el.removeAttribute('draggable');
					el.style.removeProperty('opacity');
				},
				addEventListener(el, 'dragstart', (evt) => {
					// Allow nested sortables to take precedence over their parents
					evt.stopPropagation();
					el.style.opacity = '0.5';
					draggingId = id;
					dragging.set(true);
				}),
				addEventListener(el, 'dragend', () => {
					el.style.removeProperty('opacity');
					draggingId = undefined;
					dragging.set(false);
				}),
				addEventListener(el, 'dragover', (evt) => {
					if (draggingId && draggingId !== id) {
						evt.preventDefault();
					}
				}),
				addEventListener(el, 'dragenter', () => {
					if (draggingId && draggingId != id) {
						level++;
						if (level === 0) {
							el.style.opacity = '0.5';
						}
					}
				}),
				addEventListener(el, 'dragleave', () => {
					if (draggingId && draggingId != id) {
						level--;
						if (level === -1) {
							el.style.removeProperty('opacity');
						}
					}
				}),
				addEventListener(el, 'drop', () => {
					if (draggingId) {
						level = -1;
						el.style.removeProperty('opacity');
						opts.onReorder?.({
							id: draggingId,
							ontoId: id,
						});
					}
				}),
			);

			return {
				destroy,
			};
		}),
		handle: toggleableAction<HTMLElement, string>(enabled, (el, id) => {
			el.setAttribute('draggable', 'true');

			const destroy = destroySequence(
				() => {
					el.removeAttribute('draggable');
					delete el.dataset.dragging;
				},
				addEventListener(el, 'dragstart', (evt) => {
					// Allow nested sortables to take precedence over their parents
					evt.stopPropagation();
					el.dataset.dragging = 'true';
					draggingId = id;
					dragging.set(true);

					const dragImage = dragImages.get(id)?.deref();
					if (dragImage) {
						const imageRect = dragImage.getBoundingClientRect();
						evt.dataTransfer?.setDragImage(
							dragImage,
							evt.clientX - imageRect.x,
							evt.clientY - imageRect.y,
						);
						// Ensure any changes to the drag image element are applied after the drag
						// image is set
						requestAnimationFrame(() => {
							dragImage.dataset.dragging = 'true';
						});
					}
				}),
				addEventListener(el, 'dragend', () => {
					delete el.dataset.dragging;
					draggingId = undefined;
					dragging.set(false);
					const dragImage = dragImages.get(id)?.deref();
					if (dragImage) {
						delete dragImage.dataset.dragging;
					}
				}),
			);

			return {
				destroy,
			};
		}),
		target: toggleableAction<HTMLElement, string>(enabled, (el, id) => {
			let level = -1;
			const destroy = destroySequence(
				() => {
					delete el.dataset.draggingOver;
				},
				addEventListener(el, 'dragover', (evt) => {
					if (draggingId && draggingId !== id) {
						evt.preventDefault();
					}
				}),
				addEventListener(el, 'dragenter', () => {
					if (draggingId && draggingId != id) {
						level++;
						if (level === 0) {
							el.dataset.draggingOver = 'true';
						}
					}
				}),
				addEventListener(el, 'dragleave', () => {
					if (draggingId && draggingId != id) {
						level--;
						if (level === -1) {
							delete el.dataset.draggingOver;
						}
					}
				}),
				addEventListener(el, 'drop', () => {
					if (draggingId) {
						level = -1;
						delete el.dataset.draggingOver;
						opts.onReorder?.({
							id: draggingId,
							ontoId: id,
						});
					}
				}),
			);

			return {
				destroy,
			};
		}),
		image: toggleableAction<HTMLElement, string>(enabled, (el, id) => {
			dragImages.set(id, new WeakRef(el));
			return {
				destroy() {
					dragImages.delete(id);
				},
			};
		}),
	};
}

export function reorderGrid<T>(
	list: T[],
	idAccessor: (item: T) => string,
	operation: ReorderGridOperation,
): T[] {
	const fromIndex = list.findIndex((item) => operation.id === idAccessor(item));
	const toIndex = list.findIndex((item) => operation.ontoId === idAccessor(item));
	if (fromIndex > -1) {
		const item = list[fromIndex];
		list.splice(fromIndex, 1);
		list.splice(toIndex, 0, item);
	}
	return list;
}
