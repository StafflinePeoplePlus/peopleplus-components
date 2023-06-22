import { BROWSER } from 'esm-env';
import { readable } from 'svelte/store';

export function createMediaQuery(query: string, defaultValue = false) {
	return readable(defaultValue, (set) => {
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
}

/**
 * Matches screens with min-width: 640px
 */
export const screenSm = createMediaQuery('(min-width: 640px)');
/**
 * Matches screens with min-width: 768px
 */
export const screenMd = createMediaQuery('(min-width: 768px)');
/**
 * Matches screens with min-width: 1024px
 */
export const screenLg = createMediaQuery('(min-width: 1024px)');
/**
 * Matches screens with min-width: 1280px
 */
export const screenXl = createMediaQuery('(min-width: 1280px)');
/**
 * Matches screens with min-width: 1536px
 */
export const screen2xl = createMediaQuery('(min-width: 1536px)');

export const prefersDarkMode = createMediaQuery('(prefers-color-scheme: dark)');
