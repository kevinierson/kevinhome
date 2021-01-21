import Vue from 'vue'
import Router from 'vue-router'

/* 前台模块 */
const Home = () => import("@/views/home/Home.vue")
const Main = () => import("@/components/content/main/Main.vue")
const Login = () => import("@/views/admin/Login.vue")
const About = () => import("@/components/content/main/about/About.vue")
const Detail = () => import("@/components/content/main/Detail.vue")

/* 后台模块 */
const AdminHome = () => import("@/views/admin/home/AdminHome.vue")
const AdminContent = () => import("@/components/content/admin/AdminContent.vue")
const AdminTechs = () => import("@/components/content/admin/AdminTechs.vue")
const AdminChapter = () => import("@/components/content/admin/AdminChapter.vue")
const AdminEditor = () => import("@/components/content/admin/ArticleEditor.vue")

Vue.use(Router)

const routes = [{
		path: '/',
		redirect: '/home' //重定向到主页
	},
	{
		path: '/home',
		component: Home,
		children: [{
				path: '',
				component: Main
			},
			{
				path: 'about',
				component: About
			},
			{
				path: 'detail/:id',
				component: Detail
			}
		]
	},
	{
		path: '/tologin',
		component: Login
	},
	{
		path: '/admin',
		component: AdminHome,
		children: [{
				path: 'techs',
				component: AdminTechs,
				name: '技术',
				meta: {
					requireAuth: true
				}
			},
			{
				path: 'chapter/:id',
				component: AdminChapter,
				name:'篇章',
				meta: {
					requireAuth: true,
					breadNumber: 2
				}
			},
			{
				path: 'content/:id',
				component: AdminContent,
				name: '内容',
				meta: {
					requireAuth: true,
					breadNumber: 3
				}
			}, {
				path: 'editor',
				component: AdminEditor
			}
		]
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
Router.prototype.push = function push(to) {
	return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace(to) {
	return VueRouterReplace.call(this, to).catch(err => err)
}
