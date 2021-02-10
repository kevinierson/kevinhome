<template>
	<div class="detailBG">
		<el-card class="detailContent">
			<div>
				<span style="font-size: 28px"><strong>{{detail.title}}</strong></span>
				<el-divider content-position="left">{{detail.createtime}}</el-divider>
				<div class="markdown-body">
					<div v-html="detail.detail_content_html"></div>
				</div>
			</div>
		</el-card>
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
				detail: {}
			}
		},
		created() {
			getDetailByCId(this.$route.params.id).then(res => {
				this.detail = res
			})
		},
		mounted() {
			$('img').hover(function() {
				
			})
		}
	}
</script>

<style>
	@import url("../../../assets/css/markdown.css");

	.detailBG {
		width: 100%;
		height: 100%;
		background-image: url(../../../assets/img/main/detailBG.jpg);
		background-position: center;
		background-size: cover;
		background-repeat:no-repeat; 
		background-attachment:fixed
	}

	.detailContent {
		text-align: left;
		width: 990px;
		margin: 0 auto 0 auto;
		padding: 0.5em 0em;
		color: #000000;
		background-color: rgba(243, 243, 243, 0.88);
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
	 .el-divider--horizontal{
		background-color: #505050;
	}
</style>
