import type { Config } from "tailwindcss";
import * as flowbite from "flowbite-react/tailwind";

/** @type { import('tailwindcss').Config} */

const config: Config = {
	darkMode: 'class',
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		flowbite.content(),
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				primary: {
					light: '#084B83',
					dark: '#00D4FF',
				},
				secondary: {
					light: '#684500',
					dark: '#F6D11D',
				},
				gnce: {
					DEFAULT: "#511a38",
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('tailwind-scrollbar'),
		flowbite.plugin(),
	],
};
export default config;
