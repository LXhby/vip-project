<template>
  <div class="infoprefect">
    <div class="content-head">
      <div class="nav-title">
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
            <div
              class="select-city"
              style="margin-bottom:8px;padding-top:12px;margin-top:4px;line-height:32px;"
            >
              <div class="select-box">
                <div>
                  <span style="font-size:16px;">所在地区</span>
                </div>
                <div>
                  <div class="city" @click="toAddress" style="font-size:16px;">{{city}}</div>
                  <i class="arrow-r"></i>
                </div>
              </div>

              <div class="city-picker" v-show="addInp">
                <v-distpicker type="mobile" @selected="selected"></v-distpicker>
              </div>
            </div>
            <span style="font-size: 12px;color:#b71c1c;" v-show="areaErro">{{errText}}</span>
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
            <div class="addImg" @click="chooseImage" style="margin-top:4px;padding-top:12px;">
              <span>{{imgTitle}}</span>
              <i class="iconfont icon-xiangji" style="font-size:20px;line-height:20px;"></i>
            </div>
            <span style="font-size: 12px;color:#b71c1c;" v-show="imgErro">请上传图片</span>
          </v-form>

          <div class="getImg">
            <div class="temp-pic clearfix" v-for="(attach, key) in history" :key="attach.id">
              <v-img class="show-img" :src="baseUrl+attach.src" aspect-ratio="1"></v-img>
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
  downloadimage,
  newMemberInfo
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
        service: "",
        province: "",
        city: "",
        district: ""
      },
      industry: [],
      company: [],
      addInp: false,
      mask: false,
      city: "请选择",
      errText: "请输入所在地区",
      images: [],
      history: [],
      dialog: false,
      deleteImgIndex: null,
      imgTitle: "请上传展示图片（最多3张）",
      imgErro: false,
      areaErro: false,
      id: ""
    };
  },
  components: { VDistpicker },
  created() {
    this.id = this.$route.params.id * 1;
    console.log("id", this.id);
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
        if (!this.history.length) {
          this.imgErro = true;
        }
        if (this.checkArea()) {
          const images = [];
          this.history.forEach(item => {
            images.push(item.src);
          });
          console.log("images", images);
          const obj = {
            images: images
          };
          const info = Object.assign(this.form, obj);
          console.log("info", info);
          newMemberInfo(this.id, info).then(res => {
            this.$router.push({ name: "Buyer" });
          });
        }
      } else {
        if (!this.history.length) {
          this.imgErro = true;
        }
        this.checkArea();
        return false;
      }
    },
    checkArea() {
      console.log("99", this.city);
      if (this.city == "请选择") {
        this.areaErro = true;
        this.errText = "请输入所在地区";
        return false;
      }
      if (!this.form.province) {
        this.areaErro = true;
        this.errText = "请输入省份";
        return false;
      }
      if (!this.form.city) {
        this.areaErro = true;
        this.errText = "请输入城市";
        return false;
      }
      if (!this.form.district) {
        this.areaErro = true;
        this.errText = "请输入地区";
        return false;
      }
      this.areaErro = false;
      return true;
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
      this.form.province = data.province.value;
      this.form.city = data.city.value;
      this.form.district = data.area.value;
      this.mask = false;
      this.addInp = false;
    },
    chooseImage() {
      if (this.history.length >= 3) {
        return false;
      }
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
      console.log("imgvalue", value);
      this.history = value;
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
    .nav-title {
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
        line-height: 30px;
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
    position: relative;
    padding-bottom: 14px;
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 2px;
      border-bottom: 2px solid #e1e1e1;
      color: #d5d5d6;
    }
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
