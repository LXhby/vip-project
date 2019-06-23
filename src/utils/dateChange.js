// 转换课程日期
export function changeDate(startTime, endTime) {
    // 将起始时间转为xxxx/xx/xx格式
    startTime = startTime.replace(/-g/, '/')
    endTime = endTime.replace(/-g/, '/')
    // 创建日期对象
    var startDate = new Date(startTime)
    var endDate = new Date(endTime)
    startTime = startDate.getFullYear() + '年' + (parseInt(startDate.getMonth() + 1)) + '月' + startDate.getDate() + '日'
    endTime = endDate.getDate() + '日'
    let totalTime = startTime + '-' +endTime
    return totalTime
}