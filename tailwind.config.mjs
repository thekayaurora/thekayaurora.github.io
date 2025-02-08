/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	 theme: {
		extend: {
			typography: {
			DEFAULT: {
			  css: {
				'--tw-prose-invert-body': '#dce8f4',
				'--tw-prose-invert-headings': 'colors.white',
			    '--tw-prose-invert-lead': '#dce8f4',
				'--tw-prose-invert-links': 'colors.white',
			    '--tw-prose-invert-bold': 'colors.white',
		     	'--tw-prose-invert-counters': '#dce8f4',
				'--tw-prose-invert-bullets': '#dce8f4',
				'--tw-prose-invert-hr': '#dce8f4',
				'--tw-prose-invert-quotes': '#dce8f4',
				'--tw-prose-invert-quote-borders': '#dce8f4',
				'--tw-prose-invert-captions': '#dce8f4',
				'--tw-prose-invert-code': 'colors.white',
			    '--tw-prose-invert-pre-code': '#dce8f4',
				'--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
				'--tw-prose-invert-th-borders': '#dce8f4',
				'--tw-prose-invert-td-borders': '#dce8f4',
			  },
			},
		  },
	   },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}