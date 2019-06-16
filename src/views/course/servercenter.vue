<template>
  <div>
    <div class="servercenter">
      <member-detail></member-detail>
      <div class="course-herald">
        <div class="herald-title">
          <p></p>
          <span>课程预告</span>
        </div>
        <div class="herald-info">
          <course-list></course-list>
          <course-list></course-list>
          <course-list></course-list>
        </div>
      </div>
      <CommonBottom></CommonBottom>
    </div>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CourseList from "@/component/course_list";
import CommonBottom from "@/component/common_bottom";

export default {
  name: "ServerCenter",
  components: {
    MemberDetail,
    CourseList,
    CommonBottom
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.servercenter {
  padding: 20px;
  .course-herald {
    padding: 30px 0 0 0;
    .herald-title {
      display: flex;
      align-items: center;
      p {
        margin-right: 10px;
        width: 6px;
        height: 25px;
        border-radius: 3px;
        background-color: $bg-color;
      }
      span {
        color: gray;
        font-size: 30px;
      }
    }
  }
}
</style>