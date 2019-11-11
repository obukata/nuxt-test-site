
export default {
	mode: 'spa',
	srcDir: 'app',
	/*
	** Headers of the page
	*/
	head: {
		title: 'Nuxt Test Site',
		titleTemplate: '%s - Nuxt Test Site',
		meta: [
			{ title: 'Nuxt Test Site' },
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:300,400,700,900&display=swap' }
		]
	},
	/*
	** Page Transition
	*/
	transition: {
		name: 'page',
		mode: 'out-in'
	},
	/*
	** Customize the progress-bar color
	*/
	loading: { color: '#fff' },
	/*
	** Global CSS
	*/
	css: [
		'~/assets/css/main.css',
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [
	],
	/*
	** Nuxt.js dev-modules
	*/
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		'@nuxtjs/tailwindcss',
	],
	/*
	** Nuxt.js modules
	*/
	modules: [
	],
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend (config, ctx) {
		}
	}
}
