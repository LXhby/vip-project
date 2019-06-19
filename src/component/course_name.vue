<template>
  <div class="common-course-name">
    <div class="course-name">
      <p class="hd-title">
        <span>某某课程名称</span>
      </p>
      <div class="course-plan">
        <i class="iconfont icon-lunbo"></i>
        <v-layout row class="resultContainer">
          <v-flex xs4>
            <div class="item two">
              <span>第二期</span>
              <p>2019年7月16日</p>
            </div>
          </v-flex>
          <v-flex xs4>
            <div class="item three">
              <span>第三期</span>
              <p>2018年12月16日</p>
            </div>
          </v-flex>
          <v-flex xs4>
            <div class="item one">
              <span>第一期</span>
              <p>2019年7月16日</p>
            </div>
          </v-flex>
        </v-layout>
        <i class="iconfont icon-next1"></i>
      </div>
      <div class="course-info">
        <div class="list">
          <p>
            <i class="iconfont icon-shizhong"></i>
            <span>2019年7月16日 至 2019年7月19日</span>
          </p>
          <p>
            <i class="iconfont icon-dizhi"></i>
            <span>北京·九华山庄宾馆楼</span>
          </p>
          <p>
            <i class="iconfont icon-renyuan"></i>
            <span>200人</span>
          </p>
          <p class="last">
            <i class="iconfont icon-xueyuan-mulu"></i>
            <span>课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介课程简介</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.common-course-name {
  .course-name {
    background-color: #fff;
    font-size: 20px;
    border-radius: 10px;
    .hd-title {
      padding: 0 10px;
      font-size: 32px;
      font-weight: 400;
      line-height: 75px;
      color: #333;
      border-bottom: 1px solid rgb(244, 244, 244);
      span {
        margin-left: 10px;
      }
    }
    .course-plan {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 35px;
      .iconfont {
        font-size: 44px;
        color: #ccc;
      }
      .resultContainer {
        color: rgb(10, 6, 6);
        .item {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          align-items: center;
          margin: 0 10px;
          height: 60px;
          border-radius: 5px;
          padding: 6px 0;
          color: #fff;
          span {
            font-size: 24px;
            line-height: 24px;
          }
          p {
            font-size: 20px;
          }
        }
        .two {
          background-color: $bg-green;
        }
        .three {
          background-color: $bg-huang;
        }
        .one {
          color: #ccc;
          background-color: $bg-gray;
        }
      }
    }
    .course-info {
      .list {
        padding: 24px;
        p {
          display: flex;
          height: 75px;
          align-items: center;
          border-bottom: 1px solid rgb(245, 245, 245);
          .iconfont {
            font-size: 46px;
            color: #ccc;
            margin-right: 15px;
          }
          span {
            font-size: 26px;
            color: $color;
          }
        }
        .last {
          height: auto;
          padding: 20px 0;
        }
      }
    }
  }
}
</style>
