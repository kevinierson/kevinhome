<template>
	<div class="detailBG">
		<!-- 左侧 -->
		<div class="detail_left"></div>
		<el-card class="detailContent">
			<div class="changeTheme" @click="changeTheme(dark)">
				{{themeName}}
			</div>
			<span style="font-size: 28px"><strong>{{detail.title}}</strong></span>
			<el-divider content-position="left">{{detail.createtime}}</el-divider>
			<div class=" markdown-body">
				<div class="js-toc-content" v-html="detail.detail_content_html"></div>
			</div>
			<span class="detail_end">--------------------------END--------------------------</span>
		</el-card>
		<!-- 右侧 -->
		<div class="detail_right">
		</div>
		<!-- 灯笼2 -->
		<div class="deng-box1">
			<div class="deng">
				<div class="xian">

				</div>
				<div class="deng-a">
					<div class="deng-b">
						<div class="deng-t">牛气</div>
					</div>
				</div>
				<div class="shui shui-a">
					<div class="shui-c"></div>
					<div class="shui-b"></div>
				</div>
			</div>
		</div>

		<!-- 灯笼1 -->
		<div class="deng-box">
			<div class="deng">
				<div class="xian"></div>
				<div class="deng-a">
					<div class="deng-b">
						<div class="deng-t">冲天</div>
					</div>
				</div>
				<div class="shui shui-a">
					<div class="shui-c"></div>
					<div class="shui-b"></div>
				</div>
			</div>
		</div>


	</div>
</template>

<script>
	import {
		getDetailByCId
	} from "@/network/home.js"
	export default {
		name: 'Detail',
		data() {
			return {
				detail: {},
				dark: false,
				themeName: '深色主题'
			}
		},
		methods:{
			changeTheme(theme){
				let myStyle = document.documentElement.style
				this.dark = !this.dark
				if(theme){
					this.themeName = '深色主题'
					myStyle.setProperty('--color-link','#90ee90')
					myStyle.setProperty('--color-text','#efefef')
					myStyle.setProperty('--bgColor','rgba(71, 71, 71, 0.8)')
					myStyle.setProperty('--color-blockquote','#38f038')
					myStyle.setProperty('--color-BG-blockquote','#def1d1')
					myStyle.setProperty('--color-theme','#484135')
					myStyle.setProperty('--color-BG-themeName','#f5deb3')
				}else{
					this.themeName = '亮色主题'
					myStyle.setProperty('--color-link','#000000')
					myStyle.setProperty('--color-text','#303030')
					myStyle.setProperty('--bgColor','rgba(243, 243, 243, 0.85)')
					myStyle.setProperty('--color-blockquote','#f0834d')
					myStyle.setProperty('--color-BG-blockquote','#f0e4dc')
					myStyle.setProperty('--color-theme','#fba26f')
					myStyle.setProperty('--color-BG-themeName','#666363')
				}
			}
		},
		created() {
			getDetailByCId(this.$route.params.id).then(res => {
				this.detail = res
			});
		},
		mounted() {

		}
	}
</script>

<style>
	@import url("../../../assets/css/markdown.css");
	
	.changeTheme{
		position: absolute;
		top: 10px;
		right: 0;
		width: 5em;
		height: 1.8em;
		cursor: pointer;
		margin: 1em;
		border: 1px solid #555555;
		border-radius: 8px;
		background-color: var(--color-BG-themeName);
		color: var(--color-theme);
		font-weight: bold;
		text-align: center;
		line-height: 25px;
		user-select: none;
		transition-duration: 0.5s;
	}		
	.changeTheme:hover{
		/* box-shadow: 0 0 8px 2px rgba(255,255,255,.5); */
		box-shadow: 0 0 8px 2px rgba(140, 140, 140, 0.5);
	}
	.detailBG {
		position: relative;
		display: flex;
		width: 100%;
		height: 100%;
		background-image: url(../../../assets/img/main/detailBG.jpg);
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-attachment: fixed
	}

	.detailContent {
		position: relative;
		text-align: left;
		width: 990px;
		margin: 0 auto 0 auto;
		padding: 0.5em 0em;
		color: var(--color-text);
		background-color: var(--bgColor);
	}

	.hljs {
		position: relative;
		display: block;
		overflow-x: auto;
		padding: 1em 2em;
		background: #191727;
		color: #d6deeb;
		cursor: unset;
	}

	.hljs:hover:before {
		position: absolute;
		content: '复制';
		color: black;
		right: 1em;
		top: 0.8em;
		text-align: center;
		line-height: 1.8em;
		border-radius: 5px;
		font-size: 14px;
		width: 3.2em;
		height: 1.8em;
		background-color: #e6e6e6;
		cursor: pointer;
	}

	.el-divider--horizontal {
		background-color: #505050;
	}

	.detail_left {
		flex: 1;
	}

	.detail_right {
		position: relative;
		flex: 1;
	}

	.detail_end {
		display: flex;
		align-content: center;
		justify-content: center;
		font-weight: bold;
	}

	.deng-box {
		position: fixed;
		top: -32px;
		right: 10px;
		z-index: 999;
	}

	.deng-box1 {
		position: fixed;
		top: -32px;
		left: 0px;
		z-index: 999;
	}

	.deng ,
	.deng-box1 .deng{
		position: relative;
		width: 120px;
		height: 90px;
		margin: 50px;
		background: #d8000f;
		background: rgba(216, 0, 15, 0.8);
		border-radius: 50% 50%;
		-webkit-transform-origin: 50% -90px;
		-webkit-animation: swing 10s infinite ease-in-out;
		box-shadow: -5px 5px 50px 4px rgba(250, 108, 0, 1);
	}
	
	.deng-b ,
	.deng-a{
		width: var(--width);
		height: 90px;
		background: #d8000f;
		background: rgba(216, 0, 15, 0.1);
		margin: var(--margin);
		border-radius: 50% 50%;
		border: 2px solid #dc8f03;
	}
	
	.deng-a{
		--width: 100px;
		--margin: 12px 8px 8px 8px;
		}
	
	.deng-b{
		--width: 45px;
		--margin: -4px 8px 8px 26px;
	}

	.xian {
		position: absolute;
		top: -20px;
		left: 60px;
		width: 2px;
		height: 20px;
		background: #dc8f03;
	}

	.shui-a {
		position: relative;
		width: 5px;
		height: 20px;
		margin: -5px 0 0 59px;
		-webkit-animation: swing 4s infinite ease-in-out;
		-webkit-transform-origin: 50% -45px;
		background: #ffa500;
		border-radius: 0 0 5px 5px;
	}

	.shui-b {
		position: absolute;
		top: 14px;
		left: -2px;
		width: 10px;
		height: 10px;
		background: #dc8f03;
		border-radius: 50%;
	}

	.shui-c {
		position: absolute;
		top: 18px;
		left: -2px;
		width: 10px;
		height: 35px;
		background: #ffa500;
		border-radius: 0 0 0 5px;
	}

	.deng:before {
		position: absolute;
		top: -7px;
		left: 29px;
		height: 12px;
		width: 60px;
		content: " ";
		display: block;
		z-index: 999;
		border-radius: 5px 5px 0 0;
		border: solid 1px #dc8f03;
		background: #ffa500;
		background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
	}

	.deng:after {
		position: absolute;
		bottom: -7px;
		left: 10px;
		height: 12px;
		width: 60px;
		content: " ";
		display: block;
		margin-left: 20px;
		border-radius: 0 0 5px 5px;
		border: solid 1px #dc8f03;
		background: #ffa500;
		background: linear-gradient(to right, #dc8f03, #ffa500, #dc8f03, #ffa500, #dc8f03);
	}

	.deng-t {
		font-family: 华文行楷, Arial, Lucida Grande, Tahoma, sans-serif;
		font-size: 1.8rem;
		color: #dc8f03;
		font-weight: bold;
		line-height: 45px;
		text-align: center;
	}

	.night .deng-t,
	.night .deng-box,
	.night .deng-box1 {
		background: transparent !important;
	}

	@-moz-keyframes swing {
		0% {
			-moz-transform: rotate(-8deg)
		}

		50% {
			-moz-transform: rotate(8deg)
		}

		100% {
			-moz-transform: rotate(-8deg)
		}
	}

	@-webkit-keyframes swing {
		0% {
			-webkit-transform: rotate(-8deg)
		}

		50% {
			-webkit-transform: rotate(8deg)
		}

		100% {
			-webkit-transform: rotate(-8deg)
		}
	}
</style>
