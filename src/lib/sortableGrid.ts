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
};
export function createSortableGrid(opts: SortableGridOpts = {}): SortableGrid {
	const enabled = opts.enabled ?? readable(true);
	const dragging = writable(false);
	let draggingId: string | undefined = undefined;

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
				addEventListener(el, 'dragstart', () => {
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
