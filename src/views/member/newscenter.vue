<template>
  <div class="news-center-page padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="news-list">
        <div class="news-head">
          <div class="news-title">
            <p></p>
            <span>消息中心</span>
          </div>
          <div class="news-select">
            <v-menu transition="slide-y-transition" offset-y>
              <template v-slot:activator="{ on }">
                <v-btn flat small v-on="on">
                  <v-icon class="nav-btn">fas fa-bars</v-icon>筛选
                </v-btn>
              </template>
              <v-list class="list-btn">
                <v-list-tile v-for="(item, i) in items" :key="i" @click>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
          </div>
        </div>
        <div class="news-nav" v-for="(arr,index) in array" :key="index">
          <div class="clearfix">
            <h4 class="fl">【系统消息】</h4>
            <span class="fr">2019.08.31 10:23</span>
          </div>
          <p>系统将2019年8月15日20:00至23:00间进行迭代更新，因此系统将无法访问，给大家带来不便，敬请谅解！</p>
        </div>
      </div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    MemberDetail,
    CommonBottom
  },
  data() {
    return {
      array: ["1", "2", "3", "4"],
      items: [
        { title: "未读消息" },
        { title: "已读消息" },
        { title: "系统消息" },
        { title: "开课通知" },
        { title: "报名通知" },
        { title: "收益通知" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.news-center-page {
  .main {
    .news-list {
      .news-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 30px 0 25px 0;
        .news-title {
          display: flex;
          align-items: center;
          p {
            margin-left: 10px;
            margin-right: 14px;
            width: 8px;
            height: 30px;
            border-radius: 4px;
            background-color: $bg-color;
          }
          span {
            color: $text-gray-color;
            font-size: 30px;
          }
        }
      }
      .news-nav {
        h4 {
          margin-left: -12.5px;
          color: $bg-color;
          font-weight: normal;
        }
        span {
          color: #ccc;
          font-size: 21.875px;
        }
        p {
          margin-top: 10px;
        }
        margin-bottom: 34px;
        padding: 20px 40px;
        border: 1px solid rgb(221, 221, 221);
        font-size: 25px;
        color: rgb(102, 102, 102);
        background: rgb(244, 244, 244);
        border-radius: 8px;
      }
    }
  }
}
</style>
<style lang="scss">
@import "@/style/public.scss";
.news-center-page {
  .news-select {
    .v-btn {
      color: #c2c2c2;
      font-size: 30px;
      font-weight: normal;
      .v-icon {
        margin-right: 10px;
      }
    }
  }
}
.v-menu__content {
  .list-btn {
    background: rgb(255, 224, 134) !important;
    .v-list__tile {
      height: 32px;
      padding: 0 16px;
      color: #666;
      font-size: 22px;
      .v-list__tile__title {
        text-align: center;
      }
    }
  }
}
</style>
