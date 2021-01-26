<template>
	<div class="carouselPanel">
		<div class="carousel-left">
			<div class="carousel-container">
				<!-- 走马灯 -->
				 <el-carousel height="280px">
				      <el-carousel-item v-for="img in imgs" :key="item">
								<el-image
											style="width: 100%;height: 100%;"
								      :src="img"
								      fit="cover">
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
	import img1 from "@/assets/img/main/login/bg.jpg"
	import img2 from "@/assets/img/main/bg.jpg"
	export default {
		name: 'Carousel',
		data() {
			return {
				imgs:[img1, img2]
			}
		}
	}
</script>

<style>
	.carouselPanel {
		position: relative;
		display: flex;
		width: 100%;
		height: 19.5em;
	}
	
	.carousel-left{
		position: relative;
		display: flex;
		width: 50em;
	}
	
	.carousel-left .carousel-container{
		margin-left: 8rem;
		padding: 1em;
		width: 100%;
		height: 100%;
		z-index: 2;
	}
	
	.carousel-right{
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
