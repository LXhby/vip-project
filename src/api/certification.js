/**入会 */

import request from "@/utils/request";
/**入会成功页面 */
export function getMembership(id) {
    return request({
        url: 'member-orders/' + id,
        params: {
            expand: 'user,membership'
        },
        method: 'get'
    })
}

/**获取自己的手机号 */
export function getMobile(id) {
    return request({
        url: 'users/' + id,
        method: 'get'
    })
}
/**更新会员信息 */