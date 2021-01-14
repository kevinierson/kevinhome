import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);//使用Element UI
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
