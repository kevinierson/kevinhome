<template>
	<div>
		<div class="HD-container">
			<img src="../../../assets/img/headericon/mylogo.png" width="42px">
			<div class="left-nav">
				<router-link to="/home" class="nav-item">首页</router-link>
				<router-link to="/home/about" class="nav-item">关于</router-link>
				<router-link to="/home/help" class="nav-item">帮助</router-link>
				<router-link to="/home/footback" class="nav-item">反馈</router-link>
			</div>
			<div class="right-nav">
				<router-link class="loginbtn" target="_blank" to="/tologin">登录</router-link>
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
		box-shadow: 0px 0px 8px 0px rgba(0,0,0,.5) ;
	}

	.HD-container>img {
		margin-left: 50px;
	}

	.left-nav {
		margin-left: 3em;
		height: 50px;
		display: flex;
	}

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
	}

	.left-nav .nav-item::before {
		position: absolute;
		content: '';
		left: 0;
		bottom: 0px;
		width: 1px;
		height: 30%;
		background-color: #000000;
		transition: 0.3s;
	}

	.left-nav .nav-item:hover:before {
		height: 100%;
	}

	.left-nav .nav-item::after {
		position: absolute;
		content: '';
		right: 0;
		bottom: 0;
		width: 1px;
		height: 30%;
		background-color: #000000;
		transition: 0.3s;
	}

	.left-nav .nav-item:hover:after {
		height: 100%;
	}

	.left-nav .nav-item:hover {
		background-color: #f9f9f9;
		font-weight: bold;
	}

	.right-nav {
		position: absolute;
		right: 0;
		width: 10em;
		height: 100%;
		display: flex;
		align-items: center;
	}

	.right-nav .loginbtn {
		text-decoration: none;
		background-color: #ffffff;
		width: 5em;
		height: 2.2em;
		border: 0;
		text-align: center;
		line-height: 30px;
		border-radius: 5px;
		border: 2px solid #a2a2a2;
		transition: 0.2s;
		color: #000000;
	}

	.right-nav .loginbtn:hover {
		background-color: #f9f9f9;
	}
</style>
