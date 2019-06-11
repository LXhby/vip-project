import Vue from 'vue'
import Router from 'vue-router'
import Register from '../views/entrance/register.vue'
Vue.use(Router);
export default new Router({
    routes: [{
        path: '/',
        name: 'Register',
        component: Register
    }]
})