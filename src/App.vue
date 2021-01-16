<template>
	<div id="app">
		<el-container>
			<!-- 头部 -->
			<el-header class="header">
				<Header />
				<el-backtop>
					<div style="box-shadow: 0 0 6px rgba(0,0,0, .12);text-align: center;border-radius: 50%;">
						👆
					</div>
				</el-backtop>
			</el-header>

			<!-- 内容 -->
			<el-main style="padding: 0px;" class="main">
				<MainPanel />
				<div style="height: 10em;"></div>
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
	import Header from "@/components/common/header/Header.vue"
	import MainPanel from "@/components/content/home/MainPanel.vue"
	import Footer from "@/components/common/footer/Footer.vue"

	export default {
		name: 'App',
		components: {
			Footer,
			Header,
			MainPanel,
			
		}
	}
</script>

<style>
	@import url("assets/css/reset.css");

	/* 头部 */
	.header {
		width: 100%;
		display: flex;
		align-items: center;
		box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, .3);
	}
	
	.main{
		background-color: #7e7e7e;
	}
	
	/* 尾部 */
	.footer {
		width: 100%;
		background-color: rgba(0, 0, 0, .6);
		min-height: 300px;
	}
</style>
