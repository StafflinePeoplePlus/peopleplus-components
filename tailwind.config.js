import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
import ppSvelteComponents from './src/lib/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: colors.red,
				gray: colors.zinc,
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/container-queries'),
		ppSvelteComponents(),
	],
};
