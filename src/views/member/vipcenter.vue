<template>
  <div class="padding-20 vip-center-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="会员服务"></page-title>
      <v-layout row class="nav-list">
        <v-flex v-for="(item, index) in arr" :key="index" xs4>
          <div class="each-item" @click="goPage(item.url)">
            <div class="item-avatar">
              <i :class="['iconfont',item.icon]"></i>
            </div>
            <p>{{item.title}}</p>
          </div>
        </v-flex>
      </v-layout>

      <v-container fluid class="ul-list">
        <v-list>
          <template v-for="(item, i) in items">
            <v-list-tile :key="item.title" avatar @click="goPage(item.url)">
              <v-list-tile-avatar>
                <i :class="['iconfont',item.icon]"></i>
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-badge color="red" v-if="item.badge" class="badge-num">
                  <template v-slot:badge>
                    <span>5</span>
                  </template>
                  <div>{{item.title}}</div>
                </v-badge>
                <v-list-tile-title v-else v-html="item.title"></v-list-tile-title>
                <!-- <div class="badge-num">5</div> -->
              </v-list-tile-content>

              <v-list-tile-action>
                <i class="iconfont icon-next1"></i>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider></v-divider>
          </template>
        </v-list>
      </v-container>
      <div style="height:56px;"></div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      router: {}, // 跳转route
      width: 300,
      arr: [
        {
          url: "/mycard",
          icon: "icon-credentials_icon",
          title: "我的资料"
        },
        {
          url: "/servercenter",
          icon: "icon-shijianjilu",
          title: "课程预告"
        },
        {
          url: "/classrecord",
          icon: "icon-biao",
          title: "上课记录"
        },
        {
          icon: "icon-ziyuan1",
          title: "会议签到"
        }
      ],
      items: [
        { url: "/myclassmates", icon: "icon-banzu-", title: "我的学友" },

        { url: "/myreward", icon: "icon-qian", title: "我的奖金" },

        { url: "/rewardout", icon: "icon-yinhangqia", title: "提现申请" },

        {
          url: "/newscenter",
          icon: "icon-xiaoxi",
          title: "我的消息",
          badge: true
        },

        { url: "/serverrules", icon: "icon-aixin", title: "服务条款" },

        { icon: "icon-kefu-tianchong", title: "客服电话" }
      ]
    };
  },
  methods: {
    goPage(url) {
      this.$router.push(url);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.main {
  .nav-list {
    margin-bottom: 25px;

    .each-item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        margin-top: 15px;
        font-size: 28px;
        color: $color;
      }
    }
    .item-avatar {
      width: 80px;
      height: 80px;
      line-height: 80px;
      text-align: center;
      border-radius: 50%;
      background-color: $bg-color;
      .iconfont {
        font-size: 48px;
        text-align: center;
        color: #fff;
      }
    }
  }
  .ul-list {
    padding: 0;
    margin-bottom: 50px;

    .v-list {
      padding: 0px;
      .v-list__tile--avatar {
        height: 100px;
      }
      .v-list__tile__title {
        color: $color;
      }
    }
    .iconfont {
      font-size: 40px;
    }
  }
  .ul-list {
    .icon-banzu- {
      color: rgb(94, 204, 246);
    }
    .icon-qian {
      color: rgb(255, 206, 44);
    }
    .icon-yinhangqia {
      color: rgb(255, 152, 88);
    }
    .icon-xiaoxi {
      color: rgb(44, 208, 128);
    }
    .icon-aixin {
      color: rgb(126, 210, 98);
    }
    .icon-kefu-tianchong {
      color: rgb(255, 141, 183);
    }
    .icon-next1 {
      font-size: 32px;
      color: rgb(218, 218, 218);
    }
  }
}
</style>
<style lang="scss">
@import "@/style/public.scss";
.vip-center-page {
  .ul-list {
    .v-list__tile--avatar {
      height: 100px;
      padding: 0px;
    }
    .v-divider {
      border-color: whitesmoke !important;
    }
    .badge-num {
      color: $color;
      .v-badge__badge {
        top: 0px;
        right: -50px;
      }
    }
  }
}
</style>
