<template>
	<div class="carouselPanel">
		<div class="carousel-left">
			
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
	}

	.carousel-left {
		position: relative;
		display: flex;
		flex: 1;
		background-color: lightyellow;
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
		box-shadow: 0 0 8px 2px rgba(0, 0, 0, .3);
		background-color: #5b5b5b;
	}


	.carousel-right {
		position: relative;
		background-color: lightcoral;
		flex: 1;
	}

	.el-carousel__item h3 {
		color: #475669;
		font-size: 18px;
		opacity: 0.75;
		line-height: 300px;
		margin: 0;
	}
</style>
