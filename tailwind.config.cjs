/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				epilogue: ['Epilogue', 'sans-serif']
			},
			colors: {
				almost_white: 'hsl(0, 0%, 98%)',
				medium_gray: 'hsl(0, 0%, 41%)',
				almost_black: 'hsl(0, 0%, 8%)'
			}
		}
	},
	plugins: []
};
