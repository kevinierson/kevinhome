<template>
	<div class="loginPanel">
		<div class="dowebok">
			<!-- 登录 -->
			<div class="form sign-in">
				<h2>管理员登录入口</h2>
				<label>
					<span>邮箱</span>
					<input type="email" v-model="loginForm.email" required="required" />
				</label>
				<label>
					<span>密码</span>
					<input type="password" v-model="loginForm.password" required="required" />
				</label>
				<p class="forgot-pass"><a href="javascript:">忘记密码？</a></p>
				<button type="submit" @click="toLogin('loginForm')" class="btns submit">登 录</button>
			</div>
			<div class="sub-cont">
				<div class="img">
					<div class="img__text m--up">
						<h2>还未注册？</h2>
						<p>注册只是摆设，没什么用</p>
					</div>
					<div class="img__text m--in">
						<h2>已有帐号？</h2>
						<p>有帐号就快去登录！</p>
					</div>
					<div class="img__btn">
						<span class="m--up">注 册</span>
						<span class="m--in">登 录</span>
					</div>
				</div>
				<!-- 注册 -->
				<div class="form sign-up">
					<h2>立即注册</h2>
					<label>
						<span>用户名</span>
						<input type="text" />
					</label>
					<label>
						<span>邮箱</span>
						<input type="email" />
					</label>
					<label>
						<span>密码</span>
						<input type="password" />
					</label>
					<button type="button" class="btns submit">注 册</button>
					<!-- <button type="button" class="btns fb-btn">使用 <span>facebook</span> 帐号注册</button> -->
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import {
		login
	} from "@/network/admin.js"
	export default {
		name: "Login",
		data() {
			return {
				responseResult: [],
				loginForm: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			toLogin() {
				let patterm = /[\w_]+@[a-zA-Z0-9]+(\.[A-Za-z]{2,4}){1,2}/
				let _email = this.loginForm.email
				let _password = this.loginForm.password
				
				if (_email.length == 0 ){
					this.$message.error("请输入邮箱")
				}else if(!patterm.test(_email)){
					this.$message.error("邮箱格式错误")
				}else if(_password.length == 0){
					this.$message.error("请输入密码")
				}else {
					login(this.loginForm).then(res => {
						if (res.status) {
							this.$store.commit('Login', this.loginForm)
							var _path = this.$route.query.redirect
							this.$router.replace({
								path: _path === '/' || _path === undefined ? '/admin' : _path
							})
						} else {
							this.$message.error(res.msg)
						}
					})
				}
			}
		},
		mounted() {
			document.querySelector('.img__btn').addEventListener('click', function() {
				document.querySelector('.dowebok').classList.toggle('s--signup')
			})
		}
	}
</script>

<style>
	*,
	*:before,
	*:after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	.loginPanel {
		width: 100%;
		height: 100%;
		background-image: url(../../assets/img/main/login/bj.jpg);
		background-position: center;
		background-size: cover;
	}

	input,
	button {
		border: none;
		outline: none;
		background: none;
		font-family: 'Open Sans', Helvetica, Arial, sans-serif;
	}

	.tip {
		font-size: 20px;
		margin: 40px auto 50px;
		text-align: center;
	}

	.dowebok {
		overflow: hidden;
		position: absolute;
		left: 50%;
		top: 50%;
		width: 900px;
		height: 550px;
		margin: -300px 0 0 -450px;
		background: #fff;
	}

	.form {
		position: relative;
		width: 640px;
		height: 100%;
		transition: -webkit-transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
		padding: 50px 30px 0;
		background: #fdfdfd;
	}

	.sub-cont {
		overflow: hidden;
		position: absolute;
		left: 640px;
		top: 0;
		width: 900px;
		height: 100%;
		padding-left: 260px;
		background: #fff;
		transition: -webkit-transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
	}

	.dowebok.s--signup .sub-cont {
		-webkit-transform: translate3d(-640px, 0, 0);
		transform: translate3d(-640px, 0, 0);
	}

	.btns {
		display: block;
		margin: 0 auto;
		width: 260px;
		height: 36px;
		border-radius: 30px;
		color: #fff;
		font-size: 15px;
		cursor: pointer;
	}

	.img {
		overflow: hidden;
		z-index: 2;
		position: absolute;
		left: 0;
		top: 0;
		width: 260px;
		height: 100%;
		padding-top: 360px;
	}

	.img:before {
		content: '';
		position: absolute;
		right: 0;
		top: 0;
		width: 900px;
		height: 100%;
		background-image: url(../../assets/img/main/login/bg.jpg);
		background-size: cover;
		transition: -webkit-transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
	}

	.img:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
	}

	.dowebok.s--signup .img:before {
		-webkit-transform: translate3d(640px, 0, 0);
		transform: translate3d(640px, 0, 0);
	}

	.img__text {
		z-index: 2;
		position: absolute;
		left: 0;
		top: 50px;
		width: 100%;
		padding: 0 20px;
		text-align: center;
		color: #fff;
		transition: -webkit-transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out;
		transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;
	}

	.img__text h2 {
		margin-bottom: 10px;
		font-weight: normal;
	}

	.img__text p {
		font-size: 14px;
		line-height: 1.5;
	}

	.dowebok.s--signup .img__text.m--up {
		-webkit-transform: translateX(520px);
		transform: translateX(520px);
	}

	.img__text.m--in {
		-webkit-transform: translateX(-520px);
		transform: translateX(-520px);
	}

	.dowebok.s--signup .img__text.m--in {
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}

	.img__btn {
		overflow: hidden;
		z-index: 2;
		position: relative;
		width: 100px;
		height: 36px;
		margin: 0 auto;
		background: transparent;
		color: #fff;
		text-transform: uppercase;
		font-size: 15px;
		cursor: pointer;
	}

	.img__btn:after {
		content: '';
		z-index: 2;
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		border: 2px solid #fff;
		border-radius: 30px;
	}

	.img__btn span {
		position: absolute;
		left: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		transition: -webkit-transform 0.6s;
		transition: transform 0.6s;
		transition: transform 0.6s, -webkit-transform 0.6s;
	}

	.img__btn span.m--in {
		-webkit-transform: translateY(-72px);
		transform: translateY(-72px);
	}

	.dowebok.s--signup .img__btn span.m--in {
		-webkit-transform: translateY(0);
		transform: translateY(0);
	}

	.dowebok.s--signup .img__btn span.m--up {
		-webkit-transform: translateY(72px);
		transform: translateY(72px);
	}

	.sign-up h2,
	.sign-in h2 {
		margin-top: 2em;
		width: 100%;
		font-size: 26px;
		text-align: center;
		color: #000000;
	}

	.dowebok label {
		display: block;
		width: 260px;
		margin: 25px auto 0;
		text-align: center;
	}

	.dowebok label span {
		font-size: 13px;
		color: #909399;
		text-transform: uppercase;
	}

	.dowebok input {
		display: block;
		width: 100%;
		margin-top: 5px;
		padding-bottom: 5px;
		font-size: 16px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
		text-align: center;
	}

	.forgot-pass {
		margin-top: 15px;
		text-align: center;
		font-size: 12px;
		color: #cfcfcf;
	}

	.forgot-pass a {
		color: #767676;
		text-decoration: none;
	}

	.forgot-pass a:hover {
		color: #d4af7a;
	}

	.submit {
		margin-top: 40px;
		margin-bottom: 20px;
		background: #d4af7a;
		text-transform: uppercase;
	}

	.submit:hover {
		background: #d4af7a;
		color: #000000;
	}

	.sign-in {
		transition-timing-function: ease-out;
	}

	.dowebok.s--signup .sign-in {
		transition-timing-function: ease-in-out;
		transition-duration: 0.6s;
		-webkit-transform: translate3d(640px, 0, 0);
		transform: translate3d(640px, 0, 0);
	}

	.sign-up {
		-webkit-transform: translate3d(-900px, 0, 0);
		transform: translate3d(-900px, 0, 0);
	}

	.dowebok.s--signup .sign-up {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
	}
</style>
