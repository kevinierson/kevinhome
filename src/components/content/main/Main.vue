<template>
	<div>
		<div class="timeline-container">
			<div class="card-container">
				<div class="card-box">
					<ul id="pic" class="chapter-box" ondragstart="return false" @mousedown="moveBox">
						<!-- 篇章 -->
						<li v-for="(chapter, index) in chapters" class="chapter-item" :key="index">
							<div class="chapter-desc">
								<h2>{{chapter.title}}</h2>
								<h3>{{chapter.title}}</h3>
								<p>{{chapter.pubdate + " " + chapter.codename}}</p>
								<p>{{chapter.depict}}</p>
								<a target="_blank" class="detail">详细介绍>></a>
							</div>
							<div class="card-list-container">
								<ul class="normal-card-list">
									<li v-for="(content, index) in chapter.contentList" class="hover-action" :key="index">
										<!-- 内容 -->
										<router-link target="_blank" :to="'/home/detail/' + content.cid">
											<el-image v-if="content.img_url != null" style="width: 120px; height: 88px" :src="content.img_url" fit="cover"></el-image>
											<div class="desc-container" :title="content.c_depict">
												<h3>{{content.name}}</h3>
												<div class="divider"></div>
												<p>{{content.c_depict}}</p>
											</div>
										</router-link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<!-- 选择内容 -->
			<div class="content-switch">
				<div class="tech-all"></div>
				<div class="tech-container">
					<ul class="tech-list">
						<li class="tech-item" :class="{selected: isEquel(index)}" @click="changeActive(index, tech.id)" v-for="(tech, index) in techs">
							<el-image class="tech-image" :src="tech.techimg_url" fit="contain"></el-image>
							<span class="tech-name">{{tech.techname}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div>
			<Carousel />
			<!-- 卡片列表1 -->
			<CardPreview />
			<VideoPreview />
		</div>
	</div>
</template>

<script>
	import CardPreview from "./childComps/CardPreview.vue"
	import VideoPreview from "./childComps/VideoPreview.vue"
	import Carousel from "./childComps/Carousel.vue"

	import {
		getJavaInfo,
		getTechsInfo,
		getContentById
	} from "@/network/home.js"
	export default {
		name: 'Home',
		components: {
			CardPreview,
			VideoPreview,
			Carousel
		},
		data() {
			return {
				techs: [],
				chapters: [],
				leftMin: 0,
				isSelected: false,
				currentIndex: 0
			}
		},
		methods: {
			isEquel(index) {
				return this.currentIndex == index
			},
			changeActive(index, id) {
				$('.chapter-box').css('left', "0px")
				this.currentIndex = index;
				getContentById(id).then(res => {
					this.chapters = res
				})
			},
			/* 实现可拖拽 */
			moveBox(e) {
				let that = this
				let moveBoxObj = document.getElementsByClassName('card-box')[0] //获取父容器
				let moveLineObj = document.getElementsByClassName('chapter-box')[0] //获取子容器
				let moveBoxObjMaxWidth = moveBoxObj.clientWidth // 得到点击时该chapter-box所在大容器的宽
				let moveLineObjOffsetLeft = moveLineObj.offsetLeft // 得到点击时该chapter-box的左边距
				let moveStartX = e.clientX
				let leftMax = 0 // 左边距最大值
				that.leftMin = -100 - moveLineObj.clientWidth + moveBoxObjMaxWidth // 左边距最小值

				document.addEventListener('mousemove', moveFun)
				document.addEventListener('mouseup', stopFun)

				function moveFun(e) {
					e.preventDefault()
					let mouseMoveDistance = e.clientX - moveStartX // 鼠标滑动距离（正则是往右；负则是往左）
					let styleLeft = moveLineObjOffsetLeft + mouseMoveDistance // 左边距 = 线条初始（左边距）位置 + 鼠标滑动的距离
					if (moveLineObj.clientWidth >= 780) {
						if (styleLeft <= that.leftMin) {
							styleLeft = that.leftMin
						} else if (styleLeft > leftMax) {
							styleLeft = leftMax
						}
						moveLineObj.style.left = styleLeft + 'px' // 赋值拖动的线的左边距离
					}
				}
				// 取消计算绑定
				function stopFun(e) {
					document.removeEventListener('mousemove', moveFun) // 取消监听事件，鼠标开始移动
					document.removeEventListener('mouseup', stopFun) // 取消监听事件，鼠标停止移动
				}
			}
		},
		created() {
			getJavaInfo().then(res => {
					this.chapters = res; //首次请求获取Java信息
				}),
				getTechsInfo().then(res => {
					this.techs = res //获取技术种类信息
				})
		},
		mounted() {

		}
	}
</script>

<style>
	/* 内容选择 */
	.content-switch {
		position: relative;
		z-index: 10;
		width: 100%;
		padding: 10px;
		background: #3a3a3a;
		min-height: 84px;
		box-shadow: 0px 0px 8px 2px #797979;
		overflow-x: hidden;
		color: #ececec;
	}

	.tech-container {
		width: 100%;
		height: 100%;
	}

	.tech-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		width: 100%;
		height: 100%;
		margin-left: 1%;
	}

	.tech-item {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 6.5em;
		height: 5em;
		margin: 0.3em;
		border-radius: 8px;
		cursor: pointer;
		opacity: 0.6;
		transition: 0.3s;
		user-select: none;
	}

	.tech-item:hover,
	.tech-list .tech-item.selected {
		opacity: 1;
		background-color: rgba(243, 243, 243, 0.3);
	}


	/*----- 横向卡片---- */
	.timeline-container {
		position: relative;
		width: 100%;
	}

	.card-container {
		width: 100%;
		height: 23.5em;
		background-image: url(../../../assets/img/main/bg.jpg);
		background-position: center;
		background-size: cover;
	}


	.card-box {
		position: relative;
		width: 100%;
		height: 100%;
		overflow-y: hidden;
	}

	.chapter-box {
		position: absolute;
		display: -webkit-box;
		left: 0;
		cursor: move;
	}

	.detail {
		cursor: pointer;
	}

	.chapter-box .chapter-item {
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: nowrap;
		position: relative;
	}

	.chapter-item .chapter-desc {
		position: relative;
		padding: 25px 15px;
		box-shadow: 0 15px 45px rgba(0, 0, 0, .1);
		background-color: rgba(182, 73, 0, 0.8);
		width: 275px;
		height: 320px;
		line-height: 23px;
		color: #fff;
		user-select: none;
		/* 不能划选文字 */
	}

	.chapter-item .chapter-desc h2 {
		position: absolute;
		top: 20px;
		left: 8px;
		font-size: 4em;
		font-weight: 800;
		z-index: 1;
		opacity: 0.1;
		transform: 0.5;
	}

	.chapter-item .chapter-desc h3 {
		position: relative;
		font-size: 1.5em;
		z-index: 2;
		transform: 0.5s;
	}

	.chapter-item .chapter-desc p {
		position: relative;
		z-index: 2;
		color: #fff;
		transform: 0.5s;
		margin-top: 0.3em;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 6;
		-webkit-box-orient: vertical;
	}

	.chapter-desc a {
		text-decoration: none;
		position: absolute;
		left: 0;
		bottom: 20px;
		margin-left: 25%;
		color: #fff;
		width: 8em;
		height: 2.5em;
		text-align: center;
		line-height: 35px;
		background-color: rgba(182, 73, 0, 0.8);
		border: 2px solid rgba(255, 255, 255, 0.5);
		border-radius: 5px;
		transition: 0.3s;
	}

	.chapter-desc a:hover {
		background-color: rgba(235, 94, 0, 1.0);
	}

	.card-list-container {
		background-color: rgba(0, 0, 0, 0.3);
		position: relative;
		height: 315px;
	}

	.card-list-container .normal-card-list {
		display: inline-flex;
		height: 100%;
		flex-direction: row;
		flex-wrap: wrap;
		width: auto;
		-ms-writing-mode: tb-lr;
		writing-mode: vertical-lr;
		cursor: default;
	}

	.card-list-container .hover-action {
		display: inline-block;
		width: 315px;
		height: 90px;
		position: relative;
		margin: 3px 12px 12px;
		-ms-writing-mode: lr-tb;
		writing-mode: horizontal-tb;
		transition: background .3s;
		cursor: pointer;
		box-shadow: 0 0 5px 1px rgba(196, 222, 227, 0.4);
	}

	.card-list-container .hover-action .desc-container {
		position: absolute;
		width: 195px;
		display: inline-block;
		height: 100%;
		color: rgba(255, 255, 255);
	}

	.card-list-container .hover-action .desc-container::before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background-color: #b4b4b4;
		opacity: 0;
		z-index: 0;
		transition: 0.2s;
	}

	.card-list-container .hover-action .desc-container:hover:before {
		opacity: 0.2;
	}

	.card-list-container .hover-action .desc-container h3 {
		text-align: center;
	}

	.card-list-container .hover-action .desc-container p {
		padding: 2px 2px 0px 4px;
		font-size: 13px;
		text-align: left;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}



	.card-list-container .hover-action .desc-container .divider {
		text-align: center;
		width: 100%;
		border-top: 1px solid rgba(236, 236, 236, 0.5);
	}
	
	
</style>
