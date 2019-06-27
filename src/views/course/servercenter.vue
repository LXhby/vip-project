<template>
  <div class="servercenter">
    <member-detail></member-detail>
    <div class="course-herald">
      <page-title title="课程预告"></page-title>
      <div class="herald-info" v-for="(course, index) in courseInfo" :key="index">
        <course-list
          :courseName="course.data[0].name"
          :courseAddress="course.data[0].address"
          :courseTime="course.data[0].start_date"
          :courseendTime="course.data[0].end_date"
          :courseId="course.data[0].id"
          :bundle_id="course.bundle_id"
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
      courseInfo: [],
      getCourse: []
    };
  },
  created() {
    findCourse()
      .then(response => {
        const { data } = response;
        const arrList = data.items;
        var items = [];
        arrList.forEach(al => {
          if (al.status != "已结束") {
            items.push(al);
          }
        });
        var map = {},
          dest = [];
        for (var i = 0; i < items.length; i++) {
          var ai = items[i];
          if (!map[ai.bundle_id]) {
            //依赖分组字段可自行更改！
            dest.push({
              bundle_id: ai.bundle_id, //依赖分组字段可自行更改！
              data: [ai]
            });
            map[ai.bundle_id] = ai; //依赖分组字段可自行更改！
          } else {
            for (var j = 0; j < dest.length; j++) {
              var dj = dest[j];
              if (dj.bundle_id == ai.bundle_id) {
                //依赖分组字段可自行更改！
                dj.data.push(ai);
                break;
              }
            }
          }
        }

        console.log("0", dest);
        this.courseInfo = dest;
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
