import type { Action, ActionReturn } from 'svelte/action';
import type { Readable } from 'svelte/store';

export function addEventListener<E extends HTMLElement, K extends keyof HTMLElementEventMap>(
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
	Attributes extends Record<string, unknown> = Record<never, unknown>
>(
	enabled: Readable<boolean>,
	action: Action<Element, Parameter, Attributes>
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
			}
		};
	};
}
