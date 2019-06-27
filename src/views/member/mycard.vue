<template>
  <div class="padding-20 my-card-page">
    <div class="user-head">
      <div class="white--text border-radius detail-box">
        <div class="member-box">
          <div class="right-box">
            <div class="head-img">
              <img :src="userInfo.headimgurl" alt>
            </div>
            <div class="member-text">
              <div class="name">
                <span class="real">{{useritems.realname}}</span>
                <span class="sm">总经理</span>
              </div>
              <p class="ht">背景</p>
              <span>
                互联网 | 影响力
                <i class="num-yew">{{userInfo.views}}</i>
              </span>
            </div>
          </div>

          <div class="go-link">
            <p class="sm">
              会员期限
              <i>596</i>天
            </p>
            <v-chip class="star-cart white--text">
              <v-avatar color="indigo">
                <v-icon dark>fas fa-star</v-icon>
              </v-avatar>隐私设置
              <i class="iconfont icon-next"></i>
            </v-chip>
          </div>
        </div>
        <v-layout row class="list-num white--text">
          <div>
            <span>
              <i class="iconfont icon-zufang"></i>
              5000万-1亿
            </span>
          </div>
          <div>
            <span>
              <i class="iconfont icon-dianhua"></i>
              {{useritems.mobile}}
            </span>
          </div>
          <div xs4>
            <span>
              <i class="iconfont icon-address"></i>
              {{useritems.city}}-{{useritems.province}}
            </span>
          </div>
        </v-layout>
        <div class="user-foot">
          <p>人脉资产</p>
          <span>{{userInfo.lower_level_user_count}}</span>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="hg">
        <div class="top">
          <div class="herald-title">
            <p></p>
            <span>企业简介</span>
          </div>
          <div class="content">
            <p>{{useritems.introduction}}</p>
          </div>
        </div>
        <div class="medium">
          <div class="herald-title">
            <p></p>
            <span>企业内容</span>
          </div>
          <div class="content">
            <p>{{useritems.service}}</p>
          </div>
        </div>
        <div class="bottom">
          <div class="herald-title">
            <p></p>
            <span>图片展示</span>
          </div>
          <div class="imgs">
            <img :src="baseUrl+img" v-for="(img, index) in useritems.images" :key="index">
          </div>
        </div>
      </div>
    </div>
    <div style="height:57px;"></div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import { getCard, checkIsMember } from "@/api/member";
export default {
  components: {
    MemberDetail,
    CommonBottom
  },
  computed: {
    ...mapGetters(["id", "userInfo"])
  },
  data() {
    return {
      useritems: null
    };
  },
  created() {
    checkIsMember(this.id).then(res => {
      if (res.data.items.length) {
        const info = res.data.items[0];
        if (info.idsn && info.realname) {
          console.log("已实名认证", "");
          this.useritems = res.data.items[0];
          this.$store.commit(
            "app/setTitle",
            this.useritems.realname +
              "的" +
              this.userInfo.membership_name +
              "名片"
          );
        } else {
          this.$router.push({ name: "Authentication" });
        }
      } else {
        this.$router.push({ name: "Authentication" });
      }
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-card-page {
  padding-bottom: 0px;
  .user-head {
    border-radius: 8px;
    font-size: 28px;
    background: $bg-color;
    .detail-box {
      .member-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 38px 38px 0 38px;
        .right-box {
          display: flex;
        }
        .head-img {
          overflow: hidden;
          width: 94px;
          height: 94px;
          border-radius: 50%;
          margin-right: 25px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .member-text {
          .name {
            .real {
              font-size: 32px;
              font-weight: 500;
            }
            .sm {
              font-style: normal;
              font-size: 22px;
              font-weight: 600;
            }
          }
          .num-yew {
            color: rgb(255, 255, 38);
            font-style: normal;
          }
        }
        .go-link {
          text-align: right;
          .sm {
            font-size: 22px;
            i {
              font-style: normal;
              font-size: 28px;
            }
          }
          .star-cart {
            margin-right: -34px;
            background: rgba(255, 255, 255, 0.2) !important;
            font-size: 28px;
            border-radius: 28px 0 0 28px !important;
            height: 50px;
            .v-avatar {
              width: 50px !important;
              height: 50px !important;
              min-width: 50px;
            }
            .fa-star {
              &:before {
                font-size: 24px;
              }
            }
            .icon-next {
              margin-left: 8px;
              font-size: 18px;
            }
          }
        }
      }
    }

    .list-num {
      display: flex;
      justify-content: space-between;
      border-top: 1px solid rgb(255, 89, 43);
      border-bottom: 1px solid rgb(255, 89, 43);
      height: 80px;
      line-height: 80px;
      margin: 34px;
      margin-bottom: 0px;
      text-align: center;
      font-size: 24px;
      font-weight: 500;
      .iconfont {
        color: #fff;
      }
    }
    .user-foot {
      margin-top: 15px;
      padding: 0 34px;
      padding-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p {
        font-size: 32px;
        font-weight: 500;
      }
      span {
        font-weight: 500;
        font-size: 28px;
        color: rgb(255, 255, 38);
      }
    }
  }
}
.main {
  margin-top: 45px;
  margin-bottom: 50px;
  .hg {
    padding: 35px;
    border: 2px solid $bg-color;
    border-radius: 10px;
    .herald-title {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid whitesmoke;
      p {
        margin-left: 8px;
        margin-right: 10px;
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: $bg-color;
      }
      span {
        color: $bg-color;
        font-size: 32px;
        font-weight: normal;
      }
    }
    .content {
      margin: 15px 0 45px 0;
      font-size: 24px;
      color: #666;
      p {
        margin-bottom: 10px;
        line-height: 36px;
      }
    }
    .bottom {
      .imgs {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
          width: 200px;
          height: 300px;
          background-color: rgb(201, 200, 200);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>