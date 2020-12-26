<template>
  <div id="app">
    <audio id="player" ref="player"></audio>
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from "./components/Navbar";
import store from "./store";
export default {
  name: "App",
  components: {
    NavBar,
  },
  store
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
li {
  list-style: none;
}

a {
  color: #777;
  text-decoration: none;
  cursor: pointer;
}
</style>
