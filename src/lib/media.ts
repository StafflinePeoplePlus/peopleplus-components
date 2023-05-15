import { BROWSER } from 'esm-env';
import { readonly, writable } from 'svelte/store';

export function createMediaQuery(query: string, defaultValue = false) {
	const value = writable(defaultValue, (set) => {
		if (!BROWSER) {
			return;
		}

		const onChange = ({ matches }: MediaQueryListEvent) => {
			set(matches);
		};
		const matcher = window.matchMedia(query);
		set(matcher.matches);
		matcher.addEventListener('change', onChange);
		return () => matcher.removeEventListener('change', onChange);
	});
	return readonly(value);
}

export const md = createMediaQuery('(min-width: 768px)');
export const prefersDarkMode = createMediaQuery('(prefers-color-scheme: dark)');
