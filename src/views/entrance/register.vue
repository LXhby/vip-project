<template>
  <div class="enter-regist">
    <div class="hd">
      <div class="hd-detail">
        <div class="img fl">
          <img src alt>
        </div>

        <p class="detail-text fl">王*文购买了学习型中国会员</p>
      </div>
    </div>
    <div class="main">
      <div class="bd">
        <v-form v-model="valid">
          <v-text-field v-model="mobile" label="请输入手机号" required></v-text-field>

          <v-text-field v-model="code" label="请输入验证码" required></v-text-field>
          <v-btn color="primary" round depressed @click="regist">注册会员</v-btn>
        </v-form>
      </div>
    </div>
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
@import "@/style/px2rem.scss";
@import "@/style/public.scss";
$designWidth: 750;
.enter-regist {
  width: px2rem(750);

  .hd {
    padding: px2rem(30);
    height: px2rem(640);
    background: $bg-color;
    .hd-detail {
      display: inline-block;
      padding: px2rem(14);
      background-color: $bg-yellow;
      font-size: px2rem(24);
      color: #fff;
      border-radius: px2rem(30);
      .img {
        width: px2rem(36);
        height: px2rem(36);
        margin-right: px2rem(16);
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }
  .main {
    margin-top: px2rem(-168);
    padding: 0 px2rem(30);

    .bd {
      overflow: hidden;
      padding: px2rem(60);
      background-color: #fff;
      border-radius: px2rem(6);
      .v-form {
        font-size: px2rem(24);
        .v-label {
          font-size: px2rem(24);
        }
      }
    }
  }
}
</style>