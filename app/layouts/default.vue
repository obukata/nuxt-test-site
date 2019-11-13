<template>
	<div class="page-wrap">
		<header class="page-header absolute top-0 w-full tracking-widest z-10">
			<nav class="flex items-center justify-between flex-wrap max-w-5xl m-auto">
				<div class="flex items-center flex-shrink-0 mr-6">
					<nuxt-link to="/">
						<span class="text-2xl font-bold text-white">Front Docs</span>
					</nuxt-link>
				</div>
				<div class="text-xs font-bold">
					<ul class="inline-block">
						<li class="inline-block ml-4 text-white"><nuxt-link to="/page1/" class=" h-full w-full p-6 block">Design</nuxt-link></li>
						<li class="inline-block ml-4 text-white"><nuxt-link to="/page2/" class=" h-full w-full p-6 block">Animation</nuxt-link></li>
						<li class="inline-block ml-4 text-white"><nuxt-link to="/page3/" class=" h-full w-full p-6 block">Feature</nuxt-link></li>
					</ul>
					<div class="inline-block ml-4"><nuxt-link to="/contact/" class="bg-white h-full w-full p-6 block">Adminer</nuxt-link></div>
				</div>
			</nav>
		</header>

		<div>
			<nuxt class="page" />
		</div>

		<footer class="page-footer fixed top-0 right-0 flex items-center h-full">
			<div class="footer-body">
				<small class="footer-copyright">&copy; Nuxt Test Site</small>
			</div>
		</footer>

	</div>
</template>

<style>
html {
	font-family: 'Noto Sans JP', sans-serif;
	color: #353E47;
	font-weight: 500;
	-webkit-text-size-adjust: 100%;
	font-feature-settings: 'palt' 1;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	word-break: break-all;
}
.page-wrap {

}
.page-header {
	line-height: 2.6;
}

.footer-copyright {
	-webkit-writing-mode: vertical-rl;
	-moz-writing-mode: vertical-rl;
	-ms-writing-mode: tb-rl;
	-ms-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
}
</style>
