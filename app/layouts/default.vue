<template>
	<div class="page-wrap">
		<header class="page-header">
			<nav class="flex items-center justify-between flex-wrap max-w-5xl m-auto">
				<div class="flex items-center flex-shrink-0 mr-6">
					<nuxt-link to="/">
						<span class="text-xl tracking-tight">Nuxt テストサイト</span>
					</nuxt-link>
				</div>
				<div class="text-xs font-bold">
					<ul class="inline-block">
						<li class="inline-block ml-4"><nuxt-link to="/page1/" class=" h-full w-full p-6 block">コンテンツ1</nuxt-link></li>
						<li class="inline-block ml-4"><nuxt-link to="/page2/" class=" h-full w-full p-6 block">コンテンツ2</nuxt-link></li>
						<li class="inline-block ml-4"><nuxt-link to="/page3/" class=" h-full w-full p-6 block">コンテンツ3</nuxt-link></li>
					</ul>
					<div class="inline-block ml-4"><nuxt-link to="/contact/" class="bg-blue-400 h-full w-full p-6 block text-white">お問い合わせ</nuxt-link></div>
				</div>
			</nav>
		</header>

		<div>
			<nuxt />
		</div>

		<footer class="page-footer">
			<div class="footer-body">
				<small class="footer-copyright">&copy; Nuxt Test Site</small>
			</div>
		</footer>

	</div>
</template>

<style>
html {
	font-family: 'Noto Sans JP', sans-serif;
}
</style>
