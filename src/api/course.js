import request from "@/utils/request";

// 获取课程信息
export function findCourse() {
    return request({
        url: "forums",
        method: "Get",
    })
}
//获取课程的详情
export function getCourseInfo(id) {
    return request({
        url: 'forums/' + id,
        method: 'get'
    })
}
//根据bundle_id获取同系列的课程
export function getSameList(id) {
    return request({
        url: 'forums',
        method: 'get',
        params: {
            'forumSearch[bundle_id]': id,
            sort: 'start_date'
        }
    })
}