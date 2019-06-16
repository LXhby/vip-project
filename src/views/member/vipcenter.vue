<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <course-list></course-list>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CourseList from "@/component/course_list";
export default {
  components: {
    MemberDetail,
    CourseList
  }
};
</script>

<style lang="scss" scoped>
</style>