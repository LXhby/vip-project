import request from "@/utils/request";

// 获取课程信息
export function findCourse(data){
    return request({
        url: "forums?ForumSearch",
        method: "Get",
        params: {
            "per-page": data
        }
    })
}