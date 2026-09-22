/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				apple: {
					blue: '#0071E3',
					'blue-dark': '#2997FF',
					gray: {
						50: '#FAFAFA',
						100: '#F5F5F7',
						200: '#E8E8ED',
						300: '#D2D2D7',
						400: '#86868B',
						500: '#6E6E73',
						600: '#424245',
						700: '#333336',
						800: '#1D1D1F',
						900: '#0a0a0a',
						950: '#000000',
					},
				},
			},
			fontFamily: {
				sans: ['"Inter Variable"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
			},
			fontSize: {
				// Fluid display sizes for the poster hero
				'display': ['clamp(2rem, 9vw, 5.5rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
				'display-sm': ['clamp(1.25rem, 4.5vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
			},
			animation: {
				'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
				'pulse-dot': 'pulseDot 2s ease-in-out infinite',
			},
			keyframes: {
				fadeUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				pulseDot: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' },
				},
			},
		},
	},
	plugins: [],
}
