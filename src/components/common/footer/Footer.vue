<template>
	<div class="footer-div">
		<el-row class="footer-row">
			<!-- 左部分 -->
			<el-col :span="8">
				<div class="grid-content grid-left">
					
					<el-divider content-position="center">
						<p>常用链接</p>
					</el-divider>
					<div class="my-links">
						
						<div class="link-item item1">
							<a target="_blank" :href="url" v-for="(url, name) in links1">{{name}}</a>
						</div>
						<div class="link-item item2">
							<a target="_blanke" href="">常用链接1</a>
							<a target="_blanke" href="">常用链接2</a>
							<a target="_blanke" href="">常用链接3</a>
							<a target="_blanke" href="">常用链接4</a>
							<a target="_blanke" href="">常用链接5</a>
						</div>
						<div class="link-item item3">
							<a target="_blanke" href="">常用链接1</a>
							<a target="_blanke" href="">常用链接2</a>
							<a target="_blanke" href="">常用链接3</a>
							<a target="_blanke" href="">常用链接4</a>
							<a target="_blanke" href="">常用链接5</a>
						</div>
					</div>

				</div>
			</el-col>

			<el-divider direction="vertical"></el-divider>

			<!-- 中部分 -->
			<el-col :span="8">
				<div class="grid-content grid-center">
					<div>
						<img src="@/assets/img/footericon/beian.png">
						<a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=43072102000220" style="display:inline-block;height:20px;line-height:20px;margin-left: 2px;"><img
							 src="" style="float:left;" />
							<p>湘公网安备 43072102000220号</p>
						</a>
					</div>
					<p>湘ICP备2020022354号-1</p>
					<p>本网页部分图标来自：<a target="_blank" href="https://icons8.cn"> Icons8</a></p>
					<p>&copy;2021 · Design & Development by Kevin.</p>
					<el-divider content-position="center">
						<p>友情链接</p>
					</el-divider>
					<div class="friend-link">
						<a href="http://sjltt.cn/" target="_blank">😊天宫老虎团</a>
						<a href="http://a64.cn/" target="_blank">王探长工作室😊</a>
					</div>
				</div>
			</el-col>

			<el-divider direction="vertical"></el-divider>

			<!-- 右部分 -->
			<el-col :span="8">	
				<div>
					<el-divider content-position="center">
						<p>联系方式</p>
					</el-divider>
				</div>
				<div class="grid-content grid-right">
					
					<div class="k-icon qq-icon">
						<a href="javascript:void">
							<img src="@/assets/img/footericon/qq.png" alt="">
							<p>QQ</p>
						</a>
					</div>
					<div class="k-icon github-icon">
						<a href="https://github.com/kevinierson" target="_blank">
							<img src="@/assets/img/footericon/github.png" alt="">
							<p>GitHub</p>
						</a>
					</div>
					<div class="k-icon wx-icon">
						<a href="javascript:void">
							<img src="@/assets/img/footericon/wx.png" alt="">
							<p>微信</p>
						</a>
					</div>
					<div class="k-icon bilibli-icon">
						<a href="https://www.bilibili.com/" target="_blank">
							<img src="@/assets/img/footericon/bilibili.jpg" width="46px" style="border-radius: 100%;" alt="">
							<p>bilibli</p>
						</a>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script>
	export default {
		name: 'Footer',
		data() {
			return {
				links1:{
					"牛客网":"https://www.nowcoder.com/",
					"力扣网":"https://leetcode-cn.com/",
					"语雀网":"https://www.yuque.com/dashboard",
					"微信读书":"https://weread.qq.com/",
					"CSDN社区":"https://www.csdn.net/"
				}
			}
		}
	}
</script>

<style>
	.footer-div {
		height: 100%;
	}

	.footer-row {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 0.1rem;
	}

	.grid-content a {
		color: #c8c3c3;
		text-decoration: none;
	}

	.grid-content a:hover {
		color: #f07c82;
	}

	/* ----左部---- */
	.grid-left a {
		margin-top: 0.08rem;
	}
	
	.grid-left .item1{
		margin-right: 0.2rem;
	}
	.grid-left .item3{
		margin-left: 0.2rem;
	}

	.grid-left .my-links{
		display: flex;
		justify-content: center;
	}
	
	.grid-left .link-item{
		display: flex;
		flex-direction: column;
	}
	

	/* ------ 中部 ------ */

	.grid-center>p {
		color: #c8c3c3;
		margin-top: 0.06rem;
	}

	.friend-link {
		display: flex;
		flex-wrap: wrap;
	}

	.friend-link a {
		flex: 1;
	}

	/* ----右部----- */
	
	.grid-right {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		padding: 0.2rem;
	}

	.grid-right>.k-icon {
		flex: 1;
	}
</style>
