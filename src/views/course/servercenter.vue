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
    .herald-title {
      padding: 30px 0;
      margin-left: 7px;
      display: flex;
      align-items: center;
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
  }
}
</style>