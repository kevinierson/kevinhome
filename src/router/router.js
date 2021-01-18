import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import("@/views/home/Home.vue")
const Login = () => import("@/views/admin/login/Login.vue")

Vue.use(Router)

const routes = [
	{
		path: '/',
		redirect: '/home' //重定向到主页
	},
	{
		path: '/home',
		component: Home
	},
	{
		path: '/tologin',
		component: Login
	}
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
	linkActiveClass: 'active'
})

//多次点击跳转同一个路由是不被允许的，解决办法如下：
//push 
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}