import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

/* 前台模块 */
const Home = () => import("@/views/home/Home.vue")
const Main = () => import("@/components/content/main/Main.vue")
const Login = () => import("@/views/admin/Login.vue")
const Detail = () => import("@/components/content/main/Detail.vue")

/* 后台模块 */
const AdminHome = () => import("@/views/admin/home/AdminHome.vue")
const AdminContent = () => import("@/components/content/admin/AdminContent.vue")
const AdminTechs = () => import("@/components/content/admin/AdminTechs.vue")
const AdminChapter = () => import("@/components/content/admin/AdminChapter.vue")
const AdminDetail = () => import("@/components/content/admin/ArticleDetail.vue")
const AdminArticle = () => import("@/components/content/admin/AdminArticle.vue")

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
				path: 'detail/:id',
				component: Detail
			}
		]
	},
	{
		path: '/tologin',
		name: 'Login',
		component: Login
	},
	{
		path: '/admin',
		name: 'AdminHome',
		component: AdminHome,
		meta: {
			requireAuth: true
		},
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
					breadNumber: 2,
					requireAuth: true
				}
			},
			{
				path: 'content/:id',
				component: AdminContent,
				name: '内容',
				meta: {
					breadNumber: 3,
					requireAuth: true
				}
			}, 
			{
				path: 'detail/:id',//详情编辑
				component: AdminDetail,
				meta: {
					requireAuth: true
				}
			},
			{
				path: 'article',
				component: AdminArticle,
				meta: {
					requireAuth: true
				}
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
