import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import ElementUI from 'element-ui';
import animated from 'animate.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(animated);
Vue.use(ElementUI);//使用Element UI
Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
