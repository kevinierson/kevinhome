<template>
	<el-row class="tac">
		<el-col class="aside-col">
			<el-menu :default-active="activeIndex" class="el-menu-vertical-demo" @select="handleSelect" background-color="#545c64"
			 text-color="#fff" active-text-color="#ffd04b">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-s-home"></i>
						<span>首页</span>
					</template>
					<el-menu-item-group>
						<el-menu-item index="/admin"><i class="el-icon-data-line"></i>访问情况</el-menu-item>
					</el-menu-item-group>
				</el-submenu>
				<el-menu-item index="/admin/techs">
					<i class="el-icon-menu"></i>
					<span slot="title">技术模块管理</span>
				</el-menu-item>
				<el-menu-item index="/admin/article">
					<i class="el-icon-notebook-2"></i>
					<span slot="title">文章管理</span>
				</el-menu-item>
				<el-menu-item index="/admin/images">
					<i class="el-icon-picture-outline"></i>
					<span slot="title">图片管理</span>
				</el-menu-item>
			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		name: 'Aside',
		data() {
			return {
				activeIndex: this.$route.path
			}
		},
		methods: {
			handleSelect(key, keyPath) {
				this.$router.push(key);
			}
		},
	}
</script>

<style>
	.tac{
		height: 100%;
	}
	.aside-col{
		height: 100%;
	}
	.el-menu-vertical-demo{
		height: 100%;
	}
</style>
