import axios from 'axios'
const service = axios.create({
    baseURL: process.env.BASE_API, // api 的 base_url
    timeout: 20000 // 请求超时时间,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
})
export default service