<template>
	<el-container>
		<el-header style="padding: 0;">
			<Header />
		</el-header>
		<el-container>
			<el-aside width="220px">
				<!-- 侧边栏 -->
				<Aside />
			</el-aside>
			<el-main>
				<!-- 中间内容 -->
				<router-view />
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import Header from "@/components/common/admin/Header.vue"
	import Aside from "@/components/common/admin/Aside.vue"
	import Content from "@/components/content/admin/AdminContent.vue"
	export default {
		name: 'AdminMain',
		components: {
			Header,
			Aside,
			Content
		},
		data() {
			return {

			}
		}
	}
</script>

<style>
	.el-aside {
		height: 100%;
		background-color: #D3DCE6;
		color: #333;
		line-height: 200px;
	}

	.el-main {
		background-color: #E9EEF3;
		color: #333;
	}

	.is-vertical {
		width: 100%;
		height: 100%;
	}
</style>
