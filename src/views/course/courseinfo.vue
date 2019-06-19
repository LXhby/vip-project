<template>
  <div class="course-info-page">
    <div class="servercenter">
      <div class="bg">
        <img
          src="http://dfiles.speiyou.com/img/2018/03/02/201547_5a994073d3eb3.jpg"
          alt
          class="hd-bg"
        >
      </div>
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
.course-info-page {
  background-color: rgb(244, 244, 244);
}
.servercenter {
  margin-bottom: 100px;
  .bg {
    position: relative;
    height: 420px;
    background-color: $bg-color;
    .hd-bg {
      width: 100%;
      height: 100%;
    }
  }
  .content {
    position: relative;
    margin-top: -76px;
    padding: 0 20px;

    overflow: hidden;
    .coursename {
      border-radius: 6px;
      background-color: #fff;
    }
    .course-info {
      margin-top: 20px;
      margin-bottom: 50px;
      padding: 10px;
      font-size: 20px;
      border-radius: 5px;
      background-color: #fff;
      .info-title {
        display: flex;
        align-items: center;
        padding: 10px;
        color: rgb(172, 172, 172);
        border-bottom: 1px solid rgb(243, 242, 242);
        p {
          margin-right: 10px;
          width: 8px;
          height: 30px;
          border-radius: 4px;
          background-color: $bg-color;
        }
        span {
          color: $text-gray-color;
          font-size: 32px;
        }
      }
      .info-introduce {
        padding: 10px;
        font-size: 28px;
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