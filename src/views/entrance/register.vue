<template>
  <div class="enter-regist">
    <div class="hd">
      <img
        src="http://dfiles.speiyou.com/img/2018/03/02/201545_5a994071e1d26.jpg"
        alt
        class="hd-bg"
      >

      <div class="hd-detail">
        <div class="hd-scroll">
          <marquee>
            <marquee-item v-for="(item,index) in list" :key="index">
              <div class="clearfix text-main">
                <div class="img fl">
                  <img :src="item.user.headimgurl" alt>
                </div>
                <p
                  class="detail-text fl"
                >{{item.member?item.member.realname:item.user.nickname}}购买了{{item.membership.name}}</p>
              </div>
            </marquee-item>
          </marquee>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="bd">
        <v-form v-model="valid" lazy-validation>
          <div class="ipt-one">
            <v-text-field
              v-model="form.mobile"
              placeholder="请输入手机号"
              required
              :rules="mobileRules"
              clearable
            ></v-text-field>
            <v-btn
              color="primary"
              round
              depressed
              class="code-btn"
              :disabled="btnDisabled"
              @click.native="sendVerifycode()"
            >{{btnText}}</v-btn>
          </div>

          <v-text-field v-model="form.code" placeholder="请输入验证码" required :rules="codeRules"></v-text-field>
          <v-btn color="primary" round depressed @click="regist" large class="regist-btn">注册会员</v-btn>
        </v-form>
        <v-snackbar v-model="snackbar" :timeout="2000" color="success" top>注册成功</v-snackbar>
      </div>
    </div>
    <div class="footer">版权所有由后台设置</div>
  </div>
</template>

<script>
import Marquee from "@/component/marquee/marquee";
import MarqueeItem from "@/component/marquee/marquee-item";
import Cookies from "js-cookie";
import {
  getCode,
  activateVip,
  checkmemberorders,
  getmember_order
} from "@/api/index";
import { mapGetters } from "vuex";
export default {
  name: "Register",
  components: {
    Marquee,
    MarqueeItem
  },
  computed: {
    ...mapGetters(["userInfo", "openid", "config_id", "subscribe_at"])
  },
  data() {
    return {
      list: [],
      form: {
        mobile: "",
        code: ""
      },
      valid: false,
      btnText: "获取验证码",
      timer: null,
      btnDisabled: false,
      mobileRules: [
        v => !!v || "请填写手机号",
        v => v.length == 11 || "请输入正确的手机号"
      ],
      codeRules: [
        v => !!v || "请填写验证码",
        v => v.length == 6 || "请填写6位数验证码"
      ],
      snackbar: false
    };
  },
  methods: {
    regist() {
      if (this.valid) {
        const info = {
          mobile: this.form.mobile.trim()
        };
        activateVip(this.userInfo.id, info).then(res => {
          this.snackbar = true;
          //判断有没有订单  跳转路由



          checkmemberorders(this.userInfo.id).then(res => {
            if (res.data.items.length) {
              //有订单跳会员详情
              this.$router.push({ name: "Buyer" });
            } else {
              this.$router.push({ name: "Introduce" });
            }
          });
          this.$router.push({ name: "Introduce" });
        });
      }
    },
    startTimer() {
      this.btnDisabled = true;
      let seconds = 60;
      this.timer = setInterval(() => {
        seconds--;
        this.btnText = seconds + "秒";
        if (seconds <= 0) {
          clearInterval(this.timer);
          this.btnText = "重发验证码";
          this.btnDisabled = false;
        }
      }, 1000);
    },
    sendVerifycode() {
      if (!this.form.mobile || this.form.mobile.length != 11) {
        return false;
      } else {
        this.startTimer();
        getCode({
          mobile: this.form.mobile
        })
          .then(response => {
            if (response.data.success) {
              this.startTimer();
            } else {
              // this.$vux.toast.text(response.data.message);
            }
          })
          .catch(error => {
            console.log(error);
            // this.$vux.toast.text(error.response.data.message);
          });
      }
    }
  },
  created() {
    console.log('created+de+rele+re2+f3+re2.1+re3')
    getmember_order().then(res => {
      this.list = res.data.items;
    })
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.enter-regist {
  width: 750px;
  height: 100%;
  background: rgb(241, 241, 241);

  .hd {
    width: 100%;
    height: 640px;
    background-color: $bg-color;
    .hd-bg {
      width: 100%;
      height: 100%;
    }
    .hd-detail {
      position: absolute;
      top: 30px;
      left: 30px;
      width: 380px;
      height: 60px;
      display: inline-block;
      background-color: $bg-yellow;
      font-size: 24px;
      color: #fff;
      border-radius: 30px;
      .hd-scroll {
        height: 100%;
        padding: 12px;
        .text-main {
          width: 100%;

          p {
            width: calc(100% - 52px);
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .img {
        overflow: hidden;
        width: 36px;
        height: 36px;
        margin-right: 16px;
        border-radius: 50%;
        background-color: #fff;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .main {
    position: relative;
    z-index: 2;
    margin-top: -168px;
    padding: 0 20px;
    .bd {
      overflow: hidden;
      padding: 60px;
      background-color: #fff;
      border-radius: 6px;
      .ipt-one {
        position: relative;
        .v-label {
          font-size: 31.25px !important;
        }
        .code-btn {
          position: absolute;
          right: 0px;
          top: 0px;
          margin-right: 0px;
          @include gradient-bg;
        }
      }

      .regist-btn {
        width: 100%;
        margin-left: 0px;
        margin-right: 0px;
      }
    }
  }
  .footer {
    margin-top: 60px;
    text-align: center;
    color: #999;
    font-size: 32px;
  }
}
</style>