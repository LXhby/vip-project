<template>
  <div class="pay-preview">
    <div class="preview__hd">
      <label class="label" v-html="headerLabel"></label>
      <em class="preview__value" v-html="headerValue || '&nbsp;'"></em>
    </div>
    <div class="preview__bd">
      <div class="weui-form-preview__item" v-for="item in bodyItems">
        <label class="weui-form-preview__label">{{(item.label)}}</label>
        <span class="weui-form-preview__value">{{(item.value)}}</span>
      </div>
    </div>
    <div class="weui-form-preview__ft">
      <a
        class="weui-form-preview__btn"
        :class="{'weui-form-preview__btn_default': button.style==='default', 'weui-form-preview__btn_primary': button.style === 'primary'}"
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
      font-size: 36px;
      color: #999999;
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
  }
}
</style>
