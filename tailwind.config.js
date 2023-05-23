import colors from 'tailwindcss/colors';
import ppSvelteComponents from './src/lib/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: colors.red
			}
		}
	},
	plugins: [require('@tailwindcss/typography'), ppSvelteComponents()]
};
