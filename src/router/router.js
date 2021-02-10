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
const AdminImages = () => import("@/components/content/admin/AdminImages.vue")

const routes = [{
		path: '/',
		redirect: '/home' //重定向到主页
	},
	{
		path: '/home',
		component: Home,
		children: [{
				path: '',
				component: Main,
				meta: {
					title: '首页',
					keepAlive: true
				}
			},
			{
				path: 'detail/:id',
				component: Detail,
				meta: {
					title: '详细内容',
					keepAlive: true
				}
			}
		]
	},
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			title: '邮箱登录',
			keepAlive: true
		}
	},
	{
		path: '/admin',
		name: 'AdminHome',
		component: AdminHome,
		meta: {
			requireAuth: true,
			title: '后台管理',
			keepAlive: true
		},
		children: [{
				path: 'techs',
				component: AdminTechs,
				name: '技术',
				meta: {
					requireAuth: true,
					title: '技术管理',
					keepAlive: true
				}
			},
			{
				path: 'chapter/:id',
				component: AdminChapter,
				name: '篇章',
				meta: {
					requireAuth: true,
					keepAlive: true,
					title: '篇章管理'
				}
			},
			{
				path: 'content/:id',
				component: AdminContent,
				name: '内容',
				meta: {
					requireAuth: true,
					keepAlive: true,
					title: '内容管理'
				}
			},
			{
				path: 'detail/:id', //详情编辑
				component: AdminDetail,
				meta: {
					requireAuth: true,
					keepAlive: true,
					title: '详情管理'
				}
			},
			{
				path: 'article',
				component: AdminArticle,
				meta: {
					requireAuth: true,
					keepAlive: true,
					title: '文章管理'
				}
			},
			{
				path: 'images',
				component: AdminImages,
				meta: {
					requireAuth: true,
					keepAlive: true,
					title: '图片管理'
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
