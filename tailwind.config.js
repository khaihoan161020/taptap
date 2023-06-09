/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-bg': 'linear-gradient(80deg, rgba(18,18,18,1) 70%, rgba(7,0,45,1) 100%)'
            },
            colors: {
                'base-dark': '#D7DADC',
                'subText-dark': '#818384',
                'gray-dark': '#393A3A',
                'main-dark': '#1A1A1B',
                'neon': '#168900'
            },
            keyframes: {
				ripple: {
					'0%': { opacity: 0, transform: 'scale(0)' },
					'100%': { opacity: 1, transform: 'scale(2)' }
				},
			},
			animation: {
				ripple: 'ripple 0.3s linear infinite'
			}
        },
      
    },
    plugins: []
}
