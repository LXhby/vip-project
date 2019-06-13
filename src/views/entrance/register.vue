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
        <v-form>
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
@import "@/style/public.scss";

.enter-regist {
  width: 750px;

  .hd {
    padding: 30px;
    height: 640px;
    background: $bg-color;
    .hd-detail {
      display: inline-block;
      padding: 14px;
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
      }
    }
  }
  .main {
    margin-top: -168px;
    padding: 0 30px;

    .bd {
      overflow: hidden;
      padding: 60px;
      background-color: #fff;
      border-radius: 6px;
    }
  }
}
</style>