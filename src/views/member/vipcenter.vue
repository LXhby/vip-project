<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="title">
        <p></p>
        <span>会员服务</span>
      </div>
      <div class="medium">
        <v-list v-for="(item, index) in arr" :key="index">
          <router-link :to="router">
            <v-list-tile-content @click="pageChange(item.id)">
              <v-list-tile-avatar class="avatar">
                <div class="icon-top">
                  <i :class="['iconfont',item.icon]"></i>
                </div>
              </v-list-tile-avatar>
              <v-list-tile-sub-title>{{item.title}}</v-list-tile-sub-title>
            </v-list-tile-content>
          </router-link>
        </v-list>
      </div>
      <v-container fluid class="nav-list">
        <v-list>
          <router-link :to="router">
            <template v-for="(item, i) in items">
              <v-divider v-if="item.divider" :key="i"></v-divider>
              <v-list-tile v-else :key="item.title" @click="pageChange(item.id)">
                <v-list-tile-action>
                  <i :class="['iconfont',item.icon]"></i>
                </v-list-tile-action>
                <v-list-tile-title class="title-list">{{ item.title }}</v-list-tile-title>
                <v-list-tile-action v-if="item.badge">
                  <v-badge color="red">
                    <template v-slot:badge>
                      <span>5</span>
                    </template>
                  </v-badge>
                </v-list-tile-action>
                <v-list-tile-action class="icon-right">
                  <v-icon>chevron_right</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </router-link>
        </v-list>
      </v-container>
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
      router: {}, // 跳转route
      width: 300,
      arr: [
        {
          id: 1,
          icon: "icon-credentials_icon",
          title: "我的资料"
        },
        {
          id: 2,
          icon: "icon-shijianjilu",
          title: "课程预告"
        },
        {
          id: 3,
          icon: "icon-biao",
          title: "上课记录"
        },
        {
          id: 4,
          icon: "icon-ziyuan1",
          title: "会议签到"
        }
      ],
      items: [
        { id: 5, icon: "icon-banzu-", title: "我的学友" },
        { divider: true },
        { id: 6, icon: "icon-qian", title: "我的奖金" },
        { divider: true },
        { id: 7, icon: "icon-yinhangqia", title: "提现申请" },
        { divider: true },
        { id: 8, icon: "icon-xiaoxi", title: "我的消息", badge: true },
        { divider: true },
        { id: 9, icon: "icon-aixin", title: "服务条款" },
        { divider: true },
        { icon: "icon-kefu-tianchong", title: "客服电话" },
        { divider: true }
      ]
    };
  },
  methods: {
    pageChange(id) {
      switch (id) {
        case 1:
          this.router = { path: "/mycard" };
          break;
        case 2:
          this.router = { path: "/servercenter" };
          break;
        case 3:
          this.router = { path: "/classrecord" };
          break;
        case 4:
          this.router = { path: "/signin" };
          break;
        case 5:
          this.router = { path: "/myclassmates" };
          break;
        case 6:
          this.router = { path: "/myreward" };
          break;
        case 7:
          this.router = { path: "/rewardout" };
          break;
        case 8:
          this.router = { path: "/newscenter" };
          break;
        case 9:
          this.router = { path: "/serverrules" };
          break;
        default:
          this.router = {};
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.main {
  padding: 40px 0;
  margin-bottom: 80px;
  .title {
    display: flex;
    align-items: center;
    p {
      margin-right: 10px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      font-weight: normal;
      font-size: 32px;
      color: $text-gray-color;
    }
  }
  .medium {
    display: flex;
    justify-items: center;
    justify-content: space-between;
    padding: 0 30px;
    .avatar {
      padding: 15px;
      .icon-top {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: rgb(254, 93, 41);
        .iconfont {
          font-size: 48px;
          text-align: center;
          color: #fff;
          line-height: 100%;
        }
      }
    }
  }
  .fluid {
    padding: 0;
    .title-list {
      width: 320px;
      margin-right: 20px;
      color: $text-gray-color;
    }
    .icon-right {
      width: 100%;
    }
  }
  .nav-list {
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
  }
}
</style>