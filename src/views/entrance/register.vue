<template>
  <div class="enter-regist">
    <div class="hd">
      <img
        src="http://dfiles.speiyou.com/img/2018/03/02/201545_5a994071e1d26.jpg"
        alt
        class="hd-bg"
      >
      <div class="hd-detail">
        <div class="img fl">
          <img src="../../assets/avatar.png" alt>
        </div>
        <p class="detail-text fl">王*文购买了学习型中国会员</p>
      </div>
    </div>
    <div class="main">
      <div class="bd">
        <v-form>
          <div class="ipt-one">
            <v-text-field v-model="mobile" label="请输入手机号" required></v-text-field>
            <v-btn color="primary" round depressed class="code-btn">获取验证码</v-btn>
          </div>

          <v-text-field v-model="code" label="请输入验证码" required></v-text-field>
          <v-btn color="primary" round depressed @click="regist" large class="regist-btn">注册会员</v-btn>
        </v-form>
      </div>
    </div>
    <div class="footer">版权所有由后台设置</div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      mobile: "",
      code: ""
    };
  },
  methods: {
    regist() {}
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
      display: inline-block;
      padding: 12px;
      background-color: $bg-yellow;
      font-size: 24px;
      color: #fff;
      border-radius: 30px;
      .img {
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