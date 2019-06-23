<template>
  <div class="servercenter">
    <member-detail></member-detail>
    <div class="course-herald">
      <page-title title="课程预告"></page-title>
      <div class="herald-info" v-for="(course, index) in courseInfo" :key="index">
        <course-list
          :courseName="course.courseName"
          :courseAddress="course.courseAddress"
          :courseTime="course.courseTime"
        />
      </div>
    </div>
    <CommonBottom></CommonBottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CourseList from "@/component/course_list";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import { findCourse } from "@/api/course";
import { changeDate } from "@/utils/dateChange";
export default {
  name: "ServerCenter",
  components: {
    MemberDetail,
    CourseList,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      courseInfo: []
    };
  },
  created() {
    findCourse({ "per-page": 5 })
      .then(response => {
        const { data } = response;
        const { items } = data;
        items.forEach(ele => {
          let obj = {
            courseName: ele.name,
            courseAddress: ele.address,
            courseTime: changeDate(ele.start_date, ele.end_date)
          };
          this.courseInfo.push(obj);
        });
        console.log(this.courseInfo);
      })
      .catch(console.log);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.servercenter {
  padding: 20px;
}
</style>
<style lang="scss">
@import "@/style/public.scss";
.herald-info {
  .course-list {
    &:nth-child(1) {
      .v-sheet {
        @include bg-yellow-bottom;
      }
    }
    &:nth-child(2) {
      .v-sheet {
        @include bg-purple-bottom;
      }
    }
    &:nth-child(3) {
      .v-sheet {
        @include bg-green-bottom;
      }
    }
  }
}
</style>
