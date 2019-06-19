<template>
  <div class="infoprefect">
    <div class="content-head">
      <div class="title">
        <p></p>
        <span>企业信息完善</span>
      </div>
    </div>
    <div class="content-foot">
      <div class="content-form">
        <div class="form">
          <v-form>
            <v-text-field v-model="name" label="请输入公司名称" required></v-text-field>
            <v-text-field v-model="IDcode" label="请输入现任职务" required></v-text-field>
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="请选择行业分类"
              required
            ></v-select>
            <v-select
              v-model="select"
              :items="items"
              :rules="[v => !!v || 'Item is required']"
              label="请选择公司规模"
              required
            ></v-select>
            <v-text-field v-model="IDcode" label="请输入企业简介" required></v-text-field>
            <v-text-field v-model="IDcode" label="请输入服务内容" required></v-text-field>
          </v-form>
        </div>
      </div>
      <div class="content-tip">
        <ul>
          <li>* 企业信息用于会员圈的交流与合作;</li>
          <li>* 企业信息仅用于展示，本公司不承担任何纠纷责任。</li>
        </ul>
      </div>
      <div class="content-btn">
        <v-btn class="btn" color="primary" round depressed large @click="finishBusiness">完成企业信息</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Infoprefect",
  data() {
    return {
      name: "", // 姓名
      IDcode: "", // 身份证号
      mobile: "", // 手机号
      code: "" // 验证码
    };
  },
  methods: {
    finishBusiness() {}
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.infoprefect {
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
      }
    }
    .content-tip {
      margin: 50px 0 50px 45px;
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