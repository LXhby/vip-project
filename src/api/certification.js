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
/**查询用户是否有会员id */
export function checkIsMember(id) {
    return request({
        url: 'users/' + id,
        params: {
            expand: 'member'
        },
        method: 'get',
    })
}
/**提交会员信息 */
export function postMemberInfo(data) {
    return request({
        url: 'members',
        method: 'post',
        data: data
    })
}

/**系统配置--行业分类 */
export function systemindustry() {
    return request({
        url: 'config/get',
        params: {
            key: 'industry',
            as_array: 1
        },
        method: 'get'
    })
}
/**系统配置--公司规模 */
export function systemCompany() {
    return request({
        url: 'config/get',
        params: {
            key: 'company_levels',
            as_array: 1
        },
        method: 'get'
    })
}
/**下载图片 */
export function downloadimage(id) {
    return request({
        url: 'wechat/download-image',
        method: 'get',
        params: {
            serverId: id
        }
    })
}
/**删除图片 */
export function deleteImg(id, project_id) {
    return request({
        url: 'pap/delete-check',
        method: 'post',
        params: {
            project_id: project_id
        },
        data: {
            id: id
        }
    })
}