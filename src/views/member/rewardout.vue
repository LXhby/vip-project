<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="title">
        <p></p>
        <span>提现申请</span>
      </div>
      <div class="content">
        <v-text-field class="input" v-model="money" label="请输入提现金额，最高不能高于20000元" required></v-text-field>
        <div class="choose">
          <v-radio-group class="radio" v-model="radioGroup">
            <v-radio :label="`微信钱包`"></v-radio>
          </v-radio-group>
          <v-radio-group class="radio" v-model="radioGroup">
            <v-radio :label="`银行卡`"></v-radio>
          </v-radio-group>
        </div>
        <div class="btn">
          <v-layout row justify-center>
            <v-dialog v-model="dialog" persistent max-width="250">
              <template v-slot:activator="{ on }">
                <v-btn
                  color="primary"
                  round
                  depressed
                  @click="request"
                  medium
                  class="request-btn"
                  v-on="on"
                >提现申请</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">
                  <div class="headline-title">
                    <p></p>
                    <span>提现确认</span>
                  </div>
                  <div class="total-money">
                    <p>余额:</p>
                    <span>5800.00</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-card-text>
                    <div class="money-content">
                      <p>
                        <span class="left">提现金额</span>
                        <span class="right">￥9000.00</span>
                      </p>
                      <p>
                        <span class="left">提现手续费</span>
                        <span class="right">￥180.00</span>
                      </p>
                      <p>
                        <span class="left">个人所得税</span>
                        <span class="right">￥380.00</span>
                      </p>
                      <p>
                        <span class="left">下次提现时间</span>
                        <span class="right">2019.6.8</span>
                      </p>
                    </div>
                    <div class="money-time">
                      <p>到账金额</p>
                      <span>￥8640.00</span>
                    </div>
                  </v-card-text>
                </v-card-actions>
                <div class="money-btn">
                  <v-btn
                    color="primary"
                    round
                    depressed
                    @click="dialog=false"
                    small
                    class="request-btn"
                    v-on="on"
                  >提现申请</v-btn>
                </div>
              </v-card>
            </v-dialog>
          </v-layout>
        </div>
      </div>
      <div class="tips">
        <p>* 提现周期为3天，每天最高提现额为微信支付限额;</p>
        <p>* 提现申请后财务会在1个工作日内审核，到账时间24小时内;</p>
        <p>* 提现需要扣除微信提现手续费和个人所得税;</p>
        <p>* 如您在提现过程中遇到问题可致电010-888888（后台设置）;</p>
      </div>
    </div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    MemberDetail,
    CommonBottom
  },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.main {
  .title {
    display: flex;
    align-items: center;
    padding: 30px 0 0 0;
    p {
      margin-left: 10px;
      margin-right: 14px;
      width: 8px;
      height: 30px;
      border-radius: 4px;
      background-color: $bg-color;
    }
    span {
      color: $text-gray-color;
      font-size: 30px;
    }
  }
  .content {
    padding: 0 20px;
    .choose {
      display: flex;
      align-items: center;
      .radio {
        margin: 0;
        padding: 0;
      }
    }
    .btn {
      text-align: center;

      .request-btn {
        width: 500px;
        margin-left: 0px;
        margin-right: 0px;
        font-size: 30px;
      }
    }
  }
  .tips {
    padding: 30px 20px;
  }
}
.v-card {
  .headline {
    padding: 10px 20px;
    border-bottom: 2px solid $bg-gray;
    display: flex;
    justify-content: space-between;
    .headline-title {
      display: flex;
      align-items: center;
      p {
        margin-right: 14px;
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: $bg-color;
      }
      span {
        color: $bg-color;
        font-size: 30px;
      }
    }
    .total-money {
      display: flex;
      align-items: center;
      margin-top: 10px;
      font-size: 20px;
      p {
        margin-right: 14px;
      }
    }
  }
  .v-card__text {
    padding: 0 40px;
    .money-content {
      padding-bottom: 20px;
      border-bottom: 2px solid $bg-gray;
      p {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 0;
        .right {
          color: $bg-color;
        }
      }
    }
    .money-time {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 10px;
      span {
        color: $bg-color;
      }
    }
  }
  .money-btn {
    padding: 20px 0;
    text-align: center;
    .request-btn {
      width: 300px;
      height: 40px;
      margin-left: 0px;
      margin-right: 0px;
      font-size: 20px;
    }
  }
}
</style>