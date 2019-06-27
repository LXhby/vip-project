<template>
  <div class="businiss-info-page">
    <div class="header">
      <v-btn small round class="btn1" @click="SearchAllInfo">所有信息</v-btn>
      <v-btn small round class="btn2" @click="SearchMyInfo">我的信息</v-btn>
      <v-btn small class="btn1 fr" @click="dialog = true">信息发布</v-btn>
    </div>
    <div class="padding-20 businiss-box">
      <user-detail></user-detail>
      <div class="main">
        <page-title title="商机服务"></page-title>
        <div class="content">
          <template v-for="(post,index) in postInfo" v-if="postInfo.length">
            <div class="article-item" :key="index">
              <div class="item-head">
                <div class="img-avatar">
                  <img :src="post.user.headimgurl">
                  <div class="user">
                    <p>{{post.member.realname}}</p>
                    <span>{{post.member.company}}</span>
                  </div>
                </div>
                <v-btn
                  small
                  round
                  class="delet-btn"
                  v-if="post.userid == id"
                  @click="handledeleteChat(post.id)"
                >删除</v-btn>
              </div>
              <div class="img-list">
                <p>{{post.content}}</p>
                <v-layout row wrap>
                  <v-flex v-for="(postImg, i) in post.images" :key="`3${i}`" xs4>
                    <img :src="baseUrl + postImg">
                  </v-flex>
                </v-layout>
              </div>
              <div class="user-handle">
                <div class="show-time">
                  <span>{{post.created_at | timeAgo}}</span>

                  <i class="iconfont icon-gengduo1" @click="handelClick(post)"></i>
                </div>
                <div :class="[post.show?'handle-yes':'handle-no','handle-box']">
                  <span class="fl" @click="giveLike(post)">
                    <i class="iconfont icon-aixin1 small-icon"></i>
                    赞
                  </span>
                  <span class="fr" @click="givecome(post)">
                    <i class="iconfont icon-pinglun small-icon"></i>
                    评论
                  </span>
                </div>
              </div>

              <div class="comment">
                <div class="good" v-if="post.likes.length">
                  <v-icon>favorite_border</v-icon>
                  <p>
                    <span v-for="(like,index) in  post.likes" :key="index">{{like.realname}}</span>
                  </p>
                </div>
                <div class="my-comment" v-if="post.comments.length">
                  <div v-for="(com,index) in post.comments" :key="index">
                    <p v-if="com.user_id == id">
                      <span class="name maohao">{{com.realname}}:</span>
                      <span>{{com.content}}</span>
                    </p>
                    <p v-else>
                      <span class="name">{{com.realname}}</span>
                      <span>回复</span>
                      <span class="name maohao">{{memberInfo.realname}}:</span>
                      <span>{{com.content}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <infinite-loading ref="infiniteLoading" @infinite="infiniteHandler" spinner="spiral">
        <span slot="no-more">
          <div class="bottom-tip">-- 我是有底线的 --</div>
        </span>
      </infinite-loading>

      <div style="height:56px;"></div>
    </div>
    <common-bottom></common-bottom>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>信息发布</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="published">发表</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-container>
          <v-flex xs12>
            <v-textarea name="input-7-1" label="这一刻的想法" :value="wechattext" v-model="wechattext"></v-textarea>
          </v-flex>
        </v-container>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex xs4 v-for="(attach, key) in history" class="img-box" :key="key">
              <v-img class="show-img" :src="baseUrl+attach.src" aspect-ratio="1"></v-img>
              <i class="iconfont icon-shanchu" @click="deleteImg(key)" style="line-height:16px;"></i>
            </v-flex>
            <v-flex xs4 class="add-box" @click="chooseImage">
              <div class="addimg"></div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogchat" max-width="290">
      <v-card>
        <v-card-text>确定要删除吗？</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="dialogchat = false">取消</v-btn>

          <v-btn color="green darken-1" flat="flat" @click.native="agreedelete">确定</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-bottom-sheet v-model="sheet">
      <v-layout row wrap class="sheet-box" justify-space-between align-center>
        <v-flex xs10>
          <div style="padding-left:10px;">
            <v-text-field placeholder="评论" v-model="commentText"></v-text-field>
          </div>
        </v-flex>
        <v-flex xs2>
          <button small class="sendBtn fr" @click="sendComment">发送</button>
        </v-flex>
      </v-layout>
    </v-bottom-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserDetail from "@/component/user_detail";
import CommonBottom from "@/component/common_bottom";
import PageTitle from "@/component/page_title";
import InfiniteLoading from "vue-infinite-loading";
import {
  getPost,
  publishWechat,
  deletChat,
  handleLike,
  cancelLike,
  giveComment
} from "@/api/business";
import upimag from "@/assets/image.jpg";
import { downloadimage } from "@/api/certification";
import Moment from "moment";
export default {
  inject: ["reload"],
  components: {
    UserDetail,
    CommonBottom,
    PageTitle,
    InfiniteLoading
  },
  computed: {
    ...mapGetters(["id", "memberInfo"])
  },
  filters: {
    timeAgo(value) {
      var start_date = Moment(value);
      var end_date = Moment();
      var seconds = end_date.diff(start_date, "seconds");
      var mintus = seconds / 60;
      //小时
      var hours = mintus / 60;
      if (hours > 24) {
        return Moment(value).format("YYYY年MM月DD日");
      } else {
        if (hours) {
          return parseInt(hours) + "小时前";
        } else {
          if (mintus) {
            return parseInt(mintus) + "分钟前";
          } else {
            return parseInt(seconds) + "秒前";
          }
        }
      }
    }
  },
  data() {
    return {
      postInfo: [],
      dialog: false,
      dialogchat: false,
      sheet: false,
      history: [],
      images: [],
      wechattext: "",
      deleteid: "",
      commentText: "",
      commentInfo: null,
      chooseid: null
    };
  },
  methods: {
    //删除
    handledeleteChat(id) {
      this.deleteid = id;
      this.dialogchat = true;
    },
    agreedelete() {
      deletChat(this.deleteid).then(res => {
        this.reload();
      });
    },
    //点赞
    handelClick(item) {
      item.show = !item.show;
    },
    giveLike(item) {
      console.log("item", item);
      if (item.likes.length) {
        const ele = item.likes.find(ea => ea.user_id == this.id);
        if (ele) {
          //取消点赞
          const info = {
            post_id: item.id,
            user_id: this.id
          };
          cancelLike(ele.id, info).then(res => {
            item.likes.forEach((dd, index) => {
              if (dd.user_id == this.id) {
                item.likes.splice(index, 1);
                item.show = false;
              }
            });
          });
        } else {
          //添加
          const info = {
            post_id: item.id,
            user_id: this.id
          };
          handleLike(info).then(res => {
            item.likes.push({
              user_id: this.id,
              realname: this.memberInfo.realname
            });
            item.show = false;
          });
        }
      } else {
        //添加
        const info = {
          post_id: item.id,
          user_id: this.id
        };
        handleLike(info).then(res => {
          item.likes.push(res.data);
          item.show = false;
        });
      }
    },
    //评论
    givecome(item) {
      this.commentInfo = item;
      item.show = false;
      this.sheet = true;
    },
    sendComment() {
      if (!this.commentText.trim()) {
        return false;
      }
      const info = {
        post_id: this.commentInfo.id,
        user_id: this.id,
        content: this.commentText.trim()
      };
      giveComment(info).then(res => {
        this.commentInfo.comments.push(res.data);
        this.commentText = "";
        this.sheet = false;
      });
      console.log("this.commentInfo", this.commentInfo);
    },
    published() {
      console.log("this.wechattext", this.wechattext);
      const arr = [];
      this.history.forEach(item => {
        arr.push(item.src);
      });
      const info = {
        content: this.wechattext,
        images: arr,
        user_id: this.id
      };
      if (!info.content && !info.images.length) {
        return false;
      }
      publishWechat(info).then(res => {
        this.dialog = false;
        this.reload();
      });
    },
    deleteImg(index) {
      this.history.splice(index, 1);
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
      console.log("imgvalue", value);
      this.history = value;
    },
    fetchPage($state) {
      const info = {
        chooseid: this.chooseid,
        page: this.page
      };
      getPost(info)
        .then(response => {
          const { data } = response;
          const { items } = data;
          items.forEach(ele => {
            Object.assign(ele, { show: false });

            this.postInfo.push(ele);
          });

          console.log(" this.postInfo", this.postInfo);

          if ($state) {
            if (response.data._meta.pageCount > 0) {
              $state.loaded();
            }
            if (
              response.data._meta.currentPage >= response.data._meta.pageCount
            ) {
              $state.complete();
            }
          }

          this.page++;
        })
        .catch(error => {
          console.log(error);
        });
    },
    infiniteHandler($state) {
      this.fetchPage($state);
    },
    // 查询所有信息
    SearchAllInfo() {
      this.page = 1;
      this.chooseid = null;
      this.postInfo = [];
      this.fetchPage();
    },
    // 查询我的信息
    SearchMyInfo() {
      this.page = 1;
      this.chooseid = this.id;
      this.postInfo = [];
      this.fetchPage();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/public.scss";
.businiss-info-page {
  .header {
    position: fixed;
    z-index: 3;
    width: 100%;
    top: 0px;
    left: 0px;
    padding: 0 20px;
    background-color: $bg-color;
    .v-btn {
      margin: 15px 0;
      min-width: 120px;
      height: 40px;
      line-height: 40px;
      padding: 0px;
      font-size: 24px;
      font-weight: 400;
      background: rgb(255, 205, 158) !important;
      box-shadow: none !important;
    }
    .btn1 {
      color: $bg-color;
    }
    .btn2 {
      margin-left: 32px;
    }
  }
  .businiss-box {
    margin-top: 70px;
  }
  .main {
    .article-item {
      &:nth-child(1) {
        margin-top: 0px;
      }
      &:nth-last-child() {
        border-bottom: 0px solid #fff;
      }
      margin-top: 35px;
      padding-bottom: 35px;
      border-bottom: 1px solid whitesmoke;
      .item-head {
        padding-left: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .img-avatar {
          img {
            width: 60px;
            height: 60px;
            border-radius: 6px;
            vertical-align: middle;
          }
          .user {
            display: inline-block;
            vertical-align: middle;
            margin-left: 10px;
            p {
              font-size: 28px;
              color: $bg-color;
            }
            span {
              font-size: 24px;
              color: $color;
            }
          }
        }
        .delet-btn {
          height: 40px;
          min-width: 80px !important;
          font-size: 20px;
          padding: 0px;
          color: $bg-color;
          background-color: #fff;
          box-shadow: none;
          font-weight: normal;
          border: 2px solid $bg-color;
        }
      }
      .img-list {
        margin-top: 15px;
        padding: 0 0 0 80px;
        p {
          font-size: 28px;
          color: #1f2d3d;
          line-height: 36px;
          margin-bottom: 10px;
        }
        .flex {
          padding-right: 10px;
        }
        img {
          width: 100%;
        }
      }
      .user-handle {
        position: relative;
        .handle-box {
          transition: width 0.5s;
          width: 0px;
          position: absolute;
          right: 60px;
          top: 0px;
          font-size: 0px;
          height: 48px;
          line-height: 48px;
          border-radius: 8px;
          vertical-align: top;
          overflow: hidden;
          padding: 0 20px;
          background-color: #666;
          color: #fff;

          .small-icon {
            vertical-align: top;
            color: #fff;
          }
          span {
            vertical-align: top;
            font-size: 24px;
          }
        }
        .handle-yes {
          width: 230px;
          padding: 0px 20px;
        }
        .handle-no {
          width: 0px;
          padding: 0px;
        }
      }
      .show-time {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: $text-gray-color;
        margin-left: 80px;
        padding-right: 10px;
      }
      .comment {
        margin: 0 10px 0 80px;
        background-color: rgb(241, 241, 241);
        .good {
          display: flex;
          align-items: center;
          padding: 5px;
          border-bottom: 1px solid rgb(234, 234, 234);
          p {
            span {
              margin: 0 5px;
              color: $bg-color;
            }
          }
        }
        .my-comment {
          padding: 5px 10px 20px;
          p {
            .name {
              color: $bg-color;
            }
            .maohao {
              margin-right: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.img-box {
  position: relative;
  .icon-shanchu {
    position: absolute;
    color: red;
    top: 6px;
    right: 6px;
    background: #fff;
  }
}
.add-box {
  .addimg {
    width: 100%;
    padding: 50%;
    background: #ccc url("../../assets/add.png") center center / 50% no-repeat;
  }
}
.sheet-box {
  background: #fff !important;
  .sendBtn {
    background-color: #ff4000;
    color: #fff;
    padding: 10px 20px;
    line-height: 40px;
    margin-right: 15px;
  }
}
</style>

