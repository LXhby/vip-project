<template>
  <div class="course-list">
    <v-card class="white--text border-radius" @click.native="goInfo">
      <v-layout row class="main">
        <v-flex xs10>
          <div style="height:100%;">
            <v-layout class="course-title" column wrap justify-space-between>
              <div class="hd-title">{{courseName}}</div>
              <div class="time">
                <i class="iconfont icon-shizhong1"></i>
                <span>{{getTime}}</span>

                <i class="iconfont icon-address"></i>
                <span>{{courseAddress}}</span>
              </div>
            </v-layout>
          </div>
        </v-flex>
        <v-flex xs2>
          <v-layout row align-center justify-end style="height:100%;">
            <div class="border-radius count-num">
              <p>
                <i>{{time}}</i>天
              </p>
              <span>倒计时</span>
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: [
    "courseName",
    "courseAddress",
    "courseTime",
    "courseId",
    "courseendTime",
    "bundle_id"
  ],
  data() {
    return {
      getTime: "",
      time: ""
    };
  },
  created() {
    this.getTime = this.courseTime + "-" + this.courseendTime;
    var end_date = moment(this.courseTime);
    var start_date = moment(
      new Date(new Date(new Date().toLocaleDateString()).getTime())
    );

    var seconds = end_date.diff(start_date, "seconds");
    //分钟
    var mintus = seconds / 60;
    //小时
    var hours = mintus / 60;
    this.time = hours / 24;
  },
  methods: {
    goInfo() {
      console.log("888", this.courseId);
      this.$router.push({
        name: "Courseinfo",
        params: { id: this.courseId, bundle_id: this.bundle_id }
      });
    }
  }
};
</script>

<style lang="scss" >
@import "@/style/public.scss";
.course-list {
  margin-bottom: 38px;
  font-size: 28px;
  .v-card {
    height: 160px;
    padding: 30px;
    .main {
      height: 100%;
      .v-card__title {
        height: 100%;
        padding: 0px;
      }
    }
  }
  .course-title {
    width: 100%;
    height: 100%;

    .hd-title {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 32px;
      font-weight: 500;
    }
    .time {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 100%;
      p {
        display: inline-block;
      }
      i {
        font-size: 30px;
        margin-right: 8px;
      }
      .icon-address {
        margin-left: 20px;
      }
      span {
        font-size: 24px;
        font-weight: 500;
      }
    }
  }
  .count-num {
    display: flex;
    align-items: center;
    width: 80px;
    height: 80px;
    padding: 6px;
    flex-wrap: wrap;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    p {
      line-height: 1;
      font-size: 22px;
      i {
        font-style: normal;
        font-size: 32px;
      }
    }

    span {
      font-size: 22px;
    }
  }
}
</style>