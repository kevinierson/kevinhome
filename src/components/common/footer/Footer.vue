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
							<a target="_blank" :href="url" v-for="(url, name) in links.link1">{{name}}</a>
						</div>
						<div class="link-item item2">
							<a target="_blank" :href="url" v-for="(url, name) in links.link2">{{name}}</a>
						</div>
						<div class="link-item item3">
							<a target="_blank" :href="url" v-for="(url, name) in links.link3">{{name}}</a>
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
					<p>&copy;2021-01 · Design & Development by Kevin.</p>
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

					<div class="k-icon github-icon">
						<a href="https://github.com/kevinierson" target="_blank">
							<img src="@/assets/img/footericon/github.png">
							<p>GitHub</p>
						</a>
					</div>
					<div class="k-icon qq-icon">
						<a href="javascript:void">
							<img src="@/assets/img/footericon/qq.png">
							<p>QQ</p>
						</a>
					</div>
					<div class="k-icon wx-icon">
						<a href="javascript:void" slot="reference">
							<img src="@/assets/img/footericon/wx.png">
							<p>微信</p>
						</a>
					</div>
					<div class="k-icon bilibli-icon" >
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
				links: {
					link1: {
						"简书": "https://www.jianshu.com/",
						"牛客网": "https://www.nowcoder.com/",
						"语雀网": "https://www.yuque.com/dashboard",
						"微信读书": "https://weread.qq.com/",
						"CSDN社区": "https://www.csdn.net/"
					},
					link2: {
						"掘金": "https://juejin.cn/",
						"力扣网": "https://leetcode-cn.com/",
						"全历史": "https://www.allhistory.com/",
						"开源软件": "https://gitee.com/explore",
						"中国知网": "https://www.cnki.net/"
					},
					link3: {
						"万花筒": "https://wht.im/",
						"外刊杂志": "https://magazinelib.com/",
						"scrimba": "https://scrimba.com/",
						"腾讯体育": "https://sports.qq.com/nba/",
						"天猫商城": "https://www.tmall.com/"
					}
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
		font-size: 15px;
	}

	.grid-content a {
		color: #c8c3c3;
		text-decoration: none;
	}

	.grid-content a:hover {
		color: #f07c82;
	}

	/* ----左部---- */
	.grid-left a {margin-top: 0.8em;}
	
	.grid-left .item1 {margin-right: 2em;}
	.grid-left .item3 {margin-left: 2em;}
	
	.grid-left .my-links {
		display: flex;
		justify-content: center;
	}

	.grid-left .link-item {
		display: flex;
		flex-direction: column;
	}


	/* ------ 中部 ------ */

	.grid-center>p {
		color: #c8c3c3;
		margin-top: 0.6em;
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
		padding: 2em;
	}

	.grid-right>.k-icon {
		flex: 1;
	}
	
	.wx-icon{
		position: relative;
	}
	.wx-icon::before{
		content: '';
		position: absolute;
		top: -133px;
		left: -25px;
		width: 135px;
		height: 135px;
		opacity: 0;
	}
	.wx-icon:hover:before{
		opacity: 1;
		background-image: url(../../../assets/img/footericon/wxcode.png);
		background-position: center;
		background-size: contain;
		animation: fadeInDown; 
		animation-duration: 1s;
	}
	.qq-icon{
		position: relative;
	}
	.qq-icon::before{
		content: '';
		position: absolute;
		top: -133px;
		left: -15px;
		width: 135px;
		height: 135px;
		opacity: 0;
	}
	.qq-icon:hover:before{
		opacity: 1;
		background-image: url(../../../assets/img/footericon/qqcode.png);
		background-position: center;
		background-size: contain;
		animation: fadeInDown;
		animation-duration: 1s;
	}
</style>
