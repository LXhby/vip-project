<template>
  <div class="pay-page">
    <form-preview
      header-label="付款金额"
      :header-value="amount"
      :body-items="list"
      :footer-buttons="buttons"
    ></form-preview>
    <v-snackbar v-model="snackbar" :timeout="2000" color="success" top>支付成功</v-snackbar>
  </div>
</template>

<script>
import FormPreview from "@/component/form-preview/index";
import { ProdById, paymentstart } from "@/api/index";
export default {
  components: {
    FormPreview
  },
  data() {
    return {
      order: {},
      amount: "¥0.00",
      list: [
        {
          label: "商品",
          value: "电动打蛋机"
        },
        {
          label: "标题标题",
          value: "名字名字名字"
        },
        {
          label: "标题标题",
          value:
            "很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字"
        }
      ],
      params: {},
      buttons: [
        {
          style: "primary",
          text: "微信支付",
          onButtonClick: name => {
            this.requestPayment("微信支付");
          }
        }
      ],
      snackbar: false
    };
  },
  mounted() {
    console.log("this.$", this.$wechat);
    this.$wechat.ready(() => {
      console.log(1);
      this.params = JSON.parse(window.localStorage.getItem("payment"));
      this.fetchData();
      // todoing
    });
  },
  methods: {
    requestPayment(means) {
      console.log("支付");
      if (means == "微信支付") {
        const info = {
          type: this.params.type,
          id: this.params.id,
          means: means
        };
        // todoing
        paymentstart(info).then(res => {
          const data = response.data;
          this.$wechat.chooseWXPay({
            timestamp: data.timestamp,
            nonceStr: data.nonceStr,
            package: data.package,
            signType: data.signType,
            paySign: data.paySign, // 支付签名
            success: res => {
              this.snackbar = true;
              const id = this.params.id;
              window.localStorage.removeItem("payment");
              this.$router.push({ name: "success", params: { id: id } });
            }
          });
        });
      }
    },
    fetchData() {
      if (this.params.type == "MEMBER_ORDER") {
        ProdById(this.params.id).then(res => {
          const { membership } = res.data;

          console.log("membership", membership);
          this.list = [
            { label: "交易类型", value: "订单消费" },
            { label: "产品名称", value: membership.name },
            { label: "产品简介", value: membership.summary }
          ];
          this.amount = "￥" + membership.price;
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pay-page {
  height: 100%;
}
</style>