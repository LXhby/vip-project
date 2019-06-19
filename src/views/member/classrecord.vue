<template>
  <div>
    <div class="class-record">
      <member-detail></member-detail>
      <div class="course-herald">
        <page-title title="上课记录"></page-title>

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
import PageTitle from "@/component/page_title";
export default {
  name: "ServerCenter",
  components: {
    MemberDetail,
    CourseList,
    CommonBottom,
    PageTitle
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.class-record {
  padding: 20px;
}
</style>