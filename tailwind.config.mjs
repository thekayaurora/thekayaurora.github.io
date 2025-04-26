/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	 theme: {
		extend: {
			typography: {
			DEFAULT: {
			  css: {
				'--tw-prose-body': '#dce8f4',
				'--tw-prose-headings': 'colors.white',
			    '--tw-prose-lead': '#dce8f4',
				'--tw-prose-links': 'colors.white',
			    '--tw-prose-bold': 'colors.white',
		     	'--tw-prose-counters': '#dce8f4',
				'--tw-prose-bullets': '#dce8f4',
				'--tw-prose-hr': '#dce8f4',
				'--tw-prose-quotes': '#dce8f4',
				'--tw-prose-quote-borders': '#dce8f4',
				'--tw-prose-captions': '#dce8f4',
				'--tw-prose-code': 'colors.white',
			    '--tw-prose-pre-code': '#dce8f4',
				'--tw-prose-pre-bg': 'rgb(0 0 0 / 50%)',
				'--tw-prose-th-borders': '#dce8f4',
				'--tw-prose-td-borders': '#dce8f4',
			  },
			},
		  },
	   },
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}