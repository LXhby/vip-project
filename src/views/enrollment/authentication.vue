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
.authentication {
  height: 100%;
  background-color: rgb(244, 244, 244);
  .content-head {
    padding: 45px 0 0 20px;
    height: 420px;
    background-color: $bg-color;
    color: #fff;
    .title {
      margin-left: 7px;
      display: flex;
      align-content: center;
      p {
        margin-right: 10px;
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: #fff;
      }
      span {
        font-size: 32px;
      }
    }
  }
  .content-foot {
    .content-form {
      margin-top: -307px;
      padding: 0 20px;
      .form {
        overflow: hidden;
        padding: 32px 65px 40px 65px;
        background-color: #fff;
        border-radius: 6px;
        font-size: 30px;
        .phone {
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
      margin: 28px 0 50px 45px;
      color: $color;
      font-size: 24px;
    }
    .content-btn {
      padding: 0 32px;
      margin-bottom: 58px;
      text-align: center;
      .btn {
        width: 100%;
        margin: 0px;
      }
    }
  }
}
</style>