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
		},
		keyframes: {
			slideIn: {
				'0%': { transform: 'translateX(-30%)' },
				'100%': { transform: 'translateX(0)' }
			}
		},
		animation: {
			slideIn: 'slideIn 0.3s ease-in-out'
		}
	},
	plugins: [require('@tailwindcss/typography'), ppSvelteComponents()]
};
