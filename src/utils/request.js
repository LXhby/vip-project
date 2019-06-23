import axios from 'axios'
import store from '../store'
import {
    Base64
} from 'js-base64';
const service = axios.create({
    baseURL: "http://api.xchmm.yiidev.cn/v1/", // api 的 base_url
    timeout: 20000, // 请求超时时间,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})
service.interceptors.request.use(config => {
        if (store.getters.token) {
            console.log('token', store.getters.token)
            console.log(1, 'Basic ' + Base64.encode(store.getters.token + ':'))
            config.headers['Authorization'] = 'Basic ' + Base64.encode(store.getters.token + ':');
            store.getters.token
        }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    })
export default service