<template>
  <nav class="main-nav">
    <a href="">
      {{ $t("app.name") }}
    </a>
    <ul class="left-menu">
      <li>
        <a
          href="https://www.youtube.com/channel/UCV2m2UifDGr3ebjSnDv5rUA"
          target="_blank"
        >
          <img src="../assets/img/youtube.png" alt="" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/kohigashihitona" target="_blank">
          <img src="../assets/img/twitter.png" alt="" />
        </a>
      </li>
    </ul>

    <ul class="right-menu">
      <li>
        <a @click="changeIdol"></a>
      </li>
      <li>
        <a @click="changeLanguage">{{ $t("app.otherLanguage") }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  methods: {
    changeLanguage() {
      // 所以为什么这玩意儿的this指针是指向这个实例
      // 却能修改整个网页的语言？
      this.$i18n.locale = this.$i18n.locale === "zh" ? "ja" : "zh";
    },
    changeIdol() {

    },
  },
};
</script>

<style scoped>
.main-nav {
  display: flex;
  align-items: center;
  background: #f8f8f8;
  border-bottom: 1px #e7e7e7 solid;
  padding: 7px 25px 0 25px;
}

.left-menu {
  display: flex;
  flex: 1;
  margin-left: 20px;
  /* 用align-items:center;没用是什么鬼 */
  padding-top: 3px;
}

.left-menu li {
  margin: 0 10px;
}

.left-menu img {
  height: 18px;
}
</style>