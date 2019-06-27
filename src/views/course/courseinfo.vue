<template>
  <div class="course-info-page">
    <div class="servercenter">
      <div class="bg">
        <img :src="baseUrl + courseInfo.banner" alt class="hd-bg" v-if="courseInfo.banner">
      </div>
      <div class="content">
        <CourseName
          class="coursename"
          :course="courseInfo"
          :bundle_id="bundle_id"
          :id="courseId"
          @handlechange="getnewCourse"
        ></CourseName>
        <div class="course-info">
          <div class="info-title">
            <p></p>
            <span>课程详情</span>
          </div>
          <div class="info-introduce" v-html="courseInfo.detail"></div>
        </div>
      </div>
    </div>
    <div class="bottom-order">
      <div class="money">
        <span class="now">￥5800元</span>
        <span class="orign">原价:￥12800元</span>
      </div>
      <div class="signbtn" @click="goPay">立即报名</div>
    </div>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-radio-group v-model="radioGroup">
                <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
              </v-radio-group>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="blue darken-1" flat @click="dialog = false">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CommonBottom from "../../component/common_bottom";
import CourseName from "../../component/course_name";
import { getCourseInfo } from "@/api/course";
import BScroll from "better-scroll";
export default {
  name: "ServerCenter",
  components: {
    CommonBottom,
    CourseName
  },
  data() {
    return {
      activeBtn: 1,
      bundle_id: "",
      showNav: true,
      courseId: null,
      courseInfo: {},
      dialog: false,
      radioGroup: 1
    };
  },
  created() {
    this.initData();
  },
  methods: {
    initData() {
      this.courseId = this.$route.params.id * 1;
      this.bundle_id = this.$route.params.bundle_id * 1;
      getCourseInfo(this.courseId).then(res => {
        this.courseInfo = res.data;
        this.$store.commit("app/setTitle", this.courseInfo.name);
      });
    },
    goPay() {
      this.dialog = true;
      // this.$router.push({ name: "cousePay" });
    },
    getnewCourse(val) {
      this.initData();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.course-info-page {
  background-color: rgb(244, 244, 244);
  .bottom-order {
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    background: #fff;
    .money {
      .now {
        color: $bg-color;
        font-size: 32px;
        margin-right: 15px;
      }
      .orign {
        color: #666;
        font-size: 28px;
        text-decoration: line-through;
      }
    }

    .signbtn {
      background-color: $bg-color;
      color: #fff;
      height: 60px;
      line-height: 60px;
      width: 200px;
      text-align: center;
      border-radius: 8px;
      font-size: 32px;
    }
  }
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
      color: $color;
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
<style lang="scss">
.course-info-page {
  .course-info {
    img {
      width: 100% !important;
      height: auto !important;
    }
  }
}
</style>
