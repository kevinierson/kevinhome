<template>
	<div>
		<div class="videoDesc">
			<div class="VideoContainer">
				<img src="../../../../assets/img/main/video.png" width="38px">
				<h2>视频区</h2>
			</div>
		</div>
		<div class="video-preview">
			<ul class="video-list">
				<a :href="video.href" target="_blank" class="video" v-for="video in videos">
					<div class="video-top">
						<el-image style="width: 100%; height: 100%;border-radius:10px 10px 0 0;" :src="video.cover"
						 fit="cover"></el-image>
					</div>
					<div class="video-bottom" :title="video.depict">
						<h3>{{video.title}}</h3>
						<p>{{video.depict}}</p>
					</div>
				</a>
			</ul>
		</div>
	</div>
</template>

<script>
	import {getArticleByCateId} from "@/network/home.js"
	
	export default {
		name: 'VideoPreview',
		data(){
			return {
				videos:[]
			}
		},
		created() {
			getArticleByCateId(2).then(res => {
				this.videos = res
			})
		}
	}
</script>

<style>
	.videoDesc{
		position: relative;
		background-color: #f0fff7;
		color: #000000;
		font-family: "华文楷体";
		width: 100%;
		height: 4em;
	}
	.VideoContainer{
		position: absolute;
		display: flex;
		align-items: center;
		left: 2em;
		bottom: 0;
	}
	.video-preview {
		position: relative;
		width: 100%;
		background-color: #f0fff7;
	}
	
	.video-preview .video-list {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		flex-wrap: wrap;
		padding: 1em;
		padding-top: 0.2em;
	}
	
	.video-preview .video-list .video {
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
	}
	
	.video-preview .video-list .video:hover {
		transform: scale(1.01);
		box-shadow: 0 0px 10px 2px rgba(0, 0, 0, .3);
	}
	
	.video-preview .video-list .video-top {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 55%;
	}
	
	.video-preview .video-list .video-bottom {
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
	
	.video-preview .video-list .video-bottom h3 {
		color: #000000;
	}
	
	.video-preview .video-list .video-bottom p {
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
