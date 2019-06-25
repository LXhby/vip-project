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