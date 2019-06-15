<template>
  <div class="authentication">
    <div class="content-head">
      <div class="title">
        <p></p>
        <span>会员实名认证</span>
      </div>
    </div>
    <div class="content-foot">
      <div class="content-form">
        <div class="form">
          <v-form>
            <v-text-field v-model="name" label="请输入真实姓名" required></v-text-field>
            <v-text-field v-model="IDcode" label="请输入真实身份证号码" required></v-text-field>
            <div class="phone">
              <v-text-field v-model="mobile" label="请输入手机号" required></v-text-field>
              <v-btn color="primary" round depressed class="code-btn">获取验证码</v-btn>
            </div>
            <v-text-field v-model="code" label="请输入验证码" required></v-text-field>
          </v-form>
        </div>
      </div>
      <div class="content-tip">
        <ul>
          <li>* 请务必完成个人信息实名认证，便于线下活动签到和交流;</li>
          <li>* 用户信息和隐私我们承诺绝不向外泄密。</li>
        </ul>
      </div>
      <div class="content-btn">
        <v-btn class="btn" color="primary" round depressed large @click="finishName">完成实名认证</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Authentication",
  data() {
    return {
      name: "", // 姓名
      IDcode: "", // 身份证号
      mobile: "", // 手机号
      code: "" // 验证码
    };
  },
  methods: {
    finishName() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.content-head {
  padding: 50px 0 0 30px;
  height: 540px;
  background-color: $bg-color;
  color: #fff;
  .title {
    display: flex;
    align-content: center;
    p {
      margin-right: 10px;
      width: 10px;
      height: 35px;
      border-radius: 5px;
      background-color: #fff;
    }
    span {
      font-size: 35px;
    }
  }
}
.content-foot {
  .content-form {
    margin-top: -300px;
    padding: 0 30px;
    .form {
      overflow: hidden;
      padding: 60px;
      background-color: #fff;
      border-radius: 6px;
      font-size: 30px;
      .ipt-one {
        position: relative;
        .code-btn {
          position: absolute;
          right: 0px;
          top: 0px;
          margin-right: 0px;
          @include gradient-bg;
        }
      }
    }
  }
  .content-tip {
    margin: 40px 0 0 40px;
    color: grey;
    font-size: 25px;
  }
  .content-btn {
    margin-top: 50px;
    padding: 0 30px;
    text-align: center;
    .btn {
      width: 100%;
      margin-left: 0;
      margin-right: 0;
    }
  }
}
</style>