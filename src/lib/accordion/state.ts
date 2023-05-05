import { getContext, setContext } from 'svelte';
import { derived, get, writable, type Writable } from 'svelte/store';

const DEFAULT_ARIA_ID = 'pp-accordion';

export type AccordionOptions = { exclusive: boolean };
export type AccordionState = {
	groupId?: string;
	nextId: 0;
	expanded: string[];
	options: AccordionOptions;
};
export const stateKey = Symbol('Accordion State');

export function createAccordionGroup(id = DEFAULT_ARIA_ID, options: AccordionOptions) {
	const state = writable<AccordionState>({ groupId: id, nextId: 0, expanded: [], options });
	setContext(stateKey, state);
	return state;
}

export function createAccordion(idOverride?: string) {
	const state =
		getContext<Writable<AccordionState>>(stateKey) ??
		writable<AccordionState>({
			nextId: 0,
			expanded: [],
			options: { exclusive: false }
		});
	const currentState = get(state);
	const id = idOverride ?? `${currentState.groupId ?? 'pp-accordion'}-${currentState.nextId++}`;
	state.set(currentState);

	return {
		...derived([state], ([accordion]) => {
			return {
				id,
				expanded: accordion.expanded.includes(id),
				inGroup: accordion.groupId != null
			};
		}),
		toggle() {
			state.update((s) => {
				const index = s.expanded.findIndex((expandedId) => expandedId === id);

				if (s.options.exclusive) {
					if (index === -1) {
						s.expanded = [id];
					} else {
						s.expanded = [];
					}
				} else {
					if (index === -1) {
						s.expanded.push(id);
					} else {
						s.expanded.splice(index, 1);
					}
				}
				return s;
			});
		}
	};
}
