/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#141A19',
				secondary: '#1A2120',
				green: '#01D093',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [],
	},
};
