/** @type {import('tailwindcss').Config} */
export default {
	daisyui: {
		themes: ['light']
	},
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')]
};
