import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)//vuex状态管理

export default new Vuex.Store({
	state:{//用于存放全局参数
		user:{
			username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
		}
	},
	mutations: {
		login(state, user){
			state.user = user
			window.localStorage.setItem('user', JSON.stringify(user))
		}
	}
})