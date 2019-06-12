import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
import VueWechatTitle from 'vue-wechat-title'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@/style/index.css'
import "./plugins/hotcss.js"
Vue.use(Vuetify, {
  theme: {
    primary: '#ff4101',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
Vue.use(VueWechatTitle)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')