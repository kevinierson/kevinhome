<template>
	<div id="app">
		<el-container>
			<!-- 头部 -->
			<el-header style="padding: 0;margin: 0;height: 100%;width: 100%;" class="header">
				<Header />
			</el-header>

			<!-- 内容 -->
			<el-main style="padding: 0px;" class="main">
				<router-view ></router-view>
			</el-main>

			<!-- 底部 -->
			<el-footer class="footer">
				<Footer />
				<el-backtop>
					<div style="box-shadow: 0 0 6px rgba(0,0,0, .12);text-align: center;border-radius: 50%;">
						👆
					</div>
				</el-backtop>
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import Header from "@/components/content/header/Header.vue"
	import Footer from "@/components/content/footer/Footer.vue"

	export default {
		name: 'App',
		components: {
			Footer,
			Header,
		}
	}
</script>

<style>
	@import url("assets/css/reset.css");

	/* 尾部 */
	.footer {
		background-color: rgba(0, 0, 0, .6);
		min-height: 300px;
	}
</style>
