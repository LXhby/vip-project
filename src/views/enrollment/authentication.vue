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
          <v-form v-model="valid">
            <v-text-field
              v-model="name"
              placeholder="请输入真实姓名"
              required
              :rules="[v => !!v || '请输入真实姓名']"
            ></v-text-field>
            <v-text-field v-model="IDcode" placeholder="请输入真实身份证号码" required :rules="idsnValidate"></v-text-field>
            <div class="phone">
              <v-text-field v-model="mobile" placeholder="请输入手机号"></v-text-field>
              <v-btn color="primary" round depressed class="code-btn">获取验证码</v-btn>
            </div>
            <v-text-field v-model="code" placeholder="请输入验证码"></v-text-field>
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
import { getMobile } from "@/api/certification";
import { mapGetters } from "vuex";
function isIdCardNo(idCard) {
  //15位和18位身份证号码的正则表达式
  var regIdCard = /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if (regIdCard.test(idCard)) {
    if (idCard.length == 18) {
      var idCardWi = new Array(
        7,
        9,
        10,
        5,
        8,
        4,
        2,
        1,
        6,
        3,
        7,
        9,
        10,
        5,
        8,
        4,
        2
      ); //将前17位加权因子保存在数组里
      var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
      for (var i = 0; i < 17; i++) {
        idCardWiSum += idCard.substring(i, i + 1) * idCardWi[i];
      }
      var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
      var idCardLast = idCard.substring(17); //得到最后一位身份证号码

      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == "X" || idCardLast == "x") {
          return true;
        } else {
          return false;
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast == idCardY[idCardMod]) {
          return true;
        } else {
          return false;
        }
      }
    }
  } else {
    //alert("身份证格式不正确!");
    return false;
  }
}
export default {
  name: "Authentication",
  computed: {
    ...mapGetters(["userInfo"])
  },
  data() {
    return {
      name: "", // 姓名
      IDcode: "", // 身份证号
      mobile: "", // 手机号
      code: "", // 验证码
      valid: false,
      idsnValidate: [
        v => !!v || "请输入身份证号",
        v => isIdCardNo(v) || "身份证格式不正确"
      ]
    };
  },
  created() {
    // 获取手机号
    this.mobile = this.userInfo.mobile;
  },
  methods: {
    finishName() {
      if (this.valid) {
      } else {
        return false;
      }
    }
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
      margin-left: 8px;
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