import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex)//vuex状态管理

export default new Vuex.Store({
	state:{//用于存放全局参数
		user:{
			email: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).email
		}
	},
	mutations: {
		Login(state, user){
			state.user = user
			window.localStorage.setItem('user', JSON.stringify(user))
		},
		logout(state){
			state.user = []
			window.localStorage.removeItem('user')
		}
	}
})