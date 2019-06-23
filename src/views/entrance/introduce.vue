<template>
  <div class="introduce">
    <div class="bg">
      <img :src="baseUrl+prodInfo.image" alt class="hd-bg">
      <div class="bg-info">
        <p class="info-up">
          已有
          <span>3890</span>会员
        </p>
        <p class="info-down">你还在犹豫什么?</p>
      </div>
    </div>
    <div class="main">
      <div class="main-box">
        <div class="bd">
          <div class="card">
            <div class="card-title">
              <marquee>
                <marquee-item v-for="(item,index) in list" :key="index">
                  <!-- <router-link :to="{name: 'raise-view', params: {id: item.id}}"> -->
                  <div class="bd-title">
                    <div class="title-img">
                      <img :src="item.member.avatar">
                      <p>{{item.member.realname}}购买了{{item.membership.name}}</p>
                    </div>
                    <div class="erweima">
                      <i class="iconfont icon-erweima"></i>
                    </div>
                  </div>
                  <!-- </router-link> -->
                </marquee-item>
              </marquee>
            </div>

            <div class="product-info">
              <!-- <p>产品名称：{{prodInfo.name}}</p> -->
              <p>{{prodInfo.summary}}</p>
              <!-- <p>产品原价：{{prodInfo.original_price}}</p>
              <p>产品价格：{{prodInfo.price}}</p>
              <p>续费价格：{{prodInfo.renew_price}}</p>
              <p>称号：{{prodInfo.title}}</p>
              <div class="pro-detail">
                <p class="fl">产品详情：</p>
                <div v-html="prodInfo.content" class="fl"></div>
              </div>-->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <v-checkbox
        v-model="checkbox"
        label="会员服务条款协议"
        required
        color="primary"
        class="checkbox"
        @click.native="dialog = true"
      ></v-checkbox>

      <v-btn color="primary" small depressed class="btn" @click="activateVip">激活会员</v-btn>
    </div>
    <v-dialog v-model="dialog" max-width="290" persistent>
      <v-card>
        <v-card-title class="headline">会员服务条款协议</v-card-title>

        <v-card-text v-html="prodInfo.terms"></v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="handleyes(false)">取消</v-btn>
          <v-btn color="green darken-1" flat="flat" @click="handleyes(true)">同意</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-snackbar v-model="snackbar" :timeout="2000" color="error" top>请勾选服务条款协议</v-snackbar>
  </div>
</template>

<script>
import Marquee from "@/component/marquee/marquee";
import MarqueeItem from "@/component/marquee/marquee-item";
import { getmember_order, getProdInfo } from "@/api/index";
export default {
  data() {
    return {
      bottomNav: "recent",
      checkbox: false,
      dialog: false,
      list: [],
      prodInfo: {
        image: ""
      },
      snackbar: false
    };
  },
  components: {
    Marquee,
    MarqueeItem
  },
  created() {
    getmember_order().then(res => {
      console.log("res", res);
      this.list = res.data.items;
    });
    //获取背景图和产品信息
    getProdInfo().then(res => {
      this.prodInfo = res.data.items[0];
    });
  },
  methods: {
    handleyes(info) {
      this.dialog = false;
      this.checkbox = info;
    },
    activateVip() {
      if (!this.checkbox) {
        this.snackbar = true;
        return false;
      } else {
        this.$router.push({ name: "Pay", params: { id: this.prodInfo.id } });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.introduce {
  height: 100%;
  background-color: rgb(250, 250, 250);
  .bg {
    position: relative;
    height: 420px;
    background-color: $bg-color;
    text-align: center;
    .hd-bg {
      width: 100%;
      height: 100%;
    }
    .bg-info {
      position: absolute;
      left: 0px;
      right: 0px;
      bottom: 100px;
      color: #fff;
      font-size: 32px;
      font-weight: 500;
      .info-up {
        line-height: 48px;
        span {
          font-size: 48px;
          color: $bg-huang;
        }
      }
      .info-down {
        font-size: 24px;
        font-weight: 800;
      }
    }
  }
  .main {
    position: relative;
    width: 100%;
    height: calc(100% - 420px);
    .main-box {
      position: relative;
      padding: 0 20px;
      height: calc(100% - 100px);
    }
    .bd {
      position: absolute;
      left: 20px;
      right: 20px;
      bottom: 27px;
      border-radius: 8px;
      background-color: #fff;
      top: -76px;
      .card {
        padding: 0px 10px;
        height: 100%;
      }
      .card-title {
        height: 76px;
      }
      .bd-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 76px;
        font-size: 24px;
        font-weight: 500;
        color: rgb(51, 51, 51);
        border-bottom: 1px solid rgb(241, 240, 240);
        .title-img {
          margin-left: 10px;
          height: 100%;
          display: flex;
          align-items: center;
          img {
            margin-right: 10px;
            width: 38px;
            height: 38px;
            border-radius: 50%;
          }
        }
        .erweima {
          // width: 40px;
          // height: 40px;
          font-size: 0px;
          margin-right: 10px;
          padding: 8px 6px 6px 6px;
          border-radius: 6px;
          background-color: rgb(102, 102, 102);
          text-align: center;
          i {
            font-size: 28px;
            line-height: 28px;
            width: 28px;
            height: 28px;
            text-align: center;
            color: #fff;
          }
        }
      }

      .product-info {
        height: calc(100% - 76px);
        overflow: auto;
        padding: 10px;
        font-size: 32px;

        .pro-detail {
          display: inline-block;
        }
      }
    }
  }
  .bottom {
    position: fixed;
    width: 100%;
    bottom: 0px;
    left: 0px;
    height: 100px;

    background-color: #fff;
  }
}
</style>
<style lang="scss">
.introduce {
  .bottom {
    .checkbox {
      padding: 0px;
      margin-top: 0px;
      .v-input__control {
        height: 100%;
      }
      .v-label {
        color: #333 !important;
      }
      .v-input__slot {
        height: 100px;
        margin-bottom: 0px;
        margin-left: 30px;
        line-height: 100px;
      }
    }
    .btn {
      position: absolute;
      top: 0px;
      bottom: 0px;
      margin: auto 0;
      right: 30px;
      border-radius: 8px;
    }
  }
}
</style>