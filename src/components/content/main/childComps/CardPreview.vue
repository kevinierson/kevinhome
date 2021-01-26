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
				<a href="#" target="_blank" class="card" v-for="i in 5">
					<div class="card-top">
						<el-image style="width: 100%; height: 100%;border-radius:10px 10px 0 0;" src="http://127.0.0.1:8081/admin/file/944b94.jpg"
						 fit="cover"></el-image>
					</div>
					<div class="card-bottom">
						<h3>区块链是什么？</h3>
						<p>区块链是一个信息技术领域的术语。从本质上讲，它是一个共享数据库，存储于其中的数据或信息，具有“不可伪造”“全程留痕”“可以追溯”“公开透明”“集体维护”等特征。</p>
					</div>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "CardPreview",
		data() {
			return {
				currentDate: new Date()
			}
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
		box-shadow: 10px 5px 10px 2px rgba(0, 0, 0, .1);
	}

	.card-preview .card-list .card:hover {
		transform: scale(1.01);
		box-shadow: 0 10px 10px 2px rgba(0, 0, 0, .1);
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
