<template>
	<div>
		<div class="HD-container">
			<img src="../../../assets/img/headericon/mylogo.png" width="42px">
			<div class="left-nav">
				<router-link to="/home" class="nav-item"><i class="el-icon-s-home"></i>首页</router-link>
			</div>
			<div class="right-nav">
				<router-link class="loginbtn" target="_blank" to="/login"><i class="el-icon-user-solid"></i>登录</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {

			}
		}
	}
</script>

<style>
	.left-nav .router-link-exact-active {
		font-weight: bold;
	}

	.HD-container {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		align-items: center;
		box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, .5);
	}

	.HD-container>img {
		margin-left: 6em;
	}

	/* 左侧 */
	.left-nav {
		margin-left: 7em;
		height: 50px;
		display: flex;
	}

	/* 优化 */
	.right-nav .loginbtn,
	.left-nav .nav-item {
		position: relative;
		width: 5em;
		height: 100%;
		text-align: center;
		line-height: 45px;
		text-decoration: none;
		font-size: 16px;
		margin-left: 1em;
		color: #000000;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.left-nav .nav-item::before,
	.right-nav .loginbtn::before {
		position: absolute;
		content: '';
		width: 90%;
		height: 72%;
		transition: 0.3s;
		border: 2px solid #000000;
		border-radius: 8px;
	}

	.left-nav .nav-item:hover:before,
	.right-nav .loginbtn:hover:before {
		box-shadow: 0 0 8px 2px rgba(0, 0, 0, .5);
	}

	/* 右侧 */
	.right-nav {
		position: absolute;
		right: 6em;
		width: 10em;
		height: 100%;
		display: flex;
		align-items: center;
	}
</style>
