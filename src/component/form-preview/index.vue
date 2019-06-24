<template>
  <div class="pay-preview">
    <div class="preview__hd">
      <label class="label" v-html="headerLabel"></label>
      <em class="preview__value" v-html="headerValue || '&nbsp;'"></em>
    </div>
    <div class="preview__bd">
      <div class="preview__item" v-for="item in bodyItems">
        <label class="preview__label">{{(item.label)}}</label>
        <span class="preview__value">{{(item.value)}}</span>
      </div>
    </div>
    <div class="preview__ft">
      <a
        class="btn"
        href="javascript:"
        v-for="button in footerButtons"
        @click="onButtonClick(button.onButtonClick, button.link)"
      >{{(button.text)}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "form-preview",
  props: ["headerLabel", "headerValue", "bodyItems", "footerButtons", "name"],
  methods: {
    onButtonClick(cb, link) {
      cb && cb(this.name);
      if (link) {
        this.go(link, this.$router);
      }
    },
    go(url, $router) {
      if (/^javas/.test(url) || !url) return;
      const useRouter =
        typeof url === "object" ||
        ($router && typeof url === "string" && !/http/.test(url));
      if (useRouter) {
        if (typeof url === "object" && url.replace === true) {
          $router.replace(url);
        } else {
          url === "BACK" ? $router.go(-1) : $router.push(url);
        }
      } else {
        window.location.href = url;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pay-preview {
  color: #999999;
  background-color: #fff;
  .preview__hd {
    position: relative;
    padding: 20px 30px;
    text-align: right;
    line-height: 80px;
    &:after {
      position: absolute;
      content: " ";
      bottom: 0;
      right: 0;
      left: 30px;
      height: 2px;
      border-bottom: 2px solid #d9d9d9;
      color: #d9d9d9;
    }
    .label {
      float: left;
      margin-right: 32px;
      font-size: 32px;
      color: #999999;
      font-weight: 500;
      text-align: justify;
      text-align-last: justify;
    }
    .preview__value {
      display: block;
      overflow: hidden;
      word-break: normal;
      word-wrap: break-word;
      font-size: 46px;
      color: #000;
      font-style: normal;
    }
  }
  .preview__bd {
    padding: 20px 30px;
    .preview__item {
      line-height: 56px;
      text-align: right;
      .preview__label {
        float: left;
        font-size: 28px;
        margin-right: 28px;
        min-width: 115px;
        color: #999999;
        font-weight: 500;
        text-align: justify;
        text-align-last: justify;
      }
      .preview__value {
        font-size: 28px;
        font-weight: 500;
        display: block;
        overflow: hidden;
        word-break: normal;
        word-wrap: break-word;
      }
    }
  }
  .preview__ft {
    position: relative;
    line-height: 100px;
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      bottom: 0;
      right: 0;
      height: 2px;
      border-top: 2px solid #d5d5d6;
      color: #d5d5d6;
    }
    .btn {
      position: relative;
      display: block;
      flex: 1;
      text-align: center;
      font-size: 32px;
      &:after {
        content: " ";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        height: 2px;
        border-top: 2px solid #d5d5d6;
        color: #d5d5d6;
      }
    }
  }
}
</style>
