<template>
  <div class="course-list">
    <v-card class="white--text border-radius">
      <v-layout row class="main">
        <v-flex xs9>
          <v-card-title primary-title>
            <v-layout class="course-title" column wrap justify-space-between>
              <div class="hd-title">{{courseName}}</div>
              <div class="time">
                <p class="fl">
                  <i class="iconfont icon-shizhong1"></i>
                  <span>{{courseTime}}</span>
                </p>
                <p class="fr">
                  <i class="iconfont icon-address"></i>
                  <span>北京 九华山庄</span>
                </p>
              </div>
            </v-layout>
          </v-card-title>
        </v-flex>
        <v-flex xs3>
          <v-layout row align-center justify-end style="height:100%;">
            <div class="border-radius count-num">
              <p>
                <i>9</i>天
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
export default {
  props: ["courseName", "courseAddress", "courseTime"]
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
      i {
        font-size: 30px;
        margin-right: 8px;
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