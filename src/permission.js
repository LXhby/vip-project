import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({
    showSpinner: false
}) // NProgress Configuration

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    store.commit('app/setTitle', to.meta.title)
    if (!to.meta.auth || to.meta.auth === false) {
        next();
        return;
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})