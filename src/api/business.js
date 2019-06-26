import request from "@/utils/request";
/**商圈 */
export function getPost(data) {
    return request({
        url: "posts",
        method: "get",
        params: {
            "PostSearch[user_id]": data.chooseid,
            expand: "member,user,comments,likes",
            page: data.page,
            "per-page": 10,
            sort: '-send_at'
        }
    })
}
/**发表说说 */
export function publishWechat(data) {
    return request({
        url: 'posts',
        method: 'post',
        data: data
    })
}
/**删除说说 */
export function deletChat(id) {
    return request({
        url: 'posts/' + id,
        method: 'delete'
    })
}
/**点赞 */
export function handleLike(data) {
    return request({
        url: 'post-likes',
        method: 'post',
        data: data
    })
}
/**取消点赞 */
export function cancelLike(id, data) {
    return request({
        url: 'post-likes/' + id,
        method: 'delete',
        data: data
    })
}
/**评论 */
export function giveComment(data) {
    return request({
        url: 'post-comments',
        method: 'post',
        data: data
    })
}