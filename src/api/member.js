import request from "@/utils/request";
/**服务条款 */
export function getServeterms() {
    return request({
        url: '',
        method: 'get'
    })
}
// 我的名片
export function getCard(id) {
    return request({
        url: 'members/'+id,
        method: 'get'
    })
}