<template>
	<div class="page-wrap">
		<header class="page-header">
			<nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
				<div class="flex items-center flex-shrink-0 text-white mr-6">
					<nuxt-link to="/">
						<span class="font-semibold text-xl tracking-tight">Nuxt Test Site</span>
					</nuxt-link>
				</div>
				<div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div class="text-sm lg:flex-grow">
						<nuxt-link to="/page1/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Page1</nuxt-link>
						<nuxt-link to="/page2/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Page2</nuxt-link>
						<nuxt-link to="/page3/" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">Page3</nuxt-link>
					</div>
				</div>
			</nav>
		</header>

		<div id="luxy" class="page-luxy">
			<nuxt />

			<footer class="page-footer">
				<div class="footer-body">
					<small class="footer-copyright">&copy; Nuxt Test Site</small>
				</div>
			</footer>
		</div>

	</div>
</template>

<style>

</style>
