import plugin from 'tailwindcss/plugin';

export default function () {
	return plugin(function ({ addVariant }) {
		addVariant('range-thumb', ['&::-webkit-slider-thumb', '&::-moz-range-thumb']);
	});
}
