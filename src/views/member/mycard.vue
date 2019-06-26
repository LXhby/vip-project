<template>
  <div class="padding-20 my-card-page">
    <member-detail></member-detail>
    <div class="main" v-if="(item, index) in items" :key="index">
      <div class="hg">
        <div class="top">
          <div class="herald-title">
            <p></p>
            <span>企业简介</span>
          </div>
          <div class="content">
            <p>{{item.introduction}}</p>
          </div>
        </div>
        <div class="medium">
          <div class="herald-title">
            <p></p>
            <span>企业内容</span>
          </div>
          <div class="content">
            <p>
              {{item.service}}
            </p>
          </div>
        </div>
        <div class="bottom">
          <div class="herald-title">
            <p></p>
            <span>图片展示</span>
          </div>
          <div class="imgs" v-for="(img, index) in item.images" :key="index">
            <img :src="img">
          </div>
        </div>
      </div>
    </div>
    <div style="height:57px;"></div>
    <common-bottom></common-bottom>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MemberDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import { getCard } from "@/api/member";
export default {
  components: {
    MemberDetail,
    CommonBottom
  },
  computed: {
    ...mapGetters(["id"])
  },
  data() {
    return{
      items: [],
    }
  },
  created() {
    getCard(this.id)
      .then(res => {
        const { data } = response;
        const { items } = data;
        this.items = items
      })
      .catch(console.log);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.my-card-page {
  padding-bottom: 0px;
}
.main {
  margin-top: 45px;
  margin-bottom: 50px;
  .hg {
    padding: 35px;
    border: 2px solid $bg-color;
    border-radius: 10px;
    .herald-title {
      display: flex;
      align-items: center;
      padding-bottom: 20px;
      border-bottom: 2px solid whitesmoke;
      p {
        margin-left: 8px;
        margin-right: 10px;
        width: 8px;
        height: 30px;
        border-radius: 4px;
        background-color: $bg-color;
      }
      span {
        color: $bg-color;
        font-size: 32px;
        font-weight: normal;
      }
    }
    .content {
      margin: 15px 0 45px 0;
      font-size: 24px;
      color: #666;
      p {
        margin-bottom: 10px;
        line-height: 36px;
      }
    }
    .bottom {
      .imgs {
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
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