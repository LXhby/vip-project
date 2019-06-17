<template>
  <div class="introduce">
    <div class="bg">
    </div>
    <div class="main">
      <div class="bd">
        <div class="bd-title">
          <div class="title-img">
            <p></p>
            <span>王*文购买了学习型中国会员</span>
          </div>
          <v-icon></v-icon>
        </div>
        <div class="product-info">
          <p>已成为会员显示底部菜单</p>
        </div>
      </div>
    </div>
    <CommonBottom></CommonBottom>
  </div>
</template>

<script>
import CommonBottom from "@/component/common_bottom";
export default {
  components: {
    CommonBottom
  },
  data() {
    return {
      bottomNav: "recent"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.introduce {
  height: 100%;
  background-color: rgb(250, 250, 250);
  .bg {
    height: 420px;
    background-color: $bg-color;
  }
  .main {
    padding: 0 30px;
    margin-top: -80px;
    .bd {
      padding: 30px 20px;
      height: 850px;
      border-radius: 6px;
      background-color: #fff;
      .bd-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 0 20px 0;
        border-bottom: 1px solid rgb(241, 240, 240);
        .title-img {
          display: flex;
          align-items: center;
          p {
            margin-right: 14px;
            width: 36px;
            height: 36px;
            border-radius: 50%;
            background-color: gray;
          }
        }
      }
      .product-info {
        margin-top: 300px;
        text-align: center;
        font-size: 30px;
        color: $bg-color;
      }
    }
  }
}
</style>