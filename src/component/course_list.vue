<template>
  <div class="course-list">
    <v-card color="purple" class="white--text border-radius">
      <v-layout row class="main">
        <v-flex xs9>
          <v-card-title primary-title>
            <v-layout class="course-title" column wrap justify-space-between>
              <div class="title">第一期某某课程某某课程某某课程</div>
              <div class="time">
                <p class="fl">
                  <i class="iconfont icon-shizhong1"></i>
                  <span>2019年9月12日-15日</span>
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
export default {};
</script>

<style lang="scss" >
@import "@/style/public.scss";
.course-list {
  margin-bottom: 38px;
  font-size: 25px;
  .v-card {
    height: 160px;
    padding: 34px;
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

    .title {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 30px;
      font-weight: 500;
    }
    .time {
      i {
        font-size: 30px;
        margin-right: 8px;
      }
      span {
        font-size: 22px;
      }
    }
  }
  .count-num {
    width: 80px;
    height: 80px;
    padding: 8px;
    text-align: center;
    background: rgba(0, 0, 0, 0.2);
    p {
      line-height: 1;
      font-size: 20px;
      i {
        font-style: normal;
        font-size: 28px;
      }
    }

    span {
      font-size: 20px;
    }
  }
}
</style>