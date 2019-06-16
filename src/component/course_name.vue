<template>
  <div>
    <div class="course-name">
      <p>某某课程名称</p>
      <div class="course-plan">
        <v-icon large>arrow_back_ios</v-icon>
        <v-layout column>
          <v-flex xs12>
            <div class="resultContainer">
              <v-layout >
                <div class="item two">
                  <span>第二期</span>
                  <p>2019年7月16日</p>
                </div>
                <div class="item three">
                  <span>第三期</span>
                  <p>2019年8月16日</p>
                </div>
                <div class="item one">
                  <span>第一期</span>
                  <p>2018年12月16日</p>
                </div>
              </v-layout>
            </div>
          </v-flex>
        </v-layout>
        <v-icon large>arrow_forward_ios</v-icon>
      </div>
      <div class="course-info">
        <v-list one-line subheader class="info-list" >
          <template v-for="(item, index) in items">
            <v-list-tile :key="index" avatar>
              <v-list-tile-avatar>
                <v-icon>{{item.avatar}}</v-icon>
              </v-list-tile-avatar>

              <v-list-tile-content class="info-content">
                <v-list-tile-title v-html="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          avatar: "query_builder",
          title: "2019年7月16日 至 2019年7月19日"
        },
        {
          avatar: "query_builder",
          title: "北京·九华山庄宾馆楼"
        },
        {
          avatar: "query_builder",
          title: "200人"
        },
        {
          avatar: "query_builder",
          title: `课程简介课程简介课程简介课程简介课程简介
                  课程简介课程简介课程简介课程简介课程简介课程简介
                  课程简介课程简介课程简介课程简介课程简介课程简介课程简介`,
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.course-name {
  padding: 20px;
  background-color: #fff;
  font-size: 20px;
  border-radius: 10px;
  p {
    font-size: 25px;
    font-weight: bold;
  }
  .course-plan {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 50px;

    .resultContainer {
      color: #fff;
      .item {
        padding: 5px;
        border-radius: 5px;
        text-align: center;
        min-height: 50px;
        min-width: 160px;
        margin: 10px;
        p {
          font-size: 16px;
        }
      }
      .two {
        background-color: $bg-green;
      }
      .three {
        background-color: $bg-huang;
      }
      .one {
        background-color: $bg-gray;
      }
    }
  }
  .course-info {
    .info-list{
      padding: 0;
      .info-content{
        height: 40px;
      }
    }
  }
}
</style>