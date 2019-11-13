<template>
	<div>
		<div class="mx-auto">
			<div class="mainvisual flex justify-center items-center h-screen">
				<div class="mainvisual-body">
					<h1 class="mainvisual-title font-bold text-5xl text-white tracking-widest">
						Made Nuxt.js
					</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		bodyAttrs: {
			id: 'page--index'
		}
	}
}

</script>

<style>
.mainvisual {
	background: url(/assets/images/index/img-mainvisual.jpg) no-repeat center center;
	background-size: cover;
}
</style>
