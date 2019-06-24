<template>
  <div class="pay-page">
    <form-preview
      header-label="付款金额"
      :header-value="amount"
      :body-items="list"
      :footer-buttons="buttons"
    ></form-preview>
  </div>
</template>

<script>
import FormPreview from "@/component/form-preview/index";
import { ProdById } from "@/api/index";
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
      ]
    };
  },
  mounted() {
    console.log("this.$", this.$wechat);
    this.$wechat.ready(() => {
      console.log(1);
      this.params = JSON.parse(window.localStorage.getItem("payment"));
      this.fetchData();
    });
  },
  methods: {
    requestPayment(means) {},
    fetchData() {
      ProdById(this.params.id).then(res => {
        console.log("res", res);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.pay-page {
  height: 100%;
}
</style>