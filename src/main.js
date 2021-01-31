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

Vue.use(animated)//css样式
Vue.use(ElementUI) //使用Element UI
Vue.use(mavonEditor)//编辑器
Vue.config.productionTip = false
Vue.directive('scroll',{
	inserted: function (el, binding) {
	    let f = function (evt) {
	      if (binding.value(evt, el)) {
	        window.removeEventListener('scroll', f)
	      }
	    }
	    window.addEventListener('scroll', f)
	  }
})

//使用钩子函数判断是否拦截
router.beforeEach((to, from, next) => {
	if(to.meta.requireAuth){
		if(store.state.user.email){
			toAuth().then( res => {
				if(res)
					next()
			})
		}else{
			next({
				path: 'tologin',
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
