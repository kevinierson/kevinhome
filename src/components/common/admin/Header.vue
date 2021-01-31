<template>
	<div class="header">
		<div class="leftHeader">
			<img src="../../../assets/img/headericon/mylogo.png" width="48px">
		</div>
		<div class="rightHeader">
			<h2>kevinHome后台管理系统</h2>
			<div @click="Logout()" class="logout">
				<i class="el-icon-switch-button">退出</i>
			</div>
		</div>
	</div>
</template>

<script>
	import {logout} from "@/network/admin.js"
	export default {
		name: 'Header',
		methods:{
			Logout(){
				logout().then(res => {
					if(res.status){
						this.$store.commit('logout')
						this.$router.replace('/tologin')
					}
				})
			}
		}
	}
</script>

<style>
	.header {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
	}

	.leftHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 13.7em;
		background-color: #ccccd6;
	}

	.rightHeader {
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #9abeaf;
		flex: 1;
	}

	.rightHeader h2 {
		font-family: "华文行楷";
		color: #e2e1e4;
		font-size: 38px;
	}
	.rightHeader .logout {
		position: absolute;
		right: 2em;
		color: white;
		width: 4em;
		height: 2em;
		border-radius: 5px;
		text-align: center;
		line-height: 30px;
		border: 1px solid rgba(0,0,0,.2);
		transition: 0.2s;
	}
	.rightHeader .logout:hover{
		background-color: #b0d8c7;
		box-shadow: 0px 0px 5px 1px rgba(0,0,0,.1);
	}
</style>
