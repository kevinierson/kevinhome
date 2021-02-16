<template>
	<div class="carouselPanel">
		<div class="carousel-left">
			<div class="mytask">
				<div class="taskHead">
					<h1 class="title">TASK</h1>
				</div>
				<div class="taskFooter"></div>
			</div>
		</div>
		<div class="carousel-center">
			<div class="carousel-container">
				<el-carousel height="310px" :interval="6000">
					<el-carousel-item v-for="(img, index) in imgs" :key="index">
						<el-image draggable="false" style="width: 100%;height: 100%;" :src="img" fit="cover">
						</el-image>
					</el-carousel-item>
				</el-carousel>
			</div>
		</div>
		<div class="carousel-right">
			<div class="mytask">
				<div class="taskHead">
					<h1 class="title">TASK</h1>
				</div>
				<div class="taskFooter"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import img1 from "@/assets/img/main/carousel/xm3.jpg"
	import img2 from "@/assets/img/main/carousel/xm2.jpeg"
	import img3 from "@/assets/img/main/carousel/xm.jpeg"
	import img4 from "@/assets/img/main/carousel/dx.jpg"
	import img5 from "@/assets/img/main/login/bg.jpg"

	export default {
		name: 'Carousel',
		data() {
			return {
				imgs: [img1, img2, img3, img4, img5]
			}
		}
	}
</script>

<style>
	.carouselPanel {
		position: relative;
		display: flex;
		width: 100%;
		height: 21.5em;
		background-color: #3a3a3a;
	}

	.carousel-left {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.carousel-left .mytask {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 95%;
		height: 95%;
	}

	.mytask .taskHead {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 5em;
		background: repeating-linear-gradient(30deg, #7c90ff, #7c90ff 25px, #ffcb63 0, #ffcb63 50px);
		border-radius: 25px 25px 0 0;
		cursor: default;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		color: #fff;
	}
	
	.mytask .taskHead:hover {
		color: #000000;
	}

	.mytask .taskFooter {
		width: 100%;
		flex: 1;
		background-color: #9f9f9f;
		border-radius: 0 0 25px 25px;
	}


	.carousel-center {
		position: relative;
		width: 50em;
	}

	.carousel-center .carousel-container {
		padding: 1em;
		width: 100%;
		height: 100%;
		z-index: 2;
		background-color: #3a3a3a;
	}


	.carousel-right {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.carousel-right .mytask {
		display: flex;
		flex-direction: column;
		position: relative;
		width: 95%;
		height: 95%;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
</style>
