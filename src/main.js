import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from "./store/store.js"
import ElementUI from 'element-ui'
import animated from 'animate.css'
import 'element-ui/lib/theme-chalk/index.css'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {toAuth} from "@/network/admin.js"
import 'highlight.js/styles/night-owl.css' //代码样式
import hljs from "highlight.js"

Vue.use(animated)//css样式
Vue.use(ElementUI) //使用Element UI
Vue.use(mavonEditor)//编辑器
Vue.config.productionTip = false
Vue.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
        blocks.forEach((block)=>{
        hljs.highlightBlock(block)
    })
})

//使用钩子函数判断是否拦截
router.beforeEach((to, from, next) => {
	window.document.title = to.meta.title == undefined?'KevinHome':to.meta.title
	if(to.meta.requireAuth){
		if(store.state.user.email){
			toAuth().then( res => {
				if(res)
					next()
			})
		}else{
			next({
				path: 'login',
				query:{redirect: to.fullPath}
			})
		}
	}else{
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
