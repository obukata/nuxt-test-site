<template>
	<div>
		<div class="container mx-auto px-4">
			<div class="lower-mainvisual flex justify-center items-center mt-8">
				<div class="lower-mainvisual-body flex justify-between items-center w-full">
					<div class="lower-mainvisual-detail w-2/5">
						<h1 class="lower-mainvisual-title font-bold text-blue-400 text-4xl">「その人らしさ」を大切に</h1>
						<p class="mt-4 font-bold">
							その人らしい働き方、その人らしい遊び方。<br>
							一緒に探しませんか。
						</p>
					</div>
					<div class="lower-mainvisual-image w-3/5 h-full"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		bodyAttrs: {
			id: 'page--page1'
		}
	}
}

</script>

<style>
.lower-mainvisual-image {
	background: url(/assets/images/page1/img-mainvisual.jpg) no-repeat center center;
	background-size: 100% auto;
}
</style>

