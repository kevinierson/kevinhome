import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from "./store/store.js"
import ElementUI from 'element-ui'
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {
	toAuth
} from "@/network/admin.js"
import 'highlight.js/styles/night-owl.css' //代码样式
import hljs from "highlight.js"

Vue.use(animated) //css样式
Vue.use(ElementUI) //使用Element UI
Vue.use(mavonEditor) //编辑器
Vue.config.productionTip = false
Vue.directive('highlight', function(el) {
	let blocks = el.querySelectorAll('pre code');
	blocks.forEach((block) => {
		hljs.highlightBlock(block)
	})
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) { //匹配前往的路由不存在
    from.name ? next({
      name: from.name
    }) : next('/error404'); //判断此跳转路由的来源路由是否存在，存在的情况跳转到来源路由，否则跳转到404页面
  } else {
    next(); //如果匹配到正确跳转
  }
});


//使用钩子函数判断是否拦截
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title == undefined ? 'KevinHome' : to.meta.title
	if (to.meta.requireAuth) {
		if (store.state.user.email) {
			toAuth().then(res => {
				if (res)
					next()
			})
		} else {
			next({
				path: 'login',
				query: {
					redirect: to.fullPath
				}
			})
		}
	} else {
		next()
	}
})

new Vue({
	router,
	store,
	render: function(h) {
		return h(App)
	}
}).$mount('#app')
