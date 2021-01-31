<template>
	<div>
		<div class="cardDesc">
			<div class="DescContainer">
				<img src="../../../../assets/img/main/book.png" width="38px">
				<h2>文章区</h2>
			</div>
		</div>
		<div class="card-preview">
			<ul class="card-list">
				<a :href="article.href" target="_blank" class="card" v-for="article in articles">
					<div class="card-top">
						<el-image class="cardImg" :src="article.cover"
						 fit="cover">
						 </el-image>
					</div>
					<div class="card-bottom" :title="article.depict">
						<h3>{{article.title}}</h3>
						<p>{{article.depict}}</p>
					</div>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>
	import {getArticleByCateId} from "@/network/home.js"
	
	export default {
		name: "CardPreview",
		data() {
			return {
				articles:[]
			}
		},
		created() {
			getArticleByCateId(1).then(res => {
				this.articles = res;
			})
		}
	}
</script>

<style>
	.cardDesc{
		position: relative;
		background-color: #fff8f2;
		color: #000000;
		font-family: "华文楷体";
		width: 100%;
		height: 4em;
	}
	.DescContainer{
		position: absolute;
		display: flex;
		align-items: center;
		left: 2em;
		bottom: 0;
	}
	
	.card-preview {
		position: relative;
		width: 100%;
		background-color: #fff8f2;
	}

	.card-preview .card-list {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		flex-wrap: wrap;
		padding: 1em;
		padding-top: 0.2em;
	}

	.card-preview .card-list .card {
		position: relative;
		width: 18em;
		height: 20em;
		margin: 0.8em;
		margin-top: 0;
		cursor: pointer;
		flex: 1;
		border-radius: 10px;
		transition: 0.2s;
		box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, .1);
		overflow: hidden;
	}
	.card-preview .card-list .cardImg{
		transition: 0.3s;
		width: 100%; 
		height: 100%;
		border-radius:10px 10px 0 0;
	}
	
	.card-preview .card-list .card:hover .cardImg{
		transform: scale(1.12);
	}
	
	.card-preview .card-list .card:hover{
		box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .3);
	}
	
	.card-preview .card-list .card-top {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 55%;
	}

	.card-preview .card-list .card-bottom {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		position: absolute;
		padding: 0.6em;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 45%;
		background-color: #ffffff;
		border-radius: 0 0 10px 10px;
	}

	.card-preview .card-list .card-bottom h3 {
		color: #000000;
	}

	.card-preview .card-list .card-bottom p {
		line-height: 19px;
		/* 文字溢出部分消失显示省略号 */
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
		margin-top: 0.5em;
		color: #959595;
		font-size: 14px;
	}
</style>
