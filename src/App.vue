<template>
	<div id="app">
		<el-container>

			<!-- 头部 -->
			<el-header>
				Header
			</el-header>

			<!-- 内容 -->
			<el-main>
				Main
			</el-main>

			<!-- 底部 -->
			<el-footer class="footer">
				<Footer />
			</el-footer>
		</el-container>
	</div>
</template>

<script>
	import {HTML5} from "@/assets/js/html5.js"
	import Footer from "@/components/common/footer/Footer.vue"
	
	export default {
		name: 'App',
		components: {
			Footer,
		}
	}
</script>

<style>
	@import url("assets/css/reset.css");

	/* 尾部 */
	.footer {
		width: 100%;
		background-color: #51565e;
		min-height: 300px;
	}
</style>
