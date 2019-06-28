<template>
  <div class="padding-20 rewardOut-page">
    <member-detail></member-detail>
    <div class="main">
      <page-title title="提现申请"></page-title>

      <v-form v-model="valid" class="main-box" ref="form" lazy-validation>
        <v-text-field
          class="input"
          v-model="money"
          placeholder="请输入提现金额，最高不能高于20000元"
          required
          :rules="[v => !!v || '请输入提现金额']"
        ></v-text-field>
        <v-radio-group class="radio" v-model="radioGroup" row required>
          <v-radio :label="`微信钱包`" color="primary" value="weixin"></v-radio>
          <v-radio :label="`银行卡`" color="primary" value="bank"></v-radio>
        </v-radio-group>
        <v-btn color="primary" round depressed @click="settle" medium class="request-btn">提现申请</v-btn>
      </v-form>
      <div v-show="hasChoose">
        <p>{{choseBank.bank}}</p>
        <v-btn @click.native="showChoose()">更换</v-btn>
      </div>
      <div class="tips">
        <p>* 提现周期为3天，每天最高提现额为微信支付限额;</p>
        <p>* 提现申请后财务会在1个工作日内审核，到账时间24小时内;</p>
        <p>* 提现需要扣除微信提现手续费和个人所得税;</p>
        <p>* 如您在提现过程中遇到问题可致电010-888888（后台设置）;</p>
      </div>
    </div>

    <!-- 提现弹窗 -->
    <v-dialog v-model="dialog" persistent max-width="250">
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
            @click.native="settle()"
            small
            class="request-btn"
          >提现申请</v-btn>
        </div>
      </v-card>
    </v-dialog>

    <!-- 添加银行卡弹窗 -->
    <v-bottom-sheet v-model="sheet">
      <div class="bo-sheet-bank">
        <h3>添加提现银行卡</h3>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="formdata.name"
            :rules="[v => !!v || '请输入姓名']"
            placeholder="持卡人"
            required
          ></v-text-field>

          <v-text-field v-model="formdata.number" placeholder="卡号" required></v-text-field>

          <v-select :items="banks" placeholder="开户银行" v-model="formdata.bank" required></v-select>
          <v-btn color="warning" @click="submitBank">提交</v-btn>
        </v-form>
      </div>
    </v-bottom-sheet>

    <!-- 选择银行卡弹窗 -->
    <v-bottom-sheet v-model="bankSelect" persistent>
      <div class="bo-sheet-bank">
        <v-subheader>选择银行卡</v-subheader>
        <v-list>
          <v-list-tile v-for="(item,index) in myBank" :key="index" @click="handlechose(item)">
            <v-list-tile-title>{{item.bank}}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </div>
    </v-bottom-sheet>
    <common-bottom></common-bottom>
    <v-snackbar v-model="snackbar" :timeout="2000" :color="alerttype" top>{{alerttext}}</v-snackbar>
  </div>
</template>

<script>
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import { getBank, checkBank, addBank } from "@/api/member";
import { mapGetters } from "vuex";
export default {
  components: {
    MemberDetail,
    CommonBottom,
    PageTitle
  },
  data() {
    return {
      dialog: false,
      money: "",
      radioGroup: "",
      sheet: false,
      valid: false,
      formdata: {
        name: "",
        number: "",
        bank: ""
      },
      banks: [],
      btnText: "提现申请",
      alerttext: "",
      snackbar: false,
      bankSelect: false,
      alerttype: "",
      addCard: false,
      myBank: [],
      choseBank: {},
      hasChoose: false //是否选择银行卡
    };
  },
  computed: {
    ...mapGetters(["id"])
  },
  created() {
    getBank().then(res => {
      console.log(res);
      for (let i in res.data) {
        this.banks.push(i);
      }
      console.log("this.bank", this.banks);
    });
    //查看是否本人有银行卡
    checkBank(this.id).then(res => {
      const data = res.data.items;
      if (data.length) {
        this.myBank = data;
      } else {
        this.myBank = [];
      }
    });
  },
  watch: {
    radioGroup(val) {
      if (val == "bank") {
        this.showChoose();
      } else {
        this.choseBank = {};
        this.hasChoose = false;
      }
    }
  },
  methods: {
    //点击更换银行卡
    showChoose() {
      if (this.myBank.length) {
        this.bankSelect = true;
      } else {
        this.snackbar = true;
        this.alerttext = "您还没有添加提现银行卡";
        this.alerttype = "error";
        this.sheet = true;
      }
    },
    //点击申请提现
    settle() {
      if (this.$refs.form.validate()) {
        if (this.radioGroup == "bank") {
          if (this.choseBank) {
            console.log(0);
            this.dialog = true;
          }
        }
      } else {
        console.log("no");
        return false;
      }
    },
    //点击选择银行卡
    handlechose(item) {
      this.bankSelect = false;
      this.choseBank = item;
      this.hasChoose = true;
    },
    request() {},
    submitBank() {
      const info = {
        user_id: this.id,
        name: this.formdata.name,
        number: this.formdata.number,
        bank: this.formdata.bank
      };
      console.log("info", info);
      addBank(info).then(res => {
        this.snackbar = true;
        this.alerttype = "success";
        this.alerttext = "添加成功";
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.main {
  .main-box {
    padding: 0 25px;

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
    font-size: 24px;
    color: $text-gray-color;
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
<style lang="scss">
.rewardOut-page {
  .input {
    .v-input__slot {
      &:before {
        border-color: #ddd !important;
      }
    }
    .v-text-field__slot {
      .v-label {
        font-size: 28px;
      }
    }
  }
  .choose {
    .v-input--radio-group__input {
      .v-label {
        font-size: 28px !important;
      }
    }
  }
}
.bo-sheet-bank {
  background-color: #fff;
}
</style>
