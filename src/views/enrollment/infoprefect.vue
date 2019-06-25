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
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              v-model="form.company"
              placeholder="请输入公司名称"
              required
              :rules="[v => !!v || '请输入公司名称']"
            ></v-text-field>
            <v-text-field
              v-model="form.post"
              placeholder="请输入现任职务"
              required
              :rules="[v => !!v || '请输入现任职务']"
            ></v-text-field>
            <v-select
              v-model="form.industry"
              :items="industry"
              :rules="[v => !!v || '请选择行业分类']"
              placeholder="请选择行业分类"
              required
            ></v-select>
            <v-select
              v-model="form.company_levels"
              :items="company"
              :rules="[v => !!v || '请选择公司规模']"
              placeholder="请选择公司规模"
              required
            ></v-select>
            <div class="select-city">
              <div class="select-box">
                <div>
                  <span>所在地区</span>
                </div>
                <div>
                  <div class="city" @click="toAddress">{{city}}</div>
                  <i class="arrow-r"></i>
                </div>
              </div>
              <div class="city-picker" v-show="addInp">
                <v-distpicker type="mobile" @selected="selected"></v-distpicker>
              </div>
            </div>
            <v-text-field
              v-model="form.introduction"
              placeholder="请输入企业简介"
              required
              :rules="[v => !!v || '请输入企业简介']"
            ></v-text-field>
            <v-text-field
              v-model="form.service"
              placeholder="请输入服务内容"
              required
              :rules="[v => !!v || '请输入服务内容']"
            ></v-text-field>
            <div class="addImg" @click="chooseImage">
              <span>请上传展示图片（最多3张）</span>
              <i class="iconfont icon-xiangji" style="font-size:20px;line-height:20px;"></i>
            </div>
          </v-form>

          <div class="getImg">
            <div class="temp-pic clearfix" v-for="(attach, key) in history" :key="attach.id">
              <v-img class="show-img" src="https://picsum.photos/510/300?1" aspect-ratio="1"></v-img>
              <!-- <img :src="attach.filepath" alt> -->
              <i
                class="iconfont icon-shanchu"
                @click="deleteImg(attach, key)"
                style="line-height:16px;"
              ></i>
            </div>
          </div>
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
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-text>确定要删除吗？</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat @click="dialog = false">取消</v-btn>
          <v-btn color="green darken-1" flat @click="deleteYes">同意</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <div class="mask" v-show="mask"></div>
  </div>
</template>

<script>
import {
  systemCompany,
  systemindustry,
  downloadimage
} from "@/api/certification";
import defaultImage from "@/assets/image.jpg";
import VDistpicker from "v-distpicker";
export default {
  name: "Infoprefect",
  data() {
    return {
      name: "", // 姓名
      valid: false,
      form: {
        company: "",
        post: "",
        industry: "",
        company_levels: "",
        introduction: "",
        service: ""
      },
      industry: [],
      company: [],
      addInp: false,
      mask: false,
      city: "请选择",
      images: [],
      history: [
        {
          filepath: ""
        },
        {
          filepath: ""
        },
        {
          filepath: ""
        }
      ],
      dialog: false,
      deleteImgIndex: null
    };
  },
  components: { VDistpicker },
  created() {
    systemCompany().then(res => {
      this.company = res.data;
    });
    systemindustry().then(res => {
      this.industry = res.data;
    });
  },
  methods: {
    finishBusiness() {
      if (this.$refs.form.validate()) {
      } else {
        return false;
      }
    },
    toAddress() {
      this.mask = true;
      this.addInp = true;
    },
    selected(data) {
      this.mask = false;
      this.addInp = false;
      this.city =
        data.province.value + " " + data.city.value + " " + data.area.value;
      this.mask = false;
      this.addInp = false;
    },
    chooseImage() {
      this.$wechat.chooseImage({
        count: 3,
        sizeType: ["compressed"], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
        success: async res => {
          console.log(res.localIds);
          try {
            for (let index = 0; index < res.localIds.length; index++) {
              const serverId = res.localIds[index];
              await this.uploadImage(serverId);
            }
          } catch (error) {
            console.log(error);
          }
        }
      });
    },
    uploadImage(serverId) {
      return new Promise((resolve, reject) => {
        this.$wechat.uploadImage({
          localId: serverId,
          isShowProgressTips: 1,
          success: res => {
            var serverId = res.serverId; // 返回图片的服务器端ID
            downloadimage(serverId)
              .then(response => {
                this.images.push({
                  serverId: serverId,
                  src: response.data
                });
                this.updateValue(this.images);
                resolve();
              })
              .catch(error => {
                console.log(error);
                reject(error);
              });
          }
        });
      });
    },
    updateValue: function(value) {
      if (value === null) value = defaultImage;
      console.log("value", value);
    },
    deleteImg(item, index) {
      this.deleteImgIndex = index;
      this.dialog = true;
    },
    deleteYes() {
      console.log(this.deleteImgIndex);
      this.history.splice(this.deleteImgIndex, 1);
      this.dialog = false;
    }
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
  .select-city {
    .select-box {
      display: flex;
      font-size: 32px;
      justify-content: space-between;
      span {
        color: #999;
      }
      .city {
        color: #999;
      }
    }

    .city-picker {
    }
  }
  .addImg {
    display: flex;
    color: #999;
    justify-content: space-between;
  }
  .getImg {
    margin-top: 20px;
    width: 100%;
    .temp-pic {
      position: relative;
      width: 30%;
      float: left;
      &:nth-child(1) {
        margin-right: 5%;
      }
      &:nth-child(2) {
        margin-right: 5%;
      }
      .icon-shanchu {
        position: absolute;
        color: red;
        top: 0px;
        right: 0;
        background: #fff;
      }
    }
  }
  .mask {
    display: block;
    opacity: 1;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>
<style lang="scss">
.infoprefect {
  .distpicker-address-wrapper {
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    height: 400px;
    background-color: #fff;
    z-index: 3;

    .address-header {
      height: 88px;
    }
    .address-container {
      overflow: auto;
      height: 312px;
    }
  }
  .page-dialog {
    background: #fff;
  }
}
</style>
