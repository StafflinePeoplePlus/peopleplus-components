import type { Action, ActionReturn } from 'svelte/action';
import type { Readable } from 'svelte/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UseAction<P = any> = Action<HTMLElement, P> | [Action<HTMLElement, P>, P];
export type UseActions = UseAction[];

export function actions(node: HTMLElement, actions: UseActions) {
	const instances = new Map<Action<unknown, unknown>, ActionReturn<unknown>>();

	for (const useAction of actions) {
		const [action, params] = Array.isArray(useAction) ? useAction : [useAction, undefined];
		if (instances.has(action)) {
			throw new Error('Cannot use the same action more than once');
		}

		const instance = action(node, params);
		if (instance) {
			instances.set(action, instance);
		}
	}

	return {
		update(actions: UseActions) {
			const handledActions = new Set<Action<unknown, unknown>>();
			for (const useAction of actions) {
				const [action, params] = Array.isArray(useAction) ? useAction : [useAction, undefined];
				const instance = instances.get(action);
				if (instance) {
					instance.update?.(params);
				} else {
					const instance = action(node, params);
					if (instance) {
						instances.set(action, instance);
					}
				}
				handledActions.add(action);
			}

			for (const [action, instance] of instances) {
				if (!handledActions.has(action)) {
					instances.delete(action);
					instance?.destroy?.();
				}
			}
		},

		destroy() {
			for (const returnValue of instances.values()) {
				returnValue.destroy?.();
			}
			instances.clear();
		},
	};
}

export function combineActions(useActions: UseActions) {
	return (element: HTMLElement) => {
		const { destroy } = actions(element, useActions);
		return { destroy };
	};
}

export function use<Element>(action: Action<Element, undefined>): UseAction;
export function use<Element>(action: Action<Element, void>): UseAction;
export function use<Element, Parameters>(
	action: Action<Element, Parameters>,
	params: Parameters,
): UseAction;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function use(action: Action<any, any>, params?: any): UseAction {
	return params ? [action, params] : action;
}

export function addEventListener<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
	el: E,
	type: K,
	listener: (evt: HTMLElementEventMap[K]) => unknown,
	options?: boolean | AddEventListenerOptions,
) {
	el.addEventListener(type, listener, options);
	return () => {
		el.removeEventListener(type, listener, options);
	};
}

export function destroySequence(...fns: ((...args: unknown[]) => unknown)[]) {
	return () => {
		for (const fn of fns) {
			fn();
		}
	};
}

export function toggleableAction<
	Element = HTMLElement,
	Parameter = unknown,
	Attributes extends Record<string, unknown> = Record<never, unknown>,
>(
	enabled: Readable<boolean>,
	action: Action<Element, Parameter, Attributes>,
): Action<Element, Parameter, Attributes> {
	return (node: Element, params) => {
		let activeAction: void | ActionReturn<Parameter, Attributes> = undefined;
		const unsub = enabled.subscribe((enabled) => {
			if (enabled) {
				if (!activeAction) {
					activeAction = action(node, params);
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
			},
		};
	};
}
