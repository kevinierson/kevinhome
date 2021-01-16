<template>
	<div>
		<div class="timeline-container">
			<div class="card-container">
				<div class="card-box">
					<ul id="pic" class="version-box">
						<li v-for="(jdk, index) in jdks" class="version-item" :key="index">
							<div class="version-desc">
								<h2>{{jdk.version}}</h2>
								<h3>{{jdk.version}}</h3>
								<p>{{jdk.pubdate + " " + jdk.codename}}</p>
								<p>{{jdk.depict}}</p>
								<a target="_blank" class="detail" :href="jdk.url">详细介绍>></a>
							</div>
							<div class="card-list-container">
								<ul class="normal-card-list">
									<li v-for="(tech, index) in techs" class="hover-action" :key="index">
										<a target="_blank" :href="tech.href">
											<el-image v-if="tech.imgname != null" style="width: 120px; height: 88px" :src="require('../../../assets/img/main/jdkimg/'+ tech.imgname +'.jpg')"
											 fit="cover"></el-image>
											<div class="desc-container">
												<h3>{{tech.name}}</h3>
												<div class="divider"></div>
												<p>{{tech.depict}}</p>
											</div>
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="line-container"></div>
			<div class="content-switch"></div>
		</div>
	</div>
</template>

<script>
	import {getJdksinfo, getTechsinfo} from "@/network/home.js"
	export default {
		name: 'MainPanel',
		components: {

		},
		data() {
			return {
				jdks:[],
				techs:[]
			}
		},
		created() {
			getJdksinfo().then(res => {
				this.jdks = res;//请求jdk信息
			})
		}
	}
</script>

<style>
	.timeline-container {
		width: 100%;
		background-image: url(../../../assets/img/main/bg.jpg);
		background-position: center;
		background-size: cover;
	}

	.version-box {
		display: flex;
		display: -webkit-box;
		overflow-x: scroll;
		overflow-y: hidden;
	}

	.version-box .version-item {
		padding: 20px;
		display: flex;
		justify-content: flex-start;
		flex-wrap: nowrap;
		position: relative;
	}

	.version-item .version-desc {
		position: relative;
		padding: 25px 15px;
		box-shadow: 0 15px 45px rgba(0, 0, 0, .1);
		background-color: rgba(182, 73, 0, 0.8);
		width: 265px;
		height: 315px;
		line-height: 25px;
		color: #fff;
		user-select: none;
		/* 不能划选文字 */
	}

	.version-item .version-desc h2 {
		position: absolute;
		top: 20px;
		left: 8px;
		font-size: 4em;
		font-weight: 800;
		z-index: 1;
		opacity: 0.1;
		transform: 0.5;
	}

	.version-item .version-desc h3 {
		position: relative;
		font-size: 1.5em;
		z-index: 2;
		transform: 0.5s;
	}

	.version-item .version-desc p {
		position: relative;
		z-index: 2;
		color: #fff;
		transform: 0.5s;
		margin-top: 0.3em;
	}

	.version-desc a {
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

	.version-desc a:hover {
		background-color: rgba(235, 94, 0, 1.0);
	}

	.card-list-container {
		border-left: 1px solid rgba(255, 255, 255, 0.6);
		background-color: rgba(0, 0, 0, 0.4);
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
		background-color: #13150e;
		width: 310px;
		height: 90px;
		position: relative;
		margin: 3px 12px 12px;
		-ms-writing-mode: lr-tb;
		writing-mode: horizontal-tb;
		transition: background .3s;
		cursor: pointer;
	}

	.card-list-container .hover-action .desc-container {
		position: absolute;
		width: 190px;
		display: inline-block;
		height: 100%;
		color: rgba(255,255,255);
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
	
	.card-list-container .hover-action .desc-container h3{
		text-align: center;
	}
	
	.card-list-container .hover-action .desc-container p{
		padding: 4px;
		font-size: 13px;
		text-align: left;
	}
	

	
	.card-list-container .hover-action .desc-container .divider{
		text-align: center;
		width: 100%;
		border-top: 1px solid rgba(236, 236, 236, 0.5);
	}
	
</style>
