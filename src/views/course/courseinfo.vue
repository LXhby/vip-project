<template>
  <div>
    <div class="servercenter">
      <div class="bg"></div>
      <div class="content">
        <CourseName class="coursename"></CourseName>
        <div class="course-info">
          <div class="info-title">
            <p></p>
            <span>课程详情</span>
          </div>
          <div class="info-introduce">
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
            课程详情课程详情课程详情课程详情课程详情
          </div>
        </div>
      </div>
    </div>
    <CommonBottom></CommonBottom>
  </div>
</template>

<script>
import CommonBottom from "../../component/common_bottom";
import CourseName from "../../component/course_name";
export default {
  name: "ServerCenter",
  components: {
    CommonBottom,
    CourseName
  },
  data() {
    return {
      activeBtn: 1,
      showNav: true
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.servercenter {
  margin-bottom: 100px;
  .bg {
    height: 420px;
    background-color: $bg-color;
  }
  .content {
    padding: 0 20px;
    .coursename {
      margin-top: -70px;
    }
    .course-info {
      margin-top: 20px;
      padding: 10px;
      font-size: 20px;
      border-radius: 5px;
      background-color: #fff;
      .info-title {
        display: flex;
        align-items: center;
        padding: 10px;
        color: rgb(172, 172, 172);
        border-bottom: 1px solid rgb(241, 240, 240);
        p {
          margin-right: 14px;
          width: 6px;
          height: 25px;
          border-radius: 3px;
          background-color: $bg-color;
        }
        span {
          color: $text-gray-color;
          font-size: 25px;
        }
      }
    }
    .course-foot {
      display: flex;
      justify-content: space-between;
      .enroll {
        width: 200px;
      }
    }
  }
}
</style>