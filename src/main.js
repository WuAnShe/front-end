import Vue from 'vue'
import store from './store/index'
import App from './App.vue'
import i18n from "./i18n"
import vuetify from './plugins/vuetify'
import router from './router'

Vue.config.productionTip = false;

const app = new Vue({
  store,
  i18n,
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app');
app.$i18n.locale = 'zh';
