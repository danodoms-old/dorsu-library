/** @type {import('tailwindcss').Config} */

export default {
	daisyui: {
		themes: ['light']
	},
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				//sans is the default font
				sans: ['DM Sans Variable', 'sans-serif'],
				customFont: ['DM Sans Variable', 'sans-serif']
				// Add more custom font families as needed
			}
		}
	},
	plugins: [require('daisyui')]
};
