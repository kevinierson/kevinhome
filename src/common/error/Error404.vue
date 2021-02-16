<template>
	<div>
		<div style="height:auto; min-height:100%; ">
			<div style="text-align: center; width:800px; margin-left: -400px; position:absolute; top: 30%; left:50%;">
				<h1 style="margin:0; font-size:150px; line-height:150px; font-weight:bold;color: #4d4d4d;">404</h1>
				<h2 style="margin-top:15px;font-size: 30px;color: #4d4d4d;">Not Found</h2>
				<p style="color: #4d4d4d;line-height: 1.5em;">The resource requested could not be found on this server!</p>
				<div class="button">
					<h2> 
					<a class="errorLink" href="http://www.kevinstudy.cn" title="kevinstudy" style="">返回首页</a>
					</h2>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Error404'
	}
</script>

<style>
	.errorLink{
		color: #4d4d4d;
		text-decoration: none;
	}
	.errorLink:hover{
		color: #ffaa00;
	}
</style>
