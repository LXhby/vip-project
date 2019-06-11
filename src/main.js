import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify, {
  theme: {
    primary: '#ff4101',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c'
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')