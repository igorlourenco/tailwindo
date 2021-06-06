const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
		fontFamily: {
		  sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
		  brand: '"Racing Sans One", cursive',
		},
	},
	minWidth: {
		'0': '0',
		'1/4': '25%',
		'1/2': '50%',
		'3/4': '75%',
		'full': '100%',
	},
	colors: {
		'brand-blue-dark': '#086788',
		'brand-blue-light': '#07A0C3',
		'brand-yellow': '#f0C808',
		'brand-papaya': '#FFF1D0',
		'brand-red': '#DD1C1A'
	}
  },
  variants: {
    extend: {
		
	},
  },
  plugins: [],
}
