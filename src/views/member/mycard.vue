<template>
  <div class="padding-20">
    <member-detail></member-detail>
    <div class="main">
      <div class="hg">
        <div class="top">
          <div class="title">
            <p></p>
            <span>企业简介</span>
          </div>
          <div class="content">
            <p>
              北京托客云科技有限公司是一支有理想、有智慧、有责任、有经验的
              “四有青年”团队，拥有多年丰富的互联网从业和运营经验，强大有力
              的技术团队是我们为中小企业提供服务的智慧动力和坚实后盾。
            </p>
            <p>
              我们坚持以客户为中心，以市场为导向，以有效为真理的服务宗旨，致
              力于为中小企业提供模式裂变和运营服务，解决中小企业客观困难和运
              营变现难的二大核心痛点问题。
            </p>
          </div>
        </div>
        <div class="medium">
          <div class="title">
            <p></p>
            <span>企业内容</span>
          </div>
          <div class="content">
            <p>
              我们坚持以客户为中心，以市场为导向，以有效为真理的服务宗旨，致
              力于为中小企业提供模式裂变和运营服务，解决中小企业客观困难和运
              营变现难的二大核心痛点问题。
            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="title">
            <p></p>
            <span>图片展示</span>
          </div>
          <div class="imgs">
            <img>
            <img>
            <img>
          </div>
        </div>
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
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";

.main {
  padding: 40px 0;
  margin-bottom: 100px;
  .hg {
    padding: 0 30px 30px;
    border: 2px solid $bg-color;
    border-radius: 10px;
    .title {
      display: flex;
      align-items: center;
      padding: 30px 0;
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
    .content{
      font-size: 18px;
      p{
        margin-bottom: 10px;
      }
    }
    .bottom{
      .imgs{
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
          width: 200px;
          height: 300px;
          background-color: rgb(201, 200, 200);
          border-radius: 5px;
        }
      }
    }
  }
}
</style>