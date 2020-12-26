<template>
  <div class="member-container">
    <div class="member-card" v-for="i in 4" :key="i">
      <img @click="changeRoute(i)" :src="imgSource(i)" />
    </div>
  </div>
</template>
<script>
import router from "../router";

export default {
  name: "Home",
  methods: {
    imgSource(i) {
      return require(`../assets/img/members/${i}.png`);
    },
    changeRoute(i) {
      console.log(i);
      router.push({ path: `/button/${i}` });
    },
  },
};
</script>

<style scoped>
.member-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1em;
  justify-items: center;
  margin-top: 20px;
}
.member-container :nth-child(odd) {
  justify-self: flex-end;
}
.member-container :nth-child(even) {
  justify-self: flex-start;
}
img {
  width: 30vw;
  height: 30vw;
  min-width: 512px;
  min-height: 512px;
  max-width: 896px;
  max-height: 896px;
}
/* 抄的 */
img:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);

  -webkit-box-shadow: 0 0 6px #999;
  box-shadow: 0 0 6px #999;

  -webkit-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
@media (max-width: 1024px) {
  .member-container {
    grid-template-columns: 1fr;
  }
  .member-container .member-card {
    justify-self: center;
  }
}
</style>