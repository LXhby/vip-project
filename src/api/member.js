import request from "@/utils/request";
/**服务条款 */
export function getServeterms() {
    return request({
        url: '',
        method: 'get'
    })
}